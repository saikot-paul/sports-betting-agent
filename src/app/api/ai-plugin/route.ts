import { NextResponse } from "next/server";
import { GameKeys } from "@/src/app/models/game";

const key = JSON.parse(process.env.BITTE_KEY || "{}");
const config = JSON.parse(process.env.BITTE_CONFIG || "{}");

if (!key?.accountId) {
    console.error("no account");
}

export async function GET() {
    const pluginData = {
        openapi: "3.0.0",
        info: {
            title: "Boilerplate",
            description: "API for the boilerplate",
            version: "1.0.0",
        },
        servers: [
            {
                url: config.url,
            },
        ],
        "x-mb": {
            "account-id": key.accountId,
            assistant: {
                name: "Sports Betting Assistant",
                description: "An assistant that assists users in sports betting",
                instructions: "You answer with what what the user requires and help them navigate their betting options and where to place their bets. Should a user ask for active seasons ask them which league they are interested in the most next. Should they ask for the odds of a league then ask them if they want to bet.",
                tools: [{ type: "generate-transaction" }, { type: "get-active" }, { type: "get-odds" }]
            },
        },
        paths: {
            "/api/tools/get-active": {
                get: {
                    summary: "Gets list of active leagues that can be bet on",
                    description: "Fetches and returns a list of leagues with active games that can be bet on",
                    operationId: "get-active",
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                key: {
                                                    type: "string",
                                                    description: "Unique identifier for the game",
                                                },
                                                group: {
                                                    type: "string",
                                                    description: "Group classification of the game",
                                                },
                                                league: {
                                                    type: "string",
                                                    description: "League associated with the game",
                                                },
                                                description: {
                                                    type: "string",
                                                    description: "Description of the game",
                                                },
                                                active: {
                                                    type: "boolean",
                                                    description: "Indicates if the game is active",
                                                },
                                                has_outrights: {
                                                    type: "boolean",
                                                    description: "Indicates if the game includes outright bets",
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        "500": {
                            description: "Error response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/api/tools/get-odds": {
                get: {
                    operationId: "getOddsForLeague",
                    summary: "Returns the list of odds for active games, given a league",
                    description: "Finds active games for a league and then returns the betting odds per each game",
                    parameters: [
                        {
                            name: "sportLeague",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string",
                                enum: Object.values(GameKeys)
                            },
                            description: "The league for which to get odds"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: { type: "string", description: "Unique identifier for the game" },
                                                sport_title: { type: "string", description: "Title of the sport or league" },
                                                commence_time: { type: "string", format: "date-time", description: "Game start time" },
                                                home_team: { type: "string", description: "Home team name" },
                                                away_team: { type: "string", description: "Away team name" },
                                                bookmakers: {
                                                    type: "array",
                                                    items: {
                                                        type: "object",
                                                        properties: {
                                                            title: { type: "string", description: "Bookmaker name" },
                                                            last_update: { type: "string", format: "date-time", description: "Last update time" },
                                                            markets: {
                                                                type: "array",
                                                                items: {
                                                                    type: "object",
                                                                    properties: {
                                                                        market_type: { type: "string", description: "Market type (e.g., h2h, spreads)" },
                                                                        outcomes: {
                                                                            type: "array",
                                                                            items: {
                                                                                type: "object",
                                                                                properties: {
                                                                                    team: { type: "string", description: "Team or outcome name" },
                                                                                    price: { type: "number", description: "Betting odds" },
                                                                                    point: { type: "number", nullable: true, description: "Point spread (if applicable)" }
                                                                                }
                                                                            },
                                                                            description: "Possible outcomes"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Invalid league parameter",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: { type: "string", description: "Error message" }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Internal server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: { type: "string", description: "Error message" }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/get-user": {
                get: {
                    summary: "Get user information",
                    description: "Respond with user account ID",
                    operationId: "get-user",
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            accountId: {
                                                type: "string",
                                                description: "The user's account ID",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/api/tools/create-transaction": {
                get: {
                    operationId: "createNearTransaction",
                    summary: "Create a NEAR transaction payload",
                    description: "Generates a NEAR transaction payload for transferring tokens",
                    parameters: [
                        {
                            name: "receiverId",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "The NEAR account ID of the receiver"
                        },
                        {
                            name: "amount",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "The amount of NEAR tokens to transfer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            transactionPayload: {
                                                type: "object",
                                                properties: {
                                                    receiverId: {
                                                        type: "string",
                                                        description: "The receiver's NEAR account ID"
                                                    },
                                                    actions: {
                                                        type: "array",
                                                        items: {
                                                            type: "object",
                                                            properties: {
                                                                type: {
                                                                    type: "string",
                                                                    description: "The type of action (e.g., 'Transfer')"
                                                                },
                                                                params: {
                                                                    type: "object",
                                                                    properties: {
                                                                        deposit: {
                                                                            type: "string",
                                                                            description: "The amount to transfer in yoctoNEAR"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Error response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
    };

    return NextResponse.json(pluginData);
}

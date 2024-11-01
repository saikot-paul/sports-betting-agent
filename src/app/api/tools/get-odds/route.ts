import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const sportKey = searchParams.get("sportLeague")
    console.log(sportKey)

    const oddsJSON = JSON.parse(process.env.ODDS_API || "{}")
    const key = oddsJSON.key

    const getURL = `https://api.the-odds-api.com/v4/sports/${sportKey}/odds/?apiKey=${key}&regions=us`
    console.log(getURL)

    try {
        const response = await fetch(getURL)

        if (!response.ok) {
            throw new Error("Error fetching active games")
        }

        const games = await response.json()

        return NextResponse.json(games)
    } catch (error) {
        console.error("Failed to fetch games:", error);
        return NextResponse.json({ error: "Failed to fetch games" }, { status: 500 });
    }

}
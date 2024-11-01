export interface Game {
    readonly key: string,
    readonly group: string,
    readonly league: string,
    readonly description: string,
    readonly active: boolean,
    readonly has_outrights: boolean
}

export enum GameKeys {
    AmericanFootball_CFL = "americanfootball_cfl",
    AmericanFootball_NCAAF = "americanfootball_ncaaf",
    AmericanFootball_NCAAF_Championship_Winner = "americanfootball_ncaaf_championship_winner",
    AmericanFootball_NFL = "americanfootball_nfl",
    AmericanFootball_NFL_Super_Bowl_Winner = "americanfootball_nfl_super_bowl_winner",
    Baseball_KBO = "baseball_kbo",
    Baseball_MLB = "baseball_mlb",
    Baseball_MLB_World_Series_Winner = "baseball_mlb_world_series_winner",
    Basketball_Euroleague = "basketball_euroleague",
    Basketball_NBA = "basketball_nba",
    Basketball_NBA_Championship_Winner = "basketball_nba_championship_winner",
    Basketball_NCAAB = "basketball_ncaab",
    Basketball_NCAAB_Championship_Winner = "basketball_ncaab_championship_winner",
    Boxing_Boxing = "boxing_boxing",
    Cricket_Test_Match = "cricket_test_match",
    Golf_Masters_Tournament_Winner = "golf_masters_tournament_winner",
    Golf_PGA_Championship_Winner = "golf_pga_championship_winner",
    IceHockey_NHL = "icehockey_nhl",
    IceHockey_NHL_Championship_Winner = "icehockey_nhl_championship_winner",
    IceHockey_Sweden_Allsvenskan = "icehockey_sweden_allsvenskan",
    IceHockey_Sweden_Hockey_League = "icehockey_sweden_hockey_league",
    MMA_Mixed_Martial_Arts = "mma_mixed_martial_arts",
    Politics_US_Presidential_Election_Winner = "politics_us_presidential_election_winner",
    Soccer_Argentina_Primera_Division = "soccer_argentina_primera_division",
    Soccer_Australia_ALeague = "soccer_australia_aleague",
    Soccer_Austria_Bundesliga = "soccer_austria_bundesliga",
    Soccer_Belgium_First_Div = "soccer_belgium_first_div",
    Soccer_Brazil_Campeonato = "soccer_brazil_campeonato",
    Soccer_Brazil_Serie_B = "soccer_brazil_serie_b",
    Soccer_Chile_Campeonato = "soccer_chile_campeonato",
    Soccer_China_Superleague = "soccer_china_superleague",
    Soccer_Conmebol_Copa_Libertadores = "soccer_conmebol_copa_libertadores",
    Soccer_Denmark_Superliga = "soccer_denmark_superliga",
    Soccer_EFL_Championship = "soccer_efl_champ",
    Soccer_England_EFL_Cup = "soccer_england_efl_cup",
    Soccer_England_League1 = "soccer_england_league1",
    Soccer_England_League2 = "soccer_england_league2",
    Soccer_EPL = "soccer_epl",
    Soccer_FA_Cup = "soccer_fa_cup",
    Soccer_FIFA_World_Cup_Winner = "soccer_fifa_world_cup_winner",
    Soccer_France_Ligue_One = "soccer_france_ligue_one",
    Soccer_France_Ligue_Two = "soccer_france_ligue_two",
    Soccer_Germany_Bundesliga = "soccer_germany_bundesliga",
    Soccer_Germany_Bundesliga2 = "soccer_germany_bundesliga2",
    Soccer_Germany_Liga3 = "soccer_germany_liga3",
    Soccer_Greece_Super_League = "soccer_greece_super_league",
    Soccer_Italy_Serie_A = "soccer_italy_serie_a",
    Soccer_Italy_Serie_B = "soccer_italy_serie_b",
    Soccer_Japan_J_League = "soccer_japan_j_league",
    Soccer_Korea_KLeague1 = "soccer_korea_kleague1",
    Soccer_League_Of_Ireland = "soccer_league_of_ireland",
    Soccer_Mexico_LigaMX = "soccer_mexico_ligamx",
    Soccer_Netherlands_Eredivisie = "soccer_netherlands_eredivisie",
    Soccer_Norway_Eliteserien = "soccer_norway_eliteserien",
    Soccer_Poland_Ekstraklasa = "soccer_poland_ekstraklasa",
    Soccer_Portugal_Primeira_Liga = "soccer_portugal_primeira_liga",
    Soccer_Spain_La_Liga = "soccer_spain_la_liga",
    Soccer_Spain_Segunda_Division = "soccer_spain_segunda_division",
    Soccer_SPL = "soccer_spl",
    Soccer_Sweden_Allsvenskan = "soccer_sweden_allsvenskan",
    Soccer_Sweden_Superettan = "soccer_sweden_superettan",
    Soccer_Switzerland_Superleague = "soccer_switzerland_superleague",
    Soccer_Turkey_Super_League = "soccer_turkey_super_league",
    Soccer_UEFA_Champions_League = "soccer_uefa_champs_league",
    Soccer_USA_MLS = "soccer_usa_mls"
}

export const changeWebTitle = title => {
    document.title = title;
}

export const changeWebFavicon = favicon => {
    let link = document.querySelector("link[rel~='icon']");
    link.href = favicon;
}

export const getNumberWithOrdinal = n => {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export const hasRankDivisionChanged = mmr => {
    if(mmr.mmr_change_to_last_game > 0 && mmr.mmr_change_to_last_game > mmr.ranking_in_tier) {
        return true
    } else if(mmr.mmr_change_to_last_game < 0 && (mmr.ranking_in_tier + Math.abs(mmr.mmr_change_to_last_game) === 100)) {
        return true
    } else {
        return false
    }
}

export const formatMatches = ({matches, MMRHistory, profileId}) => {
    const matchesFormated = matches.map(match => {
        match.playerSelected = match.players.all_players.find(player => player.puuid === profileId) // Who is the player of the current profile
        match.players.all_players.sort((a, b) => b.stats.score - a.stats.score)
        match.winnerTeam = match.teams.red.has_won ? 'Red' : 'Blue' // Which team won
        match.playerWon = match.playerSelected.team === match.winnerTeam // If the player won
        let matchDate = new Date(match.metadata.game_start_patched)
        matchDate.setHours(matchDate.getHours() + 2); // Change timezone to Madrid
        match.matchHour = matchDate.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true }) // Format time
        match.matchDate = matchDate.toLocaleString('es-ES', {day: 'numeric', month: 'numeric', year: 'numeric' }) // Format date
        match.playerSelected.stats.kda = ((match.playerSelected.stats.kills * (match.playerSelected.stats.assists / 3)) / match.playerSelected.stats.deaths).toFixed(2) // Add KDA variable
        match.playerPosition = match.players.all_players.findIndex(player => player.puuid === profileId) + 1 // Player position in match
        match.mmr = MMRHistory.find(mmrItem => mmrItem.match_id === match.metadata.matchid) // Link mmrHistory match object with profileMatch
        match.playerSelected.damagePerCredits = Math.round(match.playerSelected.damage_made / (match.playerSelected.economy.spent.overall / 1000)) // Add damage per 1000 credits data calculation
        
        return match
    })
    return matchesFormated
}
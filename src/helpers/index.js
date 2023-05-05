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
        match.winnerTeam = match.teams.red.has_won ? 'Red' : 'Blue' // Which team won
        match.players.all_players.sort((a, b) => b.stats.score - a.stats.score) // Sort players by score
        match.players.all_players = match.players.all_players.map((player, index) => {
            player.isCurrentProfile = player.puuid === profileId // If this player is the current profile
            player.hasWon = player.team === match.winnerTeam // If the player won
            player.matchPosition = index + 1 // Add position
            player.stats.kda = ((player.stats.kills * (player.stats.assists / 3) / player.stats.deaths)).toFixed(2) // Add KDA
            player.damagePerCredits = Math.round(player.damage_made / (player.economy.spent.overall / 1000)) // Add damage per 1000 credits data calculation
            return player
        })
        match.playerSelected = match.players.all_players.find(player => player.puuid === profileId) // Who is the player of the current profile
        match.playerWon = match.playerSelected.team === match.winnerTeam // If the player won
        let matchDate = new Date(match.metadata.game_start_patched)
        matchDate.setHours(matchDate.getHours() + 2); // Change timezone to Madrid
        match.matchHour = matchDate.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true }) // Format time
        match.matchDate = matchDate.toLocaleString('es-ES', {day: 'numeric', month: 'numeric', year: 'numeric' }) // Format date
        match.mmr = MMRHistory.find(mmrItem => mmrItem.match_id === match.metadata.matchid) // Link mmrHistory match object with profileMatch
        match.isDeathmatch = match.metadata.mode === 'Deathmatch'
        match.isDraw = match.teams.red.rounds_won === match.teams.blue.rounds_won
        
        
        return match
    })
    return matchesFormated
}

export const getStylesForMatch = (match, isWizen) => {
    let classNames = ''
    classNames += isWizen && " before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-30 before:bg-no-repeat before:bg-contain md:before-bg-auto "
    if(match.isDeathmatch) {
        classNames += ' bg-slate-300/25 border-slate-100 '
        classNames += isWizen && " before:bg-[url('/wizencara-deathmatch.jpg')] "
    } else {
        if(match.isDraw) {
            classNames += ' bg-slate-500/25 border-slate-400 '
            classNames += isWizen && " before:bg-[url('/wizencara-rara.jpg')] "
        } else {
            classNames += match.playerWon ? ' bg-[#64C2A7]/25 border-green-400 ' : ' bg-[#ff4357]/25 border-red-400 '
            classNames += isWizen && (match.playerWon ? " before:bg-[url('/wizencara.jpg')] " : " before:bg-[url('/wizencaragrito.jpg')] ")
        }
    }
    return classNames;
}
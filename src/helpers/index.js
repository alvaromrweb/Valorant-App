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
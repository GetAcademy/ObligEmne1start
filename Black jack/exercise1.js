function countBlackJackPoints(cards) {
    let points = 0;
    for (let card of cards) {
        let suitAndRank = card.split(' ');
        let rank = suitAndRank[1];
        points += parseInt(rank);
    }
    return points;
}
// https://leetcode.com/problems/rank-teams-by-votes

import Tests from '../TestHelpers'

function rankTeams(votes: string[]): string {
    const teams = new Set(votes.join(''))
    const notepad = {}
    for (let team of teams) {
        notepad[team] = Array(teams.size).fill(0)
    }
    if (teams.size === 1) {
        return Array.from(teams)[0]
    } else if (votes.length === 1) {
        return votes[0]
    }
    for (let vote of votes) {
        for (let rank = 0; rank < vote.length; rank++) {
            let team = vote[rank]
            notepad[team][rank]++
        }
    }
    const scores = []
    for (let team in notepad) {
        let score = parseInt(notepad[team].join(''), 10)
        scores.push({ team, score })
    }
    let sameScore = true
    for (let i = 0; i < scores.length - 1; i++) {
        let j = i + 1
        if (scores[i].score !== scores[j].score) {
            sameScore = false
            break
        }
    }
    if (sameScore) {
        scores.sort((a, b) => {
            if (a.team < b.team) {
                return -1
            }
            if (a.team > b.team) {
                return 1
            }
            return 0
        })
    } else {
        scores.sort((a, b) => b.score - a.score)
    }
    return scores.reduce((result, score) => result + score.team, '')
}

let tests = new Tests(
    [['ABC', 'ACB', 'ABC', 'ACB', 'ACB'], 'ACB'],
    [['WXYZ', 'XYZW'], 'XWYZ'],
    [['ZMNAGUEDSJYLBOPHRQICWFXTVK'], 'ZMNAGUEDSJYLBOPHRQICWFXTVK'],
    [['M', 'M', 'M', 'M'], 'M'],
    [['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC'], 'ABC']
)

tests.run(rankTeams)

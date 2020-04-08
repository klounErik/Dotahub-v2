import React, { useState, useEffect } from 'react'
import { GetPlayerMatches, GetPlayerData } from '../api/Api'
import './Player.css'
import { FaSteam } from 'react-icons/fa'

export default function Player() {

    const [playerData, setPlayerData] = useState(null)
    const [playerResults, setPlayerResults] = useState(null)

    useEffect(() => {
        GetPlayerMatches(28122613)
            .then(res => setPlayerData(res))

        GetPlayerData(28122613, 'wl')
            .then(res => setPlayerResults(res))
    }, [])



    const GetRank = number => {
        return <div className="rank">
            <div className="rankMedal">
                <img className="rankMedal-icon" src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${number.toString().charAt(0)}.png`} />
                <img className="rankMedal-star" src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${number.toString().charAt(1)}.png`} />
            </div>
        </div>
    }

    const GetWinRate = (win, loss) => {
        let totalgames = win + loss
        let winrate = (win / totalgames) * 100

        return `${winrate.toPrecision(4)}%`
    }

    console.log(playerData)

    return (
        playerData ? playerResults ? 
            <div className="player-profile">
                <div className="imageContainer">
                    <img src={playerData.profile.avatarfull} />
                </div>
                <div className="player-stats">
                    <div className="player-name">
                    <h2>{playerData.profile.personaname}</h2>
                    <a><FaSteam /></a>
                    </div>
                    <div className="stats">
                        <div className="player-stats-results">
                            <span style={{fontSize: 20}}>Wins</span>
                            <span className="result-win">{playerResults.win}</span>
                        </div>
                        <div className="player-stats-results">
                            <span style={{fontSize: 20}}>Losses</span>
                            <span className="result-loss">{playerResults.lose}</span>
                        </div>
                        <div className="player-stats-results">
                            <span style={{fontSize: 20}}>Winrate</span>
                            <span style={{fontSize: 20}}>{GetWinRate(playerResults.win, playerResults.lose)}</span>
                        </div>
                    </div>
                </div>
                <div className="player-badges">
                    {playerData.profile.plus ? <img height={75} width={65} src={'https://www.opendota.com/assets/images/dota2/dota_plus_icon.png'} /> : null}
                    {GetRank(playerData.rank_tier)}
                </div>
            </div> : <h2>Loading....</h2> : <h2>Loading...</h2>
    )
}

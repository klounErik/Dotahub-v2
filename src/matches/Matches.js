import React, { useEffect, useState } from 'react'
import Heroes from './assets/Heroes.json'

import { Table } from 'antd'

export default function Matches() {

    const [matchData, setMatchData] = useState(null)

    useEffect(() => {
        fetch('https://api.opendota.com/api/players/28122613/matches')
            .then(res => res.json())
            .then(json => setMatchData(json))
    }, [])


    const getWinner = number => {
        let radiant = [0, 1, 2, 3, 4]
        if (radiant.find(e => e === number)) {
            return true
        }
        else {
            return false
        }
    }

    const getSkill = number => {
        switch (number) {
            case 1:
                return <p>Normal</p>
            case 2:
                return <p>High</p>
            case 3:
                return <p>Very High</p>
            default:
                break;
        }
    }

    const getGameMode = number => {
        if (number === 22) {
            return 'Ranked'
        } else {
            return 'Normal'
        }
    }

    const Win = (
        <p style={{ color: 'green' }}>Victory</p>
    )

    const Loss = (
        <p style={{ color: 'red' }}>Loss</p>
    )


    const columns = [
        {
            title: "Hero",
            dataIndex: 'hero_id',
            render: (item) =>
                <div className="hero">
                    <img height={50} src={`http://cdn.dota2.com/${Heroes[item].img}`} />
                    <p>{Heroes[item].localized_name}</p>
                </div>
        },
        {
            title: 'Match ID',
            dataIndex: 'match_id',
            render: (id, item) => <a href={`/matches/${item.match_id}`}>{item.match_id}</a>
        },
        {
            title: 'Game Mode',
            dataIndex: 'game_mode',
            render: (id, item) => getGameMode(item.game_mode)
        },
        {
            title: 'Result',
            dataIndex: 'radian_win',
            render: (id, item) => getWinner(item.player_slot) === item.radiant_win ? Win : Loss
        },
        {
            title: 'Skill',
            dataIndex: 'skill',
            render: (id, item) => getSkill(item.skill)
        },
        {
            title: 'Kills',
            dataIndex: 'kills',
        },
        {
            title: 'Deaths',
            dataIndex: 'deaths',
        },
        {
            title: 'Assists',
            dataIndex: 'assists',
        }
    ]

    return (
        <div>
            <Table pagination={{ position: "bottomCenter" }} rowKey={item => item.match_id} columns={columns} dataSource={matchData} />
        </div>
    )
}

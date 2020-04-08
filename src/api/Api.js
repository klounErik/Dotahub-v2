

// https://api.opendota.com/api/players/28122613



    const GetPlayer = async (id) => {
        const res = await fetch(`https://api.opendota.com/api/players/${id}`, {
            method: 'GET'
        })
        const json = res.json()
        return json
    }

    const GetPlayerStats = async (id, parameter) => {
        const res = await fetch(`https://api.opendota.com/api/players/${id}/${parameter}`, {
            method: 'GET'
        })
        const json = res.json()
        return json
    }

    const GetMatch = async (id) => {
        fetch(`https://api.opendota.com/api/mathces/${id}`, {
            method: 'GET'
        }).then(res => console.log(res))
    }
    
    export const GetPlayerMatches = (id) => {
        return GetPlayer(id)
    }

    export const GetPlayerData = (id, parameter) => {
        return GetPlayerStats(id, parameter)
    }



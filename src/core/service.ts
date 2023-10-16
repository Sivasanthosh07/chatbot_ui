const backendUrl = "http://127.0.01:5000"


export const createBotService = async (formData: any): Promise<any> => {

    const resp = await fetch(backendUrl + '/createbot', {
        method: 'POST',
        body: formData,
    })
    const data = await resp.json()
    return data
}

export const getBotList = async (): Promise<any> => {

    const resp = await fetch(backendUrl + '/listbot', {
        method: 'GET'
    })
    const data = await resp.json()
    return data
}



export const sendMessage = async (dataObj: Object): Promise<any> => {

    const resp = await fetch(backendUrl + '/chat', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(dataObj)
    })
    const data = await resp.json()
    return data
}


export const deleteBot = async (id: string): Promise<any> => {

    const resp = await fetch(backendUrl + '/delete_bot/' + id, {
        method: 'DELETE'
    })
    const data = await resp.json()
    return data
}


import { Button, Grid } from "@mui/material"
import ChatMessage from "./Chat"
import { useEffect, useRef, useState } from "react"

function ChatBox() {
    const ref = useRef<any>(null);
    const [chatMsg, setChatMsg] = useState("")
    const [chatHistory, setChatHistory] = useState<[] | any>([
        {
            avatar: "",
            isBot: true,
            message: "Hello, User"
        },
        {
            avatar: "",
            isBot: false,
            message: "Hello, Bot"
        },
        {
            avatar: "",
            isBot: true,
            message: "How can i help you"
        },
        {
            avatar: "",
            isBot: false,
            message: "What is interest rate for home loan?"
        }, {
            avatar: "",
            isBot: true,
            message: "How can i help you"
        },
    ])

    const handleSend = () => {

        console.log("send via socket..")
        const chat = {
            avatar: "",
            isBot: false,
            message: chatMsg
        }
        chatHistory.push(chat)
        setChatHistory([...chatHistory])
        setChatMsg("")
        ref.current.focus()
    }

    const handleKeyDown = (e: any) => {
        var key = e.keyCode;

        // If the user has pressed enter
        if (key === 13) {
            handleSend()
        }

    }



    // useEffect(()=>{
    //     setChatHistory(chatHistory)
    //     console.log(chatMsg)
    // },[chatHistory])

    return (
        <>
            <div style={{ paddingTop: "20px" }}>
                <div style={{ height: "78vh", overflowY: 'auto' }}>
                    {
                        chatHistory.map((cht: any) => (
                            <Grid container style={{ padding: "5px" }}>
                                <Grid item xs={3}>
                                    {cht.isBot && <img className="avatar" src="robo.jpg"></img>}
                                </Grid>
                                <Grid item xs={6}>
                                    <ChatMessage data={cht}></ChatMessage>
                                </Grid>
                                <Grid item xs={3}>

                                </Grid>
                            </Grid>
                        ))
                    }
                </div>

                <Grid container className="send-msg" >
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={6}>
                        <form  >
                            <div style={{ display: "flex" }}>
                                <textarea ref={ref} value={chatMsg} onKeyDown={e => handleKeyDown(e)} onChange={e => setChatMsg(e.target.value)} style={{ width: "99%", height: "80px", padding: "12px", fontSize: "14px" }}></textarea>
                                <Button onClick={handleSend} color="primary" variant="contained" >Send</Button>
                            </div>
                        </form>

                    </Grid>

                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>
        </>
    )
}


export default ChatBox
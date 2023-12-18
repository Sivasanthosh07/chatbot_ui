import { Button, Grid } from "@mui/material"
import ChatMessage from "./Chat"
import { useContext, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { sendMessage } from "../core/service";
import { SocketContext } from "../core/context/socket";

function ChatBox() {
    const ref = useRef<any>(null);
    const messagesEndRef = useRef<any>(null)
    const [chatMsg, setChatMsg] = useState("")
    const [sktId, setSktId] = useState("")
    const params = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const socket = useContext(SocketContext);


    const [chatHistory, setChatHistory] = useState<[] | any>([

        {
            avatar: "",
            isBot: true,
            message: "How can I help you"
        }

    ])

    const handleSend = () => {
        if (chatMsg.trim()) {
            console.log("send via socket..")
            const chat = {
                avatar: "",
                isBot: false,
                message: chatMsg
            }
            chatHistory.push(chat)
            setChatHistory([...chatHistory])

            async function sendMsg() {
                const task = await sendMessage({
                    id: params.id,
                    name: params.name,
                    question: chatMsg

                })
                console.log("async skt ::", task.taskId)
                setSktId(task.taskId)
            }
            sendMsg()

            setChatMsg("")
            ref.current.focus()
            setIsLoading(true)
        }

    }

    socket.on(sktId, (data: any) => {
        console.log("skt called", sktId, data)
        const botReply = {
            avatar: "",
            isBot: true,
            message: data.answer
        }
        chatHistory.push(botReply)
        setChatHistory([...chatHistory])
        setIsLoading(false)

    })

    const handleKeyDown = (e: any) => {
        var key = e.keyCode;

        // If the user has pressed enter
        if (key === 13) {
            handleSend()
        }

    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {

        scrollToBottom()
    }, [chatHistory]);



    return (
        <>
            <div style={{ marginTop: "5px" }}>
                <Grid container spacing={0} direction={"column"} alignItems={"center"} >
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6} >
                        <span style={{ fontSize: "26px", fontWeight: "bolder" }}>{params.name}  <span style={{ color: "blue" }}>- BOT</span></span>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>

            <div style={{ paddingTop: "20px" }}>
                <div style={{ height: "73vh", overflowY: 'auto' }}>
                    {
                        chatHistory.map((cht: any) => (
                            <Grid key={nanoid()} container style={{ padding: "5px" }}>
                                <Grid item xs={3}>
                                    {cht.isBot && <img className="avatar" src="/robo.jpg"></img>}
                                </Grid>
                                <Grid item xs={6}>
                                    <ChatMessage data={cht}></ChatMessage>
                                </Grid>
                                <Grid item xs={3}>

                                </Grid>
                            </Grid>
                        ))
                    }

                    <div ref={messagesEndRef} />
                </div>

                <Grid container className="send-msg" >
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={6}>
                        <form  >
                            {isLoading && <p className="loading">Typing</p>}
                            <div style={{ display: "flex", marginBottom: "10px" }}>
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
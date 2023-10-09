import { Button, Grid} from "@mui/material"
import ChatMessage from "./Chat"

const chatHistory = [
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
    }
]

function ChatBox() {

    return (
        <>
            <div>
                <div style={{ height: "80vh", border: '1px solid #ccc', overflowY: 'auto' }}>
                    {
                        chatHistory.map((cht) => (
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
                        <div style={{ display: "flex" }}>
                            <textarea style={{ width: "99%", height: "80px", padding: "12px", fontSize: "14px" }}></textarea>
                            <Button color="primary" variant="contained" >send</Button>
                        </div>

                    </Grid>

                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>
        </>
    )
}


export default ChatBox
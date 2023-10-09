import { Typography } from "@mui/material"

function ChatMessage(props:any){
    const data = props.data
    console.log(props)
return (
    <>
    <div className={data.isBot==true?"talkbubble-left":"talkbubble-right"}>
        <Typography style={{padding:"25px"}}>{data.message}</Typography>
    </div>
    </>
)
}


export default ChatMessage
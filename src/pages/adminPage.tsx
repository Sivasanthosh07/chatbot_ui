import { Button, Grid, IconButton, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, inputClasses, tableCellClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from "react";
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import clsx from 'clsx';
import { FileUploadOutlined, FileUpload, Label } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { createBotService, getBotList } from "../core/service";
import { nanoid } from "nanoid";
import { SocketContext } from "../core/context/socket";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#187380",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function AdminPage() {
    const socket = useContext(SocketContext);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const [botName, setBotName] = useState("")
    const [botList, setBotList] = useState([{}])
    const [sktId, setSktId] = useState("")

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(event.target.files);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!selectedFiles || selectedFiles.length === 0) {
            alert('Please select one or more files to upload.');
            return;
        }
        setIsLoading(true)
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }
        formData.append("name", botName)
        const task = await createBotService(formData)
        console.log(task, task.taskId)

        setSktId(task.taskId)
        const tempData = {
            id: nanoid(), name: botName, status: "Pending", taskId: task.taskId
        }
        setBotList([...botList, tempData]);

        // setSktTopic(task.taskId)
        // props.setSktId(task.taskId)

    }

    useEffect(() => {
        async function getBanks() {
            const banks = await getBotList()
            setBotList(banks)
        }
        getBanks()
       
    }, [])

    socket.on(sktId, (data: any) => {
        console.log("skt called", sktId)
        const objIndex = botList.findIndex(((obj: any) => obj.taskId == sktId));
        const newData = {
            id: data.id,
            name: data.name,
            status: "Active"
        }

        botList[objIndex] = newData
        console.log(botList)
        setBotList(botList)
        setIsLoading(false)
    })

    return (
        <>

            <div style={{ paddingTop: "50px" }}>
                <Grid container spacing={10} >
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography fontSize={"24px"} style={{ fontWeight: "bold" }}>Available bots</Typography>
                        <TableContainer component={Paper} style={{ marginTop: "50px" }}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Bot name</StyledTableCell>
                                        <StyledTableCell >Status</StyledTableCell>
                                        <StyledTableCell align="center" >-</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {botList.map((row: any) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row"><a href={`/chatbot/${row.id}`}>{row.name}</a></StyledTableCell>
                                            <StyledTableCell >{row.status}</StyledTableCell>
                                            <StyledTableCell align="center"> <Button color={"error"} variant="text" startIcon={<DeleteIcon />}>Delete</Button></StyledTableCell>

                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography fontSize={"24px"} style={{ fontWeight: "bold" }}>Create a bot</Typography>
                        <form style={{ width: "60%", paddingTop: "50px" }}>
                            <FormControl defaultValue="" required>
                                <Typography >Name</Typography>
                                <TextField onChange={(e) => setBotName(e.target.value)} id="outlined-basic" variant="outlined" fullWidth />
                            </FormControl>

                            <FormControl defaultValue="" style={{ paddingTop: "10px" }} required>
                                <Typography>Upload documents</Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="file"
                                    onChange={handleFileChange}
                                    inputProps={{
                                        multiple: true
                                    }}
                                />
                            </FormControl>
                            <FormControl defaultValue="" style={{ paddingTop: "10px" }} required >
                                <Button onClick={handleSubmit} variant="contained" style={{ background: "#187380" }} >Create</Button>
                            </FormControl>

                        </form>

                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AdminPage




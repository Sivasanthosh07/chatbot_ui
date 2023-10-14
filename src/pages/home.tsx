import { Box, FormControl, Grid, MenuItem, OutlinedInput, Select } from "@mui/material";
import Bot2 from "../components/Bot2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { getBotList } from "../core/service";


// mob
// #37474F
// #263238

// robo
// #D1E3E6
// #7AAEB5

// man
// #187380
// #135B66

// #FAFAFA


function HomePage() {
    const [bank, setBank] = useState("0")

    const [listBankBots, setListBankBots] = useState([])
    const navigate = useNavigate()


    const handleSelectedItem = (id: any) => {
        navigate(`/chatbot/${id}`)
    }

    useEffect(() => {

        async function getBanks() {
            const banks = await getBotList()
            setListBankBots(banks)
        }
        getBanks()
    }, [])

    return (
        <>
            <Box mt={"10vh"}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6} textAlign={"center"}>
                        <Bot2></Bot2>
                    </Grid>
                    <Grid item xs={4}  >

                        <h1 style={{ color: "#37474F" }} >Please choose a bank from the list below</h1>

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="bankList"
                                    id="demo-simple-select"
                                    value={bank}
                                    label="bankNames"
                                    onChange={e => { setBank(e.target.value) }}
                                    input={<OutlinedInput></OutlinedInput>}

                                    sx={{
                                        color: "#263238",
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: "#37474F",
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: ' #D1E3E6',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: ' #D1E3E6',
                                        }
                                    }}


                                >
                                    <MenuItem key={nanoid()} value={"0"} selected disabled>--select--</MenuItem>
                                    {

                                        listBankBots.map((b: any) => (
                                            <MenuItem key={b.id} value={b.id} onClick={() => handleSelectedItem(b.id)}>{b.name}</MenuItem>
                                        ))
                                    }


                                </Select>
                            </FormControl>
                        </Box>


                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default HomePage
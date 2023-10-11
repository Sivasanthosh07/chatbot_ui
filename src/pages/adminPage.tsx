import { Button, Grid, IconButton, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, inputClasses, tableCellClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import clsx from 'clsx';
import { FileUploadOutlined, FileUpload, Label } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';

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

    const handleUpload = () => { }
    const rows = [
        { id: "1", name: "HDFC", status: "Active" },
        { id: "2", name: "SBI", status: "Active" },
    ]



    console.log(rows)
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
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
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
                                <TextField id="outlined-basic" variant="outlined" fullWidth />
                            </FormControl>

                            <FormControl defaultValue="" style={{ paddingTop: "10px" }} required>
                                <Typography>Upload documents</Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="file"
                                    inputProps={{
                                        multiple: true
                                    }}
                                />
                            </FormControl>
                            <FormControl defaultValue="" style={{ paddingTop: "10px" }} required >
                                <Button variant="contained" style={{ background: "#187380" }}>Create</Button>
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




import { useState, useEffect } from "react";
import { AppBar, Table, TableHead, TableRow, TableCell, Toolbar, Typography, Container, TableBody } from "@mui/material"
import axios from "axios";

const Deaths = () => {
    const [deathCases, setDeathCases] = useState([]);
    const inputData = [];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
                'X-RapidAPI-Key': 'b632aa7667mshf0d5e566c9f5bdfp157300jsn0f910544a237',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        }).then((response) => {
            setDeathCases(response.data.response);
        }).catch(function (error) {
            console.error(error);
        });
    }
    console.log(deathCases);
    deathCases.map((dCase) => (
        inputData.push({
            new: dCase.deaths.new,
            total: dCase.deaths.total

        })
    ))
    console.log(inputData, "ddddd");
    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Typography><strong>Covid Deaths</strong></Typography>
                </Toolbar>
            </AppBar>
            <Table style={{ marginTop: "100px" }}>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>New Deaths</strong></TableCell>
                        <TableCell><strong>Total Deaths</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inputData.map((value) => (
                        <TableRow>
                            <TableCell>{value.new}</TableCell>
                            <TableCell>{value.total} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container >
    )
}
export default Deaths;
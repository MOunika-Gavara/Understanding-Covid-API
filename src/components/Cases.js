import React, { useState, useEffect } from "react";
import { AppBar, Table, TableHead, TableRow, TableCell, Toolbar, Typography, Container, TableBody, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Cases = () => {
    const [covidCases, setCovidCases] = useState([]);
    const caseData = [];

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios({
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
                'X-RapidAPI-Key': 'b632aa7667mshf0d5e566c9f5bdfp157300jsn0f910544a237',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        }).then((response) => {
            console.log(response.data, "responseeee")
            setCovidCases(response.data.response);
        }).catch(function (error) {
            console.error(error);
        });
    }
    console.log(covidCases, "coviddd");
    covidCases.map((covidCase) => (
        caseData.push({
            new: covidCase.cases.new,
            active: covidCase.cases.active,
            critical: covidCase.cases.critical,
            recovered: covidCase.cases.recovered,
            total: covidCase.cases.total
        })
    ))
    console.log(caseData, "cccaaassseeesss");

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>Covid Cases</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Table style={{ marginTop: "100px" }}>
                    <TableHead >
                        <TableRow>
                            <TableCell><strong>New Cases</strong></TableCell>
                            <TableCell><strong>Active Cases</strong></TableCell>
                            <TableCell><strong>Critical Cases</strong></TableCell>
                            <TableCell><strong>Recovered Cases</strong></TableCell>
                            <TableCell><strong>Total Cases</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {caseData.map((covidData) => (
                            <TableRow>
                                <TableCell>{covidData.new}</TableCell>
                                <TableCell>{covidData.active}</TableCell>
                                <TableCell>{covidData.critical}</TableCell>
                                <TableCell>{covidData.recoverd}</TableCell>
                                <TableCell>{covidData.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Link to="/deaths"><Button variant="contained">Next</Button></Link>
            </Container>
        </div>
    )
}

export default Cases;

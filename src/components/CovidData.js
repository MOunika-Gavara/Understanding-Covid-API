import React, { useState, useEffect } from "react";
import { AppBar, Table, TableHead, TableRow, TableCell, Toolbar, Typography, Container, TableBody, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CovidData = () => {
    const [covidData, setCovidData] = useState([]);
    const countryData = [];

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        fetch('https://covid-193.p.rapidapi.com/statistics', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b632aa7667mshf0d5e566c9f5bdfp157300jsn0f910544a237',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCovidData(data.response);
            }).catch(function (error) {
                console.error(error);
            });
    }
    console.log(covidData, "daat")
    covidData.map((vals) => (
        countryData.push({
            country: vals.country,
            continent: vals.continent,
            population: vals.population,
            time: vals.time
        })
    ))
    console.log(countryData, "dddaaatttaaa");

    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Typography><strong>Covid Data</strong></Typography>
                </Toolbar>
            </AppBar>
            <Table style={{ marginTop: "100px" }}>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Country</strong></TableCell>
                        <TableCell><strong>Continent</strong></TableCell>
                        <TableCell><strong>Population</strong></TableCell>
                        <TableCell><strong>Time</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {countryData.map((value) => (
                        <TableRow>
                            <TableCell>{value.country}</TableCell>
                            <TableCell>{value.continent} </TableCell>
                            <TableCell>{value.population}</TableCell>
                            <TableCell>{value.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link to="/cases"><Button variant="contained">Next</Button></Link>
        </Container >
    )
}

export default CovidData;
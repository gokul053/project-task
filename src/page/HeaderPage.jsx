import { AppBar, Button, Container, Divider, FormControl, FormGroup, Grid, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import mainLogo from "../assets/image/logopy.svg";
import { Outlet } from "react-router-dom";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useSelector } from "react-redux";
import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
const tabStyle = {
    paddingBottom: 0,
    paddingX: 0,
    marginX:2,
    textTransform:'none'
}
const searchBarStyle = {
    backgroundColor: "white"
}
const HeaderPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const getAllSportsData = useSelector((state)=> state?.getAllSport?.getSportsModal?.data);
    return (
        <>
        <AppBar className="headerStyle" position="static">
            <Container>
                <Grid container sx={{paddingY:4}}>
                    <Grid item xs={6} alignItems={"center"}>
                        <img width={275} src={mainLogo} alt="logo" />
                    </Grid>
                    <Grid item xs={6} justifyContent="end" alignItems={"center"} display={"flex"}>
                        <Button sx={{borderRadius:"15px", textTransform:"none"}} onClick={() => handleModalOpen()} color="primary" variant="contained" size="small" >
                            Log in 
                            <LoginModal open={modalOpen} handleClose={() => handleModalClose()} />
                        </Button>
                    </Grid>
                    <Grid item xs={5} sx={{margin:"auto"}} textAlign="center">
                        <Typography  variant="h6">
                            Book Venues, Coaches & Academies Nearby
                        </Typography>
                        <Divider variant="middle" sx={{backgroundColor:"white", opacity:0.4, marginTop:2}} light/>
                    </Grid>
                    <Grid item xs={12} sx={{margin:"auto", paddingY:2}} display={"flex"} justifyContent={"center"}>
                        <Tabs
                            value="one"
                            textColor="inherit"
                            indicatorColor="primary"
                        >
                            <Tab sx={tabStyle} disableRipple value="one" label="Sport centers" />
                            <Tab sx={tabStyle} disableRipple value="two" label="Playmates" />
                            <Tab sx={tabStyle} disableRipple value="three" label="Lessons" />
                        </Tabs>
                    </Grid>
                    <Grid item xs={12} sx={{margin:"auto", paddingY:4}} display={"flex"} justifyContent={"center"}>
                        <FormGroup  row>
                            <TextField sx={searchBarStyle} placeholder="Location" size="small"></TextField>
                            <FormControl sx={{...searchBarStyle , margin:"auto", minWidth: 120}}>
                                <Select
                                size="small"
                                value=''
                                placeholder="Sport"
                                >
                                    {getAllSportsData?.map((sport,index)=>{
                                        return(
                                            < div key={index}>
                                                <MenuItem value={index}>{sport.title}</MenuItem>
                                            </div>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker sx={searchBarStyle}
                            slotProps={{ textField: { size: 'small'} }}
                            />
                            <TimePicker sx={searchBarStyle}
                            slotProps={{ textField: { size: 'small'} }}
                            />
                            </LocalizationProvider>
                            <Button variant="contained"> Search </Button>
                        </FormGroup>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
        <Outlet />
        </>
    );
}
export default HeaderPage;
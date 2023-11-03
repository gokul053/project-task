import { AppBar, Button, Container, Divider, FormControl, FormGroup, Grid, IconButton, InputAdornment, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import mainLogo from "../assets/image/logopy.svg";
import { Outlet } from "react-router-dom";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useSelector } from "react-redux";
import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userAction";
import { LocationOn, MilitaryTech, MyLocation, Search } from "@mui/icons-material";
const tabStyle = {
    paddingBottom: 0,
    paddingX: 0,
    marginX:2,
    textTransform:'none'
}
const searchBarStyle = {
    backgroundColor: "white",
    '& fieldset': {
        borderRadius: '0px',
      },
}
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 250,
      },
    },
  };
const HeaderPage = () => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => {
        setModalOpen(false);
        formik.resetForm();
    }
    const getAllSportsData = useSelector((state)=> state?.getAllSport?.getSportsModal?.data);
    const userSchema = yup.object().shape({
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
    });
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          dispatch(login(formik.values.email, formik.values.password));
        },
      });
    return (
        <>
        <AppBar className="headerStyle" position="static">
            <Container disableGutters sx={{paddingX:7, paddingTop:"10px"}} >
                <Grid container alignItems="center" display="flex" height="100vh">
                    <Grid item xs={12} sx={{marginTop:3}} display="flex" alignSelf="start" justifyContent="center">
                        <Grid container display={"flex"} justifyContent={"space-between"}>
                            <Grid item xs={6} display={"flex"} justifyContent={"start"} >
                            <img width={240} src={mainLogo} alt="logo"/>
                            </Grid>
                            <Grid item xs={6} display={"flex"} justifyContent={"end"} alignSelf="center" >
                                    <Button sx={{borderRadius:"15px", textTransform:"none", fontWeight:700}} onClick={() => handleModalOpen()} color="primary" variant="contained" size="small" >
                                        Log In 
                                    </Button>
                                    <LoginModal open={modalOpen} formik={formik} handleClose={() => handleModalClose()} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} display="flex" alignSelf="baseline">
                        <Grid container>
                            <Grid item xs={12} display="flex" justifyContent="center">
                                <Typography  fontSize={26} fontWeight={550}>
                                    Book Venues, Coaches & Academies Nearby
                                    <Divider variant="middle" sx={{backgroundColor:"white", opacity:0.4, marginTop:2}} light/>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} display="flex" justifyContent="center" sx={{marginY:3}}>
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
                            <Grid item xs={12} width={"100%"} paddingX={15} display="flex" justifyContent="center">
                                <FormGroup sx={{width:"100%"}} row>
                                    <TextField sx={{...searchBarStyle,width:"25%"}} placeholder="Location" size="small" 
                                        InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <LocationOn />
                                              </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton sx={{padding:0, color:"#3a9ffb"}}>
                                                        <MyLocation />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                          }}
                                     />
                                    <FormControl sx={{...searchBarStyle, width:"20%"}}>
                                        <Select
                                        displayEmpty
                                        size="small"
                                        value=''
                                        placeholder="Sport"
                                        MenuProps={MenuProps}
                                        startAdornment={
                                            <InputAdornment position="end">
                                                <IconButton>
                                                    <MilitaryTech />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        >
                                            <MenuItem value="" disabled>
                                                <span>Sports</span>
                                            </MenuItem>
                                            {getAllSportsData?.data?.map((sport,index)=>{
                                                return(
                                                    < div key={index}>
                                                        <MenuItem value={index}>{sport?.title}</MenuItem>
                                                    </div>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DatePicker sx={{...searchBarStyle, width:"20%"}}
                                    slotProps={{ textField: { size: 'small', placeholder: 'Date'}, inputAdornment:{ position: "start"} }}
                                    />
                                    <TimePicker sx={{...searchBarStyle, width:"20%"}}
                                    slotProps={{ textField: { size: 'small', placeholder: 'Time'}, inputAdornment:{ position: "start"} }}
                                    />
                                    </LocalizationProvider>
                                    <Button variant="contained" sx={{textTransform: 'none', fontWeight:500, borderRadius:0, width:"15%"}} > <Search /> Search </Button>
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
        <Outlet />
        </>
    );
}
export default HeaderPage;
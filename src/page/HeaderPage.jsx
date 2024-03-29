import { AppBar, Avatar, Button, Container, Divider, FormControl, FormGroup, Grid, IconButton, InputAdornment, ListItemIcon, Menu, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import mainLogo from "../assets/image/logopy.svg";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useSelector } from "react-redux";
import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { clearSignUp, login, signup } from "../redux/actions/userAction";
import { ExpandMore, LocationOn, Logout, MilitaryTech, MyLocation, PersonAdd, Search, Settings } from "@mui/icons-material";
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
    const [isSignUp, setIsSignUp] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const handleModalOpen = () => setModalOpen(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    const handleModalClose = () => {
        setActiveStep(0);
        setIsSignUp(false);
        setModalOpen(false);
        formik.resetForm();
        currentFormik.resetForm();
        dispatch(clearSignUp());
    }
    const getAllSportsData = useSelector((state)=> state?.getAllSport?.getSportsModal?.data);
    const logInSchema = yup.object().shape({
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
        validationSchema: logInSchema,
        onSubmit: () => {
            dispatch(login(formik.values.email, formik.values.password));
        },
    });
    const formDetails = [
        [{
            inputType: "TEXTFIELD",
            id: "firstName",
            tagName: "First Name",
            type: "text"
        },
        {
            inputType: "TEXTFIELD",
            id: "lastName",
            tagName: "Last Name",
            type: "text"
        },
        {
            inputType: "SELECT",
            id: "gender",
            tagName: "Gender",
            items:[
                {title: "Male"},
                {title: "Female"},
                {title: "Others"}
            ]
        },
        {
            inputType: "DATE",
            id: "dateOfBirth",
            tagName: "Date Of Birth"
        }],
        [{
            inputType: "TEXTFIELD",
            id: "street",
            tagName: "Street",
            type: "text"
        },
        {
            inputType: "TEXTFIELD",
            id: "city",
            tagName: "City",
            type: "text"
        },
        {
            inputType: "TEXTFIELD",
            id: "state",
            tagName: "State",
            type: "text"
        },
        {
            inputType: "TEXTFIELD",
            id: "zipCode",
            tagName: "Zip code",
            type: "number"
        }],
        [{
            inputType: "TEXTFIELD",
            id: "mobileNumber",
            tagName: "Mobile number"
        },
        {
            inputType: "TEXTFIELD",
            id: "email",
            tagName: "Email Address"
        },
        {
            inputType: "TEXTFIELD",
            id: "password",
            tagName: "Password",
            type: "password",
            autoComplete: "off"
        },
        {
            inputType: "TEXTFIELD",
            id: "confirmPassword",
            tagName: "Confirm Password" 
        }]
    ]
    const stepOneSchema = yup.object().shape({
        firstName: yup
            .string()
            .required("FirstName is Required")
            .min(3, "Minimum 3 characters"),
        lastName: yup
            .string()
            .required("LastName is Required"),
        gender: yup
            .string()
            .required("Select One"),
        dateOfBirth: yup
            .string()
            .required("Must enter your date of birth")})
    const stepTwoSchema = yup.object().shape({
        street: yup
            .string()
            .required("Street is required"),
        city: yup
            .string()
            .required("City is Required"),
        state: yup
            .string()
            .uppercase()
            .max(2)
            .required("State is Required"),
        zipCode: yup
            .number()
            .min(10000)
            .max(99999)
            .required("ZipCode is Required")})
    const stepThreeSchema = yup.object().shape({
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
        mobileNumber: yup
            .string()
            .required("Phone number is required"),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
    });
    const formikStepOne = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            dateOfBirth: null,
        },
        validationSchema: stepOneSchema,
        onSubmit: () => {
            setActiveStep(activeStep + 1);
          },
    });
    const formikStepTwo = useFormik({
        initialValues: {
            street: '',
            city: '',
            state: '',
            zipCode: ''
        },
        validationSchema: stepTwoSchema,
        onSubmit: () => {
            setActiveStep(activeStep + 1);
          },
    });
    const formikStepThree = useFormik({
        initialValues: {
            email: '',
            mobileNumber: '',
            password:'',
            confirmPassword:''
        },
        validationSchema: stepThreeSchema,
        onSubmit: () => {
            const payload = {
                                firstName: formikStepOne.values.firstName,
                                lastName: formikStepOne.values.lastName,
                                phoneNumber: formikStepThree.values.mobileNumber,
                                email: formikStepThree.values.email,
                                role: "ROLE_USER",
                                gender: formikStepOne.values.gender,
                                dob: formikStepOne.values.dateOfBirth,
                                street: formikStepTwo.values.street,
                                city: formikStepTwo.values.city,
                                state: formikStepTwo.values.state,
                                zipCode: formikStepTwo.values.zipCode,
                            }
            dispatch(signup(payload));    
        },
    });
    const formikArray = [formikStepOne, formikStepTwo, formikStepThree];
    const currentFormik = formikArray[activeStep];
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
                                {localStorage.getItem('accessToken') ? 
                                <>
                                <Button disableRipple sx={{textTransform:"none", color:"white"}}
                                    onClick={handleClick}
                                >
                                    <Grid container display={"flex"} justifyContent={"end"}>
                                    <Grid item display={"flex"} marginRight={1}>
                                        <Avatar>{localStorage.getItem('name').charAt(0)}</Avatar>
                                    </Grid>
                                    <Grid item display={"flex"} alignItems={"start"} alignSelf={"center"}>
                                        <Grid item >
                                            <Typography fontWeight={600} fontSize={17} >Hi, {localStorage.getItem('name')}</Typography>
                                        </Grid>
                                        <Grid item display={"flex"} alignSelf={"center"}>
                                            <ExpandMore />    
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClick={handleClose}
                                    PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                        },
                                        '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                        },
                                    },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                    <Avatar /> Profile
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                    <ListItemIcon>
                                        <PersonAdd color="primary" fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                    </MenuItem>
                                    <MenuItem>
                                    <ListItemIcon>
                                        <Settings color="primary" fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                    <ListItemIcon>
                                        <Logout color="primary" fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                    </MenuItem>
                                </Menu>
                                </>
                                :
                                <Button sx={{borderRadius:"20px", textTransform:"none",fontSize:16, fontWeight:500, paddingX:2}} onClick={() => handleModalOpen()} color="primary" variant="contained" size="small" >
                                            Log in
                                </Button>
                                }
                                <LoginModal open={modalOpen} isSignUp={isSignUp} setIsSignUp={setIsSignUp} activeStep={activeStep} formDetails={formDetails} formik={formik} currentFormik={currentFormik} handleClose={() => handleModalClose()} />
                            </Grid> 
                        </Grid>
                    </Grid>
                    <Grid item xs={12} display="flex" alignSelf="baseline">
                        <Grid container>
                            <Grid item xs={12} display="flex" justifyContent="center">
                                <Grid container>
                                    <Grid item xs={12} display="flex" justifyContent="center">
                                        <Typography fontSize={26} fontWeight={550}>
                                            Book Venues, Coaches & Academies Nearby
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} display="flex" justifyContent="center">
                                        <Divider sx={{backgroundColor:"white", width:"55%", opacity:0.4, marginTop:2}} light/>
                                    </Grid>
                                </Grid>
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
                            <Grid item xs={12} width={"100%"} marginX={15} display="flex" justifyContent="center">
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
                                            {getAllSportsData?.map((sport,index)=>{
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
        </>
    );
}
export default HeaderPage;
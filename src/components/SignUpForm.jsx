import { Box, FormControl, FormHelperText, MenuItem, MobileStepper, OutlinedInput, Select, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React, { useState } from "react";

const SignUpForm = ({formik, activeStep}) => {
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
            tagName: "Password"
        },
        {
            inputType: "TEXTFIELD",
            id: "confirmPassword",
            tagName: "Confirm Password" 
        }]
    ]
    const maxStep = formDetails.length;
    console.log(formik.values);
    return (
        <>
            {formDetails[activeStep].map((data,index)=>{
                switch(data.inputType) {
                    case "TEXTFIELD" :
                    default:
                        return (
                            <React.Fragment key={index}>
                                <FormControl fullWidth sx={{marginBottom:1}}>
                                    <Typography fontSize={14}>{data.tagName}</Typography>
                                    <OutlinedInput sx={{fontSize:14}} size="small" placeholder={data.tagName} type={data.type} 
                                        id={data.id}
                                        name={data.id}
                                        value={formik.values[data.id]}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched[data.id] && Boolean(formik.errors[data.id])}
                                    />
                                    <FormHelperText sx={{color:"#de342f"}} >{formik.touched[data.id] && formik.errors[data.id]}</FormHelperText>
                                </FormControl>
                            </React.Fragment>
                        );
                    case "SELECT" :
                        return (
                            <>
                                <FormControl fullWidth sx={{marginBottom:1}}>
                                    <Typography fontSize={14}>{data?.tagName}</Typography>
                                    <Select sx={{fontSize:14}} id={data?.id} name={data?.id} displayEmpty value={formik.values[data.id]} onChange={formik.handleChange} size="small" placeholder={data?.tagName} >
                                        <MenuItem sx={{fontSize:14}} value='' disabled>
                                            <span>{data?.tagName}</span>
                                        </MenuItem>
                                        {data?.items?.map((item)=>{
                                            return(
                                                <>
                                                    <MenuItem value={item?.title}>{item?.title}</MenuItem>
                                                </>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </>
                        );
                    case "DATE" :
                        return(
                            <>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <FormControl fullWidth sx={{marginBottom:1}}>
                                        <Typography fontSize={14}>{data?.tagName}</Typography>
                                        <DatePicker slotProps={{ textField: { size: 'small', placeholder: 'Date', fullWidth: true} }}/>
                                    </FormControl>
                                </LocalizationProvider>
                            </>
                        );
                }
            })}
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <MobileStepper
                    variant="dots"
                    steps={maxStep}
                    position="static"
                    activeStep={activeStep}
                    sx={{marginBottom:1}}
                />
            </Box>
        </>
    );
}

export default SignUpForm;
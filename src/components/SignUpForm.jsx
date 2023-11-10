import { Box, FormControl, FormHelperText, MenuItem, MobileStepper, OutlinedInput, Select, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";

const SignUpForm = ({formDetails, formik, activeStep}) => {
    const maxStep = formDetails.length;
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
                                    <Select
                                    sx={{ fontSize: 14 }}
                                    displayEmpty
                                    size="small"
                                    placeholder={data?.tagName}
                                    id={data.id}
                                    name={data.id}
                                    value={formik.values[data.id]} 
                                    onBlur={formik.handleBlur}
                                    onChange={(e) => formik.setFieldValue(data.id, e.target.value)}
                                    error={formik.touched[data.id] && Boolean(formik.errors[data.id])}
                                    >
                                    {data?.items?.map((item) => (
                                        <MenuItem key={item?.title} value={item?.title}>
                                        {item?.title}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                    <FormHelperText sx={{color:"#de342f"}} >{formik.touched[data.id] && formik.errors[data.id]}</FormHelperText>
                                </FormControl>
                            </>
                        );
                    case "DATE" :
                        return(
                            <>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <FormControl fullWidth sx={{marginBottom:1}}>
                                        <Typography fontSize={14}>{data?.tagName}</Typography>
                                        <DatePicker value={formik.values[data.id]} onChange={(value) => formik.setFieldValue("dateOfBirth", value, true)} slotProps={{ textField: { 
                                            size: 'small',
                                            placeholder: 'Date',
                                            fullWidth: true ,
                                            variant: "outlined",
                                            error: formik.touched[data.id] && Boolean(formik.errors[data.id]),
                                            helperText: formik.touched[data.id] && formik.errors[data.id]
                                        } }}/>
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
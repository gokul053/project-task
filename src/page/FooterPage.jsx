import { Grid, Typography, Divider, Button, Box, AppBar, IconButton} from "@mui/material";
import React from "react";
import { Copyright, Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
const iconStyle = {
    backgroundColor:"#acb4b4", 
    color:"#272727", 
    borderRadius:"100%", 
    fontSize:15, 
    padding:"4px"
}
const FooterPage = () => {
    const footerData = ["About us", "Terms & Conditions", "Privacy", "Download App"];
    const footerButtons = [
        <Facebook sx={iconStyle} />,
        <Twitter sx={iconStyle} />,
        <Instagram sx={iconStyle} />, 
        <LinkedIn sx={iconStyle} />,
    ];
    return(
        <>
            <AppBar position="relative" sx={{ backgroundColor:"#272727" }}>
                <Grid container sx={{paddingTop:4}}>
                    <Grid item xs={1} margin={"auto"} textAlign={"center"} marginBottom={2} >
                        <Typography marginBottom={2} fontSize={13} color="white" >PlayzeOn</Typography>
                        <Box display="flex" justifyContent="center">
                            <Divider variant="fullWidth" sx={{borderColor:"white", width:"20%", alignSelf:"center"}} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content'}}>
                            {footerData.map((data, index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <Button sx={{color:"white", fontSize:12}} variant="text" size="small" disableRipple >{data}</Button>
                                        {index+1 !== footerData.length && <Divider sx={{borderColor:"white", marginX:2}} orientation="vertical" variant="middle" flexItem light />}
                                    </React.Fragment>
                                );
                            })}
                        </Box>
                    </Grid>
                    <Grid item xs={12} marginY={2} display="flex" justifyContent="center" >
                        {footerButtons.map((button, index)=>{
                            return(
                                <IconButton key={index}>{button}</IconButton>
                            );
                        })}
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{ borderColor:"white", opacity:"20%"}} /> 
                <Grid container>
                    <Grid item xs={12} marginX={"auto"} marginY={2} textAlign={"center"} >
                            <Typography color="white" fontSize={13} >We Play Real <Copyright fontSize="inherit" /> 2020. All Rights Reserved</Typography>
                    </Grid>
                </Grid>
            </AppBar>
        </>
    );
}
export default FooterPage;
import { Outlet } from "react-router-dom";
import { Grid, Typography, Divider, Button, Box, AppBar } from "@mui/material";
import React from "react";
import { Copyright } from "@mui/icons-material";

const FooterPage = () => {
    const footerData = ["About us", "Terms & Conditions", "Privacy", "Download App"];
    return(
        <>
            <AppBar position="relative" sx={{ backgroundColor:"#272727" }}>
                <Grid container sx={{paddingY:4}}>
                    <Grid item xs={1} margin={"auto"} textAlign={"center"}>
                        <Typography color="white" >PlayzeOn</Typography>
                        <Divider  variant="middle" sx={{marginY:2, borderColor:"white"}} />
                    </Grid>
                    <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content'}}>
                            {footerData.map((data, index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <Button sx={{color:"white"}} variant="text" size="small" disableRipple >{data}</Button>
                                        {index+1 !== footerData.length && <Divider sx={{borderColor:"white", marginX:2}} orientation="vertical" variant="middle" flexItem light />}
                                    </React.Fragment>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{marginY:2, borderColor:"white"}} /> 
                <Grid container>
                    <Grid item margin={"auto"} textAlign={"center"} >
                            <Typography color="white" >We Play Real <Copyright fontSize="inherit" /> 2020. All Rights Reserved</Typography>
                    </Grid>
                </Grid>
            </AppBar>
            <Outlet />
        </>
    );
}
export default FooterPage;
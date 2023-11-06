import { Button, Grid, Typography } from "@mui/material";

const LoginModalBottom = ({isSignup, setIsSignUp}) => {
    return(
        <>
            <Grid container display="flex" justifyContent="space-between">
                <Grid item>
                    {isSignup ? <Typography fontSize={12} variant="body1">Have an account?</Typography> : <Typography fontSize={12} variant="body1">Don't have an account?</Typography>}
                    {isSignup ? <Button sx={{textTransform:"none", padding:0, fontSize:12}} variant="text" onClick={() => setIsSignUp(false)} >Sign in</Button> : <Button sx={{textTransform:"none", padding:0, fontSize:12}} variant="text" onClick={() => setIsSignUp(true)} >Create Account</Button>}
                </Grid>
                <Grid item>
                    <Typography fontSize={12} variant="body1">Are you a Sport Center?</Typography>
                    <Button sx={{textTransform:"none", padding:0, fontSize:12}} variant="text">Partner with Us</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default LoginModalBottom;
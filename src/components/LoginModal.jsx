import { Box, Button, Chip, Divider, Grid, IconButton, Modal, Typography  } from "@mui/material";
import fbIcon from "../assets/image/fb_icon.svg";
import appleIcon from "../assets/image/apple_icon.svg";
import googleIcon from "../assets/image/google_icon.svg";
import LoginModalBottom from "./LoginModalBottom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const style = {
    position: 'relative',
    top: '44%',
    left: '77%',
    transform: 'translate(-50%, -50%)',
    width: 270,
    bgcolor: 'background.paper',
    borderRadius: 2,
    p: 4,
};

const LoginModal = ({ open, handleClose, formik, isSignUp, setIsSignUp, activeStep, handleNext, formikSu }) => {
    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="loginModal"
                aria-describedby="login modal page"
            >
                <Box sx={style} >
                    <form onSubmit={formik.handleSubmit}>
                    <Grid container >
                        <Grid item xs={12} >
                            {isSignUp ? <SignUpForm formik={formikSu} activeStep={activeStep} /> : <LoginForm formik={formik} /> }
                        </Grid>
                        {!isSignUp && 
                        <Grid item xs={12} display="flex" justifyContent="end">
                            <Button variant="text" disableRipple sx={{textTransform:"none", marginLeft:"auto", paddingTop:0 }}>Forget password?</Button>
                        </Grid>
                        }
                        <Grid item xs={12} display="flex" marginBottom={1} >
                            {isSignUp ? <Button variant="contained" onClick={() => handleNext()} type={activeStep === 2 ? "submit" : "button"} fullWidth sx={{textTransform:"none", marginLeft:"auto"}}> {activeStep === 2 ? "Create Account" : "Next"} </Button> : <Button variant="contained" type="submit" fullWidth sx={{textTransform:"none", marginLeft:"auto"}}>Sign In</Button>}
                        </Grid>
                        { !isSignUp && 
                        <>
                        <Grid item xs={12} display="flex" justifyContent="center">
                            <Chip label="Or"/>
                        </Grid>
                        <Grid item xs={12}  display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" marginRight="auto">
                            <Typography margin={1} fontSize={14} fontWeight={500}>
                                Sign in with
                            </Typography>
                            <IconButton>
                                <img width={25} src={fbIcon} alt="fblogo"/>
                            </IconButton>
                            <IconButton>
                                <img width={25} src={googleIcon} alt="googlelogo"/>
                            </IconButton>
                            <IconButton>
                                <img width={25} src={appleIcon} alt="applelogo"/>
                            </IconButton>
                        </Grid>
                        </>
                        }
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} marginTop={2} >
                            <LoginModalBottom isSignup={isSignUp} setIsSignUp={setIsSignUp} />
                        </Grid>
                    </Grid>
                    </form>
                </Box>
            </Modal>
        </>
    );
}
export default LoginModal;
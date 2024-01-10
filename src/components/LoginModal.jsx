import { Backdrop, Box, Button, Chip, CircularProgress, Divider, Grid, IconButton, Modal, Typography  } from "@mui/material";
import fbIcon from "../assets/image/fb_icon.svg";
import appleIcon from "../assets/image/apple_icon.svg";
import googleIcon from "../assets/image/google_icon.svg";
import LoginModalBottom from "./LoginModalBottom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import { CheckCircle } from "@mui/icons-material";

const style = {
    position: 'relative',
    top: '37%',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    width: 270,
    bgcolor: 'background.paper',
    borderRadius: 2,
    p: 4,
};

const LoginModal = ({ open, handleClose, formik, isSignUp, setIsSignUp, activeStep, formDetails, currentFormik }) => {
    const signUpData = useSelector((state)=> state?.signUpApi?.signupModal);
    const loginData = useSelector((state)=> state?.loginApi?.loginModal);
    const isLoading = signUpData?.loading || loginData?.loading ? true : false;
    const handleContinue = () => {
        window.location.reload();
    }
    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="loginModal"
                aria-describedby="login modal page"
            >
                <Box sx={style} >
                    <form onSubmit={isSignUp ? currentFormik.handleSubmit : formik.handleSubmit}>
                    {signUpData?.status === 200 ? 
                    <Grid container spacing={2}>
                        <Grid item xs={12} display="flex" justifyContent="center" alignContent="center" >
                            <Box sx={{lineHeight:0}} fontSize={70} color="green" ><CheckCircle fontSize="inherit" /></Box>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="center" >
                            <Typography fontSize={16} fontWeight={600}>Thank you for signing up</Typography>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="center" textAlign="center" >
                            <Typography fontSize={14} fontWeight={500}>Lets take a few minutes to setup your player profile</Typography>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="center" >
                            <Button sx={{textTransform: "none"}} size="small" fullWidth variant="contained" onClick={handleContinue} >Continue</Button>
                        </Grid>
                    </Grid> 
                    : loginData?.status === 200 ? 
                    <Grid container spacing={2}>
                        <Grid item xs={12} display="flex" justifyContent="center" alignContent="center" >
                            <Box sx={{lineHeight:0}} fontSize={70} color="green" ><CheckCircle fontSize="inherit" /></Box>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="center" >
                            <Typography fontSize={16} fontWeight={600}>Login successful</Typography>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="center" textAlign="center" >
                            <Typography fontSize={14} fontWeight={500}>Lets take a few minutes to setup your player profile</Typography>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="center" >
                            <Button sx={{textTransform: "none"}} size="small" fullWidth variant="contained" onClick={handleContinue} >Continue</Button>
                        </Grid>
                    </Grid> 
                    : 
                    <Grid container >
                        <Backdrop
                        sx={{ color: '#de342f', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={isLoading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        <Grid item xs={12} >
                            {isSignUp ? <SignUpForm formDetails={formDetails} formik={currentFormik} activeStep={activeStep} /> : <LoginForm formik={formik} /> }
                        </Grid>
                        {!isSignUp && 
                        <Grid item xs={12} display="flex" justifyContent="end">
                            <Button variant="text" disableRipple sx={{textTransform:"none", marginLeft:"auto", paddingTop:0 }}>Forget password?</Button>
                        </Grid>
                        }
                        <Grid item xs={12} display="flex" marginBottom={1} >
                            {isSignUp ? <Button variant="contained" type="submit" fullWidth sx={{textTransform:"none", marginLeft:"auto"}}> {activeStep === 2 ? "Create Account" : "Next"} </Button> : <Button variant="contained" type="submit" fullWidth sx={{textTransform:"none", marginLeft:"auto"}}>Sign In</Button>}
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
                    </Grid>}
                    </form>
                </Box>
            </Modal>
        </>
    );
}
export default LoginModal;
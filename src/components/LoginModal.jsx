import { Box, Button, Chip, Divider, FormControl, FormHelperText, Grid, IconButton, Modal, OutlinedInput, Typography  } from "@mui/material";
import fbIcon from "../assets/image/fb_icon.svg";
import appleIcon from "../assets/image/apple_icon.svg";
import googleIcon from "../assets/image/google_icon.svg";



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

const LoginModal = ({ open, handleClose, formik }) => {
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
                            <FormControl fullWidth sx={{marginBottom:1}}>
                                <Typography fontSize={14}>Email Address</Typography>
                                <OutlinedInput sx={{fontSize:14}} size="small" placeholder="Email Address" type="email" 
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                />
                                <FormHelperText sx={{color:"#de342f"}} >{formik.touched.email && formik.errors.email}</FormHelperText>
                            </FormControl>
                            <FormControl fullWidth sx={{marginBottom:1}}>
                                <Typography fontSize={14}>Password</Typography>
                                <OutlinedInput sx={{fontSize:14}} size="small" placeholder="Password" type="password"
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                />
                                <FormHelperText sx={{color:"#de342f"}}  >{formik.touched.password && formik.errors.password}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="end">
                            <Button variant="text" disableRipple sx={{textTransform:"none", marginLeft:"auto", paddingTop:0 }}>Forget password?</Button>
                        </Grid>
                        <Grid item xs={12} display="flex" marginBottom={1} >
                            <Button variant="contained" type="submit" fullWidth sx={{textTransform:"none", marginLeft:"auto"}}>Sign In</Button>
                        </Grid>
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
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} marginTop={2} >
                            <Grid container display="flex" justifyContent="space-between">
                                <Grid item>
                                    <Typography fontSize={12} variant="body1">Don't have an account?</Typography>
                                    <Button sx={{textTransform:"none", padding:0, fontSize:12}} variant="text">Create Account</Button>
                                </Grid>
                                <Grid item>
                                    <Typography fontSize={12} variant="body1">Are you a Sport Center?</Typography>
                                    <Button sx={{textTransform:"none", padding:0, fontSize:12}} variant="text">Partner with Us</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </form>
                </Box>
            </Modal>
        </>
    );
}
export default LoginModal;
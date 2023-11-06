import { FormControl, FormHelperText, OutlinedInput, Typography } from "@mui/material";

const LoginForm = ({formik}) =>{
    return (
        <>
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
        </>
    );
}

export default LoginForm;
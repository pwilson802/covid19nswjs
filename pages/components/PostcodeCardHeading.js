import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { fontWeight } from '@mui/system';


function PostcodeCardHeading() {
    return (
        <Box sx={{
            color: "#344072",
            marginBottom: ".5rem",
            width: "95%",
            "@media(min-width: 768px)": {
            width: "70%",
      },
        }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ paddingBottom: "0.5rem", color: "black", fontWeight: "bold",}}>
                <Grid item xs={6}
                    sx={{
                        fontSize: "1.5rem",
                }} >
                Postcode
            </Grid>
            <Grid item xs={2}>
                All
            </Grid>
            <Grid item xs={2}>
                Week
            </Grid>
            <Grid item xs={2}>
                 Last Day
            </Grid>
            </Grid>
            <Divider />
        </Box>
    )
    
}

export default PostcodeCardHeading
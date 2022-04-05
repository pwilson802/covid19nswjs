import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { fontWeight } from '@mui/system';


function PostcodeCard({ suburbs, postcode, all, day, week }) {
    return (
        <Box sx={{
            color: "#344072",
            marginBottom: ".5rem",
            width: "95%",
            "@media(min-width: 768px)": {
            width: "70%",
      },
        }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ paddingBottom: "0.5rem"}}>
                <Grid item xs={6} >
                    <Grid item xs={12}  sx={{
                                    width: "70%",
                                    color: "#344072",
                                    fontWeight: "bold",
                                    fontSize: "1.5rem",
                    }}>
                        {postcode}
                    </Grid>                   
                    <Grid item xs={12}>
                        {suburbs && suburbs.join(", ")}
                    </Grid>
                </Grid>
            <Grid item xs={2}>
                {all}
            </Grid>
            <Grid item xs={2}>
                {week}
            </Grid>
            <Grid item xs={2}>
                 {day}
            </Grid>
            </Grid>
            <Divider light />
        </Box>
    )
    
}

export default PostcodeCard
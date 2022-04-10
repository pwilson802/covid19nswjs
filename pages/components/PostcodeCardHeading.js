import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { fontWeight } from "@mui/system";

function PostcodeCardHeading({ sortpostcodeList }) {
  return (
    <Box
      sx={{
        color: "#344072",
        padding: ".5rem",
        borderTop: "1px solid #1D7BA3",
        borderLeft: "1px solid #1D7BA3",
        borderRight: "1px solid #1D7BA3",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "#1D7BA3",
        // marginBottom: ".5rem",
        width: "95%",
        "@media(min-width: 768px)": {
          width: "70%",
        },
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ paddingBottom: "0.5rem", color: "white", fontWeight: "bold" }}
      >
        <Grid item xs={6}>
          Location
        </Grid>
        <Grid item xs={2} onClick={() => sortpostcodeList("all")}>
          All
        </Grid>
        <Grid item xs={2} onClick={() => sortpostcodeList("week")}>
          Week
        </Grid>
        <Grid item xs={2} onClick={() => sortpostcodeList("day")}>
          Last Day
        </Grid>
      </Grid>
      {/* <Divider /> */}
    </Box>
  );
}

export default PostcodeCardHeading;

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function PostcodeCardHeading({ sortpostcodeList, sortedBy }) {
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
        <Grid
          item
          xs={2}
          onClick={() => sortpostcodeList("all")}
          sx={
            sortedBy == "all"
              ? {
                  textDecoration: "underline",
                  textUnderlineOffset: "0.4rem",
                }
              : { cursor: "pointer" }
          }
        >
          All
        </Grid>
        <Grid
          item
          xs={2}
          onClick={() => sortpostcodeList("week")}
          sx={
            sortedBy == "week"
              ? {
                  textDecoration: "underline",
                  textUnderlineOffset: "0.4rem",
                }
              : { cursor: "pointer" }
          }
        >
          Week
        </Grid>
        <Grid
          item
          xs={2}
          onClick={() => sortpostcodeList("day")}
          sx={
            sortedBy == "day"
              ? {
                  textDecoration: "underline",
                  textUnderlineOffset: "0.4rem",
                }
              : { cursor: "pointer" }
          }
        >
          Day
        </Grid>
      </Grid>
    </Box>
  );
}

export default PostcodeCardHeading;

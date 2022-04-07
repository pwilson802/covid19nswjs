import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function PostcodePageNumbers({ all, week, day }) {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        color: "#344072",
        marginBottom: ".5rem",
        width: "95%",
        "@media(min-width: 768px)": {
          width: "50%",
        },
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          paddingBottom: "0.5rem",
          color: "black",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          All
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          Week
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          Last Day
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          paddingBottom: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: "2rem",
          }}
        >
          {all}
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: "2rem",
          }}
        >
          {week}
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: "2rem",
          }}
        >
          {day}
        </Grid>
      </Grid>
    </Box>
  );
}

export default PostcodePageNumbers;

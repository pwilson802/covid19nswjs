import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function PostcodeCard({ suburbs, postcode, all, day, week, last }) {
  let borderBottom = last ? "1px solid #1D7BA3" : "none";
  let backgroundColor =
    postcode == "All NSW" ? "rgba(219, 127, 116, 0.1)" : "none";
  return (
    <Box
      sx={{
        color: "#344072",
        padding: ".5rem",
        width: "95%",
        borderTop: "1px solid #1D7BA3",
        borderLeft: "1px solid #1D7BA3",
        borderRight: "1px solid #1D7BA3",
        backgroundColor: backgroundColor,
        borderBottom: borderBottom,
        "@media(min-width: 768px)": {
          width: "70%",
        },
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ paddingBottom: "0.5rem" }}
      >
        <Grid item xs={6}>
          <a href={postcode == "All NSW" ? `/allnsw` : `/postcode/${postcode}`}>
            <Grid
              item
              xs={12}
              sx={{
                width: "70%",
                color: "#4C6570",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              {postcode}
            </Grid>
            <Grid item xs={12} sx={{ color: "#4C6570", fontSize: "0.9rem" }}>
              {suburbs && suburbs.join(", ")}
            </Grid>
          </a>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            color: "#4C6570",
            fontSize: "0.8rem",
            "@media(min-width: 768px)": {
              fontSize: "1rem",
            },
          }}
        >
          {all ? all.toLocaleString("en-AU") : ""}
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            color: "#4C6570",
            fontSize: "0.8rem",
            "@media(min-width: 768px)": {
              fontSize: "1rem",
            },
          }}
        >
          {week ? week.toLocaleString("en-AU") : ""}
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            color: "#4C6570",
            fontSize: "0.8rem",
            "@media(min-width: 768px)": {
              fontSize: "1rem",
            },
          }}
        >
          {day ? day.toLocaleString("en-AU") : ""}
        </Grid>
      </Grid>
      {/* <Divider light /> */}
    </Box>
  );
}

export default PostcodeCard;

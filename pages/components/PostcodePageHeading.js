import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function PostcodePageHeading({ postcode, suburbs }) {
  return (
    <Box
      sx={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginBottom: "1rem",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            color: "#344072",
            fontWeight: "bold",
            fontSize: "3rem",
            marginRight: "1rem",
          }}
        >
          {postcode}
        </Box>
        <Box
          sx={{
            color: "#8086a0",
            fontSize: "1rem",
          }}
        >
          {suburbs && suburbs.join(", ")}
        </Box>
      </Box>
    </Box>
  );
}

export default PostcodePageHeading;

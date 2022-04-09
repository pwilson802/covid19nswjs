import SearchAppBar from "./SearchAppBar";
import Box from "@mui/material/Box";
import Head from "next/head";

function Latest({ latest }) {
  return (
    <div>
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
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            color: "#4C6570",
            fontWeight: "800",
            marginBottom: "0.1rem",
            marginTop: "0.3rem",
            textAlign: "center",
          }}
        >
          Last Update: {latest}
        </Box>
        <Box
          sx={{
            fontSize: "0.6rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          The data on this site is gathered from NSW Data. It is not associated
          with NSW Health. This is displayed for interest purposes only and
          should not replace current health advice. The numbers displayed are
          confirmed cases only and may not reflect the current infection rate in
          your area.
        </Box>
      </Box>
    </div>
  );
}

export default Latest;

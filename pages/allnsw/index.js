import SearchAppBar from "../components/SearchAppBar";
import PostcodeCard from "../components/PostcodeCard";
import PostcodeCardHeading from "../components/PostcodeCardHeading";
import PostcodePageHeading from "../components/PostcodePageHeading";
import PostcodePageNumbers from "../components/PostcodePageNumbers";
import Charts from "../components/charts/Charts";
import { GetSiteData, GetAllData } from "../../modules/FetchData";
import { useRouter } from "next/router";
import Latest from "../components/Latest";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

export default function Home({ all, summary, latest }) {
  let allData = all.map((item) => {
    return {
      postcode: item.p,
      confirmed_cases_count: item.c,
      notification_date: new Date(item.n),
    };
  });
  return (
    <>
      <SearchAppBar sx={{ width: "100%", margin: 0 }} />
      {latest && <Latest latest={latest} />}
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#1D7BA3",
        }}
      >
        ALL NSW
      </Box>
      {summary.all && summary.week && summary.day && (
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
          <PostcodePageNumbers
            all={summary.all}
            week={summary.week}
            day={summary.day}
          />
        </Box>
      )}
      {summary.all && all[0] && <Charts data={allData} all={true} />}
    </>
  );
}

const fetchRetry = async (url, n) => {
  try {
    return await fetch(url);
  } catch (err) {
    if (n === 1) throw err;
    return await fetchRetry(url, n - 1);
  }
};

export async function getStaticProps() {
  console.log("getting static props");
  let allData = await GetAllData();
  let all = allData.all;
  let summary = allData.summary;
  let latest = allData.latest;
  all = all.map((item) => {
    return {
      p: item.postcode,
      c: item.confirmed_cases_count,
      // n: item.notification_date.toString(),
      n: item.notification_date.toLocaleDateString('en-US'),
    };
  });
  console.log(all.length)
  return {
    props: {
      all,
      summary,
      latest,
    },
    revalidate: 900,
  };
}

function range(start, end) {
  var ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

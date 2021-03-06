import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import PostcodeCard from "./components/PostcodeCard";
import PostcodeCardHeading from "./components/PostcodeCardHeading";
import SearchAppBar from "./components/SearchAppBar";
import Box from "@mui/material/Box";
import { GetSiteData } from "../modules/FetchData";
import Latest from "./components/Latest";

export default function Home({ postcodes, latest, all }) {
  const [postcodeList, setPostcodeList] = useState(postcodes);
  const [sortedBy, setSortedBy] = useState("day");
  // const [sortBy, setSortyBy] = useState("day");

  function sortpostcodeList(column) {
    let newList = postcodeList.sort((a, b) => (a[column] < b[column] ? 1 : -1));
    setSortedBy(column);
    setPostcodeList(newList);
  }
  return (
    <div>
      <Head>
        <title>Covid19 NSW</title>
        <meta
          name="description"
          content="Find Covid19 Csases in your postcode"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchAppBar sx={{ width: "100%", margin: 0 }} />
      <Latest latest={latest} />
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
        <PostcodeCardHeading
          sortpostcodeList={sortpostcodeList}
          sortedBy={sortedBy}
        />
        {latest &&
          postcodeList.map((item, index) => {
            return (
              <PostcodeCard
                key={item.postcode}
                suburbs={item.suburbs}
                postcode={item.postcode}
                all={item.all}
                day={item.day}
                week={item.week}
                last={index == postcodeList.length - 1}
              />
            );
          })}
      </Box>

      <footer className={styles.footer}>
        <p>
          The information on this website is updated as soon as new data is
          published by NSW Health which is usually once a day. For feedback on
          the website or to suggest a feature please contact
          covid19nsw.stat@gmail.com
        </p>
      </footer>
    </div>
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
  let data = await GetSiteData();
  let postcodes = data.postcodes;
  let latest = data.latest;
  let all = data.all;

  return {
    props: {
      postcodes,
      latest,
      all,
    },
    revalidate: 900,
  };
}

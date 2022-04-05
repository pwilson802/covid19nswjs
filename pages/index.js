import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import PostcodeCard from "./components/PostcodeCard"
import PostcodeCardHeading from "./components/PostcodeCardHeading"
import SearchAppBar from "./components/SearchAppBar"
import Box from '@mui/material/Box';
import {GetSiteData} from "./components/FetchData"


export default function Home({postcodes, latest}) {
  
  return (
    <div >
      <Head>
        <title>Covid19 NSW</title>
        <meta name="description" content="Find Covid19 Csases in your postcode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <SearchAppBar sx={{ width: "100%", margin: 0 }} />
      <Box sx={{ paddingLeft: "1rem", paddingRight: "1rem", justifyContent: "center", alignItems:'center', display: "flex", flexDirection: "column" }} >
        <Box sx={{
          fontFamily: "sans-serif",
          fontSize: "0.9rem",
          color: "#344072",
          fontWeight: "800",
          marginBottom: "0.1rem",
          marginTop: "0.3rem",
          textAlign: "center",
        }}>Last Update: {latest}</Box>
        <Box sx={{fontSize: "0.6rem", marginBottom: "3rem", textAlign: "center"}}>The data on this site is gathered from NSW Data. It is not associated with NSW Health. This is displayed for interest purposes only and should not replace current health advice. The numbers displayed are confirmed cases only and may not reflect the current infection rate in your area.</Box>
        <PostcodeCardHeading />
        {
          latest && (
            postcodes.map((item) => {
            return (

              <PostcodeCard key={item.postcode} suburbs={item.suburbs} postcode={item.postcode} all={item.all} day={item.day} week={item.week}/>

            ) }
            )
        )
        }
      </Box>

      <footer className={styles.footer}>
        <p>The information on this website is updated as soon as new data is published by NSW Health which is usually once a day. For feedback on the website or to suggest a feature please contact covid19nsw.stat@gmail.com</p>
        </footer>
    </div>
  )
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
  let data = await GetSiteData()
  let postcodes = data.postcodes
  let latest = data.latest
  console.log(data)

  return {
    props: {
      postcodes,
      latest,
    },
  };
}



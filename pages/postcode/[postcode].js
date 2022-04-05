import SearchAppBar from "../components/SearchAppBar"
import PostcodeCard from "../components/PostcodeCard"
import {GetSiteData} from "../components/FetchData"
import { useRouter } from 'next/router'


export default function Home({ postcodes, latest }) {
    const router = useRouter()
    const { postcode } = router.query
    return (
        <>
            <div>Postcode: {postcode }</div>
        
        </>
    )


}




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


export async function getStaticPaths() {
  return {
    paths: [
          { params: { postcode: "2219" } },
          { params: { postcode: "2218" } },
    ],
    fallback: true // false or 'blocking'
  };
}
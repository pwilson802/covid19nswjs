import SearchAppBar from "../components/SearchAppBar"
import PostcodeCard from "../components/PostcodeCard"
import {GetSiteData} from "../../modules/FetchData"
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
    let postcodes = range(2000, 2999)
    let paths = postcodes.map((item) => {
        return { params: { postcode: String(item) } }
    })
  return {
    paths: paths,
    fallback: true // false or 'blocking'
  };
}


function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
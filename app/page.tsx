import client from "./lib/apolloClient";
import { fetchHomepage } from "./lib/fetchHomepage";
import { GET_HOMEPAGE } from "./lib/queries";

async function getHomepage() {
  const { data } = await client.query({ query: GET_HOMEPAGE})
  console.log('>>>>>>>>', data)
}

export default function Home() {
  const homepageData =  getHomepage();
  return (
    <main className="bg-red-500 px-5 lg:px-24">
      app
    </main>
  );
}

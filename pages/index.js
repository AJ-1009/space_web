import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>Ashwin&#039;s project</title>
        <meta name="description" content="Trying my best to make it best" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div className="text">Made with ❤️ by Ashwin</div>
    </div>
  );
}

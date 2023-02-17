import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ashwin&#039;s project</title>
        <meta name="description" content="Trying my best to make it best" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hi-container">
        <div className="img" >
          <img src="/victory.png" alt="" />
        </div>
        <div className="hi">Hi There</div>
      </div>
      <div className="text">
        Made with <div className="heart"> ❤️ </div> by Ashwin
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import ImageOfDay from "../components/ImageOfDay";
import Head from "next/head";
export default function Apod() {
  const [details, setdetails] = useState();
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setdetails(res);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>NASA&#039;s Astronomy Picture of the Day</title>
      </Head>
      <div>
        {details && (
          <ImageOfDay
            author={details.copyright}
            link={details.url}
            title={details.title}
            desc={details.explanation}
            date={details.date}
          />
        )}
      </div>
    </div>
  );
}

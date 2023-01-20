import { useState, useEffect } from "react";
import moment from "moment/moment";
import ImageOfDay from "../components/ImageOfDay";
import Head from "next/head";
export default function Apod() {
  const [details, setdetails] = useState();
  const [date, setdate] = useState();
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setdetails(res);
        setdate(moment(res.date).format("YYYY-MM-DD"));
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}&date=${date}`
    )
      .then((res) => res.json())
      .then((res) => {
        setdetails(res);
      });
  }, [date]);
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
        <div id="input">
          Select a Date{" "}: {" "}
          <input
            type="date"
            id="input"
            name=""
            onChange={(e) => setdate(e.target.value)}
            value={date}
          />
        </div>
      </div>
    </div>
  );
}

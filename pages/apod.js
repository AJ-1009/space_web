import { useState,useEffect } from "react";
import ImageOfDay from "../components/ImageOfDay";

export default function Apod() {
    const [details,setdetails] = useState()
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_APOD_LINK}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setdetails(res)
      });
  }, []);
  return (
    <div>
      <div>
        {details && <ImageOfDay author={details.copyright} link={details.url} title={details.title} desc={details.explanation} />}
      </div>
    </div>
  );
}

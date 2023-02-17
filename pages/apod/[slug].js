import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ImageOfDay from "../../components/ImageOfDay";

export default function Slug() {
  const router = useRouter();
  const [details, setdetails] = useState();
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}&date=${router.query.slug}`
    )
      .then((res) => res.json())
      .then((res) => {
        setdetails(res);
      });
  }, [router.isReady]);
  return (
    <div>
      <ImageOfDay detail={details} />
    </div>
  );
}

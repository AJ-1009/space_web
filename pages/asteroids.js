import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Asteroids() {
  const [page, setpage] = useState(100);
  const [details, setdetails] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/insight_weather/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&feedtype=json&ver=1.0`
    )
      .then((res) => res.json())
      .then((res) => {
        setdetails(res);
      });
  }, [router.isReady, page]);
  return (
    <div>
      <div>{console.log(details)}</div>z
    </div>
  );
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Asteroids() {
  const [page, setpage] = useState(100);
  const [details, setdetails] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_ASTEROID_LINK}&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        setdetails(res?.near_earth_objects);
      });
  }, [router.isReady, page]);
  return (
    <div>
      <div>
        {console.log(details)}
      </div>
    </div>
  );
}

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../components/image.module.css";
import SearchBar from "../components/SearchBar";

export default function Image() {
  const [photos, setphotos] = useState([]);
  const [query, setquery] = useState("saturn");
  const router = useRouter();
  useEffect(() => {
    fetch(` https://images-api.nasa.gov/search?q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        // let temp1 = res?.collection?.items?.map(async (data) => {
        //   return await fetch(data?.href)
        //     .then((e) => e.json())
        //     .then((res) => {
        //       console.log(res)
        //     });
        // });
        // console.log(temp1);
        let temp = res?.collection?.items?.map((data) => {
          return data?.links?.map((data) => {
            return data?.href;
          });
        });
        setphotos(temp);
      })
      .catch(() => console.log("error"));
  }, [router.isReady, query]);
  return (
    <div>
      <Head>
        <title>Search space images available at NASA</title>
      </Head>
      <div>
        <SearchBar
          searchQuery={query}
          onSearchChange={(e) => setquery(e.target.value)}
        />
        <div className={styles["main-wrapper"]}>
          {photos &&
            photos?.map((img, index) => (
              <div key={index}>
                <img src={img} alt="failed to load" loading="lazy" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

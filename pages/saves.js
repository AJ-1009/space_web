import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../components/saves.module.css";
export default function Saves() {
  const [saves, setsaves] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("saves")) {
      let a = JSON.parse(localStorage.getItem("saves"));
      setsaves(a);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Your saves</title>
      </Head>
      <div className={styles["img-wrapper"]}>
        {saves?.map((img, index) => (
          <div key={index} >
            <Link href={"/apod/" + img.date} key={index}>
              <div className={styles["img"]}>
                <img src={img.url} alt="" />
              </div>
            </Link>
            <div
              className={styles["btn"]}
              style={{ marginTop: "10px" }}
              onClick={() => {
                let a = JSON.parse(localStorage.getItem("saves"))
                a.splice(index)
                let b = JSON.stringify(a)
                localStorage.setItem("saves",b)
                alert("Item remove successfully")
                setTimeout(() => {
                  router.reload()
                }, 1000);
              }}
            >
              Remove
            </div>
          </div>
        ))}
      </div>
      {!saves.length && (
        <div className={styles["nothing-here"]}>
          You can see your saved Astronomy Picture of day here{" "}
        </div>
      )}
      {saves.length && (
        <div
          onClick={() => {
            localStorage.clear();
            router.reload();
            alert("All Clear");
          }}
          className={styles["btn"]}
        >
          Clear all
        </div>
      )}
    </div>
  );
}

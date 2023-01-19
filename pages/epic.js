import moment from "moment/moment";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../components/epic.module.css";
export default function Epic() {
  const [details, setdetails] = useState([]);
  const [photos, setphotos] = useState([]);
  const [index, setindex] = useState(0);
  const [showndetail, setshowndetail] = useState();
  const [imagelink, setimagelink] = useState();
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setdetails(res);
      });
  }, []);
  useEffect(() => {
    const images = details?.map((data) => {
      const a = moment(data.date).format("YYYY/MM/DD");
      return `https://api.nasa.gov/EPIC/archive/natural/${a}/png/${data?.image}.png?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    });
    setphotos(images);
    setshowndetail(details[index]);
  }, [details]);
  const prev = () => {
    if (index == 0) {
      setindex(7);
      setshowndetail(details[index]);
    } else {
      setshowndetail(details[index - 1]);
      setindex(index - 1);
    }
  };
  const next = () => {
    if (index == 7) {
      setindex(0);
      setshowndetail(details[0]);
    } else {
      setindex(index + 1);
      setshowndetail(details[index + 1]);
    }
  };
  useEffect(() => {
    setimagelink(
      `https://api.nasa.gov/EPIC/archive/natural/${moment(
        showndetail?.date
      ).format("YYYY/MM/DD")}/png/${showndetail?.image}.png?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }`
    );
  }, [showndetail]);
  return (
    <div>
        <Head>
            <title>Earth Polychromatic Imaging Camera</title>
        </Head>
      <div className={styles["main-wrapper"]}>
        {console.log(showndetail)}
        <div className={styles["img-wrapper"]}>
          <div
            onClick={prev}
            className={styles["btn"]}
            style={{ width: "20px", height: "20px" }}
          >
            &larr;
          </div>
          <div style={{ backgroundImage: `url('${imagelink}')` }}></div>

          <div
            onClick={next}
            className={styles["btn"]}
            style={{ width: "20px", height: "20px" }}
          >
            &rarr;
          </div>
        </div>
        <div className={styles["info-wrapper"]}>
          {imagelink && (
            <Link
              href={imagelink}
              target="_blank"
              className={styles["img-link"]}
            >
              {" "}
              {showndetail?.image}
            </Link>
          )}
          <div className={styles["points"]}>
            <div>Date : {moment(showndetail?.date).format("DD/MM/YYYY")} </div>
            <div>Processing Version : {" " + showndetail?.version}</div>
            <div>Distance to Earth : 1,420,065 Km</div>
            <div>Distance to Sun : 145,764,730 Km</div>
            <div>Sun to Earth : 147,161,760 km</div>
          </div>
          <div className={styles["thumb-img"]}>
            <img src={imagelink} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}


import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./image-of-day.module.css";
const Month = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const Day = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
export default function ImageOfDay({ title, link, desc, author, date }) {
  // const [date1, setdate1] = useState();
  // const [day, setday] = useState();
  // const [year, setyear] = useState();
  // const [month, setmonth] = useState();
  const [completeDate, setcompleteDate] = useState();
  useEffect(() => {
    // setdate1(new Date(date).getDate());
    // setyear(new Date(date).getFullYear());
    // setday(Day[new Date(date).getDay()]);
    // setmonth(Month[new Date(date).getMonth()]);
    setcompleteDate(
      Day[new Date(date).getDay()] +
        " " +
        new Date(date).getDate() +
        " " +
        Month[new Date(date).getMonth()] +
        " " +
        new Date(date).getFullYear()
    );
  }, []);
  return (
    <>
      
      <div className={styles["heading"]}>
        NASA&#039;s Astronomy Picture of the Day
      </div>
      <div className={styles["title"]}>{title}</div>
      {completeDate && (
        <div className={styles["author"]} style={{ paddingTop: "20px" }}>
          {completeDate}
        </div>
      )}
      <div className={styles["flex"]}>
        <div className={styles["img-wrapper"]}>
          <Link href={link} target="_blank" >
            <div className={styles["image"]}>
              <img src={link} alt="" />
            </div>
          </Link>
          <div className={styles["author"]}>Credits : {author}</div>
        </div>
        <div className={styles["desc"]}>{desc}</div>
      </div>
    </>
  );
}

import moment from "moment/moment";
import Link from "next/link";
import styles from "./image-of-day.module.css";

export default function ImageOfDay({ title, link, desc, author, date }) {
  return (
    <>
      {link && (
        <div>
          <div className={styles["heading"]}>Astronomy Picture of the Day</div>
          <div className={styles["title"]}>{title}</div>

          <div className={styles["author"]} style={{ paddingTop: "20px" }}>
            {moment(date).format("DD/MM/YYYY")}
          </div>

          <div className={styles["flex"]}>
            <div className={styles["img-wrapper"]}>
              {link && (
                <Link href={link} target="_blank">
                  <div className={styles["image"]}>
                    <img src={link} alt="" />
                  </div>
                </Link>
              )}
              {author && (
                <div className={styles["author"]}>Credits : {author}</div>
              )}
            </div>
            <div className={styles["desc"]}>{desc}</div>
          </div>
        </div>
      )}
    </>
  );
}

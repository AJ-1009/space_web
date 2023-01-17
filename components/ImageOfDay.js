import Head from "next/head";
import styles from "./image-of-day.module.css";

export default function ImageOfDay({ title, link, desc, author }) {
  return (
    <>
      <Head>
        <title>NASA&#039;s Astronomy Picture of the Day</title>
      </Head>
      <div className={styles['heading']} >NASA&#039;s Astronomy Picture of the Day</div>
      <div className={styles["title"]}>{title}</div>
      <div className={styles["flex"]}>
        <div className={styles["img-wrapper"]}>
          <div className={styles["image"]}>
            <img src={link} alt="" />
          </div>
          <div className={styles["author"]}>{author}</div>
        </div>
        <div className={styles["desc"]}>{desc}</div>
      </div>
    </>
  );
}

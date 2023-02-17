import moment from "moment/moment";
import Link from "next/link";
import styles from "./image-of-day.module.css";

export default function ImageOfDay({ detail, type }) {
  function save() {
    if (localStorage.getItem("saves")) {
      let saves = JSON.parse(localStorage.getItem("saves"));
      saves.push(detail);
      localStorage.setItem("saves", JSON.stringify(saves));
    } else {
      let saves = [];
      saves.push(detail);
      localStorage.setItem("saves", JSON.stringify(saves));
    }
    alert("Image is Saved")
  }
  return (
    <>
      {detail && (
        <div>
          <div className={styles["heading"]}>Astronomy Picture of the Day</div>
          <div className={styles["title"]}>{detail.title}</div>

          <div className={styles["author"]} style={{ paddingTop: "20px" }}>
            {moment(detail.date).format("DD/MM/YYYY")}
          </div>

          <div className={styles["flex"]}>
            <div className={styles["img-wrapper"]}>
              {detail.url && (
                <Link href={detail.url} target="_blank">
                  <div className={styles["image"]}>
                    <img src={detail.url} alt="" />
                  </div>
                </Link>
              )}

              {detail.copyright && (
                <div className={styles["author"]}>
                  Credits : {detail.copyright}
                </div>
              )}
              {detail.url && (
                <Link
                  href={detail.url}
                  download
                  className={styles["author"]}
                  target="_parent"
                >
                  Download image
                </Link>
              )}
            </div>
            <div className={styles["desc"]}>{detail.explanation}</div>
          </div>
          {type == "save" && (
            <div className={styles["btn"]} onClick={save}>
              Save
            </div>
          )}
        </div>
      )}
    </>
  );
}

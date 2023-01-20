import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
export default function Navbar() {
  const [menu, setmenu] = useState(false);
  return (
    <div>
      <div className={styles["icon"]} onClick={() => setmenu(true)}></div>
      <div
        className={`${styles["link-wrapper"]} ${
          styles[menu ? "shown" : "hidden"]
        }`}
      >
        <div className={styles["icon"]} onClick={() => setmenu(false)}></div>
        <Link href="/apod" className={styles["link"]} onClick={()=>setmenu(false)} >
          Astronomy Picture of the Day
        </Link>
        <Link href="/image" className={styles["link"]} onClick={()=>setmenu(false)} >
          Search space related images
        </Link>
        <Link href="/epic" className={styles["link"]} onClick={()=>setmenu(false)} >
          Earth Polychromatic Imaging Camera
        </Link>
      </div>
    </div>
  );
}

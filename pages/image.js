import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const images = ["jpg", "png"];
const videos = ["mp4"];
export default function Image() {
  const [photos, setphotos] = useState([]);
  const [video, setvideo] = useState([]);
  const [query, setquery] = useState("");
  const [shownphotos, setshownphotos] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const temp1 = [];
    const temp2 = [];
    fetch(`${process.env.NEXT_PUBLIC_IMAGE_LINK}q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        res?.collection?.items.map((details) => {
          fetch(details?.href)
            .then((res) => res.json())
            .then((res) => {
              res?.map((res) => {
                const url = new URL(res);
                const type = url.pathname.split(".")[1];
                if (images.includes(type)) {
                  temp1.push(res);
                }
                if (videos.includes(type)) {
                  temp2.push(res);
                }
              });
              setphotos(temp1);
              setvideo(temp2);
            });
        });
      })
      .catch((e) => console.log(e));
  }, [router.isReady, query]);
  // useEffect(() => {
  //   for (let index = 0; index < 100; index += 3) {
  //     const element = photos[index];
  //     console.log(element);
  //   }
  // }, [photos, video]);
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setquery(e.target.value)}
          value={query}
        />
        {photos && photos?.map((img)=>{
          console.log(img)
          (
            <div key={img} >
                <div style={{backgroundImage:`url(${img})`}} ></div>
            </div>
        )})}
      </div>
    </div>
  );
}

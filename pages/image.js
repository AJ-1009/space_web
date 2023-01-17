import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const images = ["jpg", "png"];
const videos = ["mp4"];
export default function Image() {
  const [photos, setphotos] = useState([]);
  const [video, setvideo] = useState([]);
  const [query,setquery] = useState("")
  const router = useRouter()
  useEffect(() => {
    fetch(`${[process.env.NEXT_PUBLIC_IMAGE_LINK]}q=${query}`)
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
                  setphotos(photos?.push(res));
                }
                if (videos.includes(type)) {
                  setvideo(video?.push(res));
                }
              });
            });
        })
      }).catch((e)=>console.log(e))
      console.log(photos)
      console.log(video)
      console.log(typeof(video))
  }, [router.isReady,query]);
  return (
    <div>
      <div>
        <input type="text" onChange={(e)=>setquery(e.target.value)} value={query} />
        {/* {photos && photos?.map((img)=>(
            <div>
                <div style={{backgroundImage:`url(${img})`}} ></div>
            </div>
        ))} */}
      </div>
    </div>
  );
}

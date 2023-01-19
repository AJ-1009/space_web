import moment from "moment/moment";
import React, { useEffect, useState } from "react";

export default function Epic() {
  const [details, setdetails] = useState([]);
  const [photos, setphotos] = useState([]);
const [index,setindex] = useState(0);
const [showndetail,setshowndetail] = useState()
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setdetails(res);
        console.log(res);
      });
  }, []);
  useEffect(() => {
    const images = details?.map((data) => {
      const a = moment(data.date).format("YYYY/MM/DD");
      return `https://api.nasa.gov/EPIC/archive/natural/${a}/png/${data?.image}.png?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    });
    setphotos(images);
  }, [details]);
useEffect(()=>{
setdetail(details[index])
},[details,index])
const prev = ()=>{
if(index==0){
setindex(details.length()-1)
}
else{
setindex(index-1)}
}
const next = ()=>{
if(index==details.length()-1){setindex(0)}

else{setindex(index+1)}}
  return (
    <div>
      <div>
        {photos?.map((data,index) => {
          return (
            <div key={index} >
              <img src={data} alt="" />
              <div></div>
            </div>
          );
        })}
        {console.log(photos)}
      </div>
    </div>
  );
}

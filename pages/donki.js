import React, { useEffect } from "react";

export default function Donki() {
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/insight_weather/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&feedtype=json&ver=1.0`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  });
  return (
    <div>
      <div></div>
    </div>
  );
}

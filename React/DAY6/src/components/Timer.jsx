import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    const runTime = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(runTime);
    };
  }, []);
  useEffect(() => {
    console.log("useEffect không có mảng chạy rồii");
  });
  useEffect(() => {
    console.log("useEffect có mảng [text] chạy rồii");
  }, [text]);
  return (
    <>
      <p>Thời gian: {time} giây</p>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Your text"
      ></input>
    </>
  );
}

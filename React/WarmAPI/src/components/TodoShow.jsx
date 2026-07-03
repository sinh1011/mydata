import { useEffect } from "react";

export default function TodoShow({ list, setList }) {
  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        setList(data.todos);
      } catch (error) {
        console.log("loi xuat hien", error);
      }
    };
    fecthData();
  }, []);

  return (
    <>
      {list.map((i) => {
        return (
          <div key={i.id}>
            <p>
              - {i.todo}, UserID:{i.userId}
            </p>
          </div>
        );
      })}
    </>
  );
}

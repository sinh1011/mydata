import { useEffect, useState } from "react";
import "./App.css";
import Render from "./components/Render";

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Mới mở app thì mặc định là đang tải
  const [error, setError] = useState(null); // Mặc định không có lỗi (null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Không thể tải dữ liệu từ server");
        }
        const data = await res.json();
        setList(data);
      } catch (error) {
        setError(error.message || "Đã có lỗi");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>Danh sách người dùng</h1>

      {/* Nếu đang loading thì hiện chữ này */}
      {isLoading && <h2>Đang tải dữ liệu, vui lòng chờ...</h2>}

      {/* Nếu bị lỗi thì hiện chữ màu đỏ thông báo */}
      {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}

      {/* Chỉ khi nào hết loading và không có lỗi thì mới hiện danh sách */}
      {!isLoading && !error && <Render list={list}></Render>}
    </>
  );
}

export default App;

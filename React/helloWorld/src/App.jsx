import "./App.css";

function App() {
  const user = ["An", "Binh", "Chi"];

  return (
    <>
      {/* <Hello name="Sinh" />
      <Hello name="Minh" />
      <Hello name="Hanh" />
      <Counter count={1} />

      <Display user={user} />

      <button onClick={HandleClick}>Click</button> */}

      <Card title="sinh" content="sinh dep trai vcl"></Card>
      <Card title="Vip" content="hang super vip"></Card>
    </>
  );
}

function Hello({ name }) {
  return <p>Xin chao {name}</p>;
}

function Counter({ count }) {
  return (count = count + 1);
}
// bafi 2 2 kết quả đều ra 2 vì mỗi khi components được gọi thì nó sẽ chạy lại từ đầu chứ không lưu
function Display({ user = [] }) {
  return (
    <>
      {user.map((i) => {
        return <p key={i}>Xin Chao {i}</p>;
      })}
    </>
  );
}

function HandleClick() {
  return console.log("HandleClick");
}


function Card({title,content}){
  return <>
  <p>{title}</p>
  <p>{content}</p>
  </>
}


export default App;

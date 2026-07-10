export default function Render({ list, setList }) {
  return (
    <>
      {list.map((i) => {
        return <p key={i.id}>- {i.name}</p>;
      })}
    </>
  );
}

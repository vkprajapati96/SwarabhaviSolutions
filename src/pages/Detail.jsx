import { useParams } from "react-router-dom";
import { data } from "../data";

export default function Detail() {
  const { id } = useParams();

  const item = data.find((d) => d.id === Number(id));

  if (!item) return <h1>Not Found</h1>;
  
  return (

    <div>
      <h1>{item.title}</h1>
      <img src={item.img} />
      <p>{item.desc}</p>
      <p>{item.fullDesc}</p>
      
    </div>
  );
}
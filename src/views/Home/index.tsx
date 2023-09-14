import RecursiveComponent from "../../components/Renderer/RecursiveComponent";
import { data } from "../../data/data";

function Home() {
  return <RecursiveComponent data={data} />;
}

export default Home;

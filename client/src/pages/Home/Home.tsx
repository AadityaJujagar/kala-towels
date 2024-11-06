import Carousel from "../../components/Carousel/Carouse";
import { Products } from "../../components/Products/Products";

export const Home = () => {
  return (
    <div style={{ gap: "48px" }}>
      <Carousel />
      <Products />
    </div>
  );
};

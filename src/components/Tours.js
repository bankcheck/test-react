import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title1="featured" title2="tours" />

      <div className="section-center featured-center">
        {tours.map((item) => {
          return <Tour key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Tours;

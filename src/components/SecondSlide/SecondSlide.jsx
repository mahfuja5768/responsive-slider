import banner from "../../assets/images/banner.png";
import Slider from "./Slider";
const SecondSlide = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <img src={banner} alt="" />
        </div>
        <div>
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;

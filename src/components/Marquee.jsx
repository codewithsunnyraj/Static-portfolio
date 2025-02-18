import Marquee from "react-fast-marquee";
import { assets } from "../constant/constant";

export default function MarqueeText() {
  return (
    <div className="py-4 md:pt-14 border-b border-[#475569]">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        <div>
          <img src={assets.amazon} className="md:w-44 w-24  mx-14" alt="" />
        </div>
        <div>
          <img src={assets.linkedin} className="md:w-44 w-24 mx-14" alt="" />
        </div>
        <div>
          <img src={assets.goggle} className="md:w-44 w-24 mx-14" alt="" />
        </div>
        <div>
          <img src={assets.skype} className="md:w-44 w-24 mx-14" alt="" />
        </div>
        <div>
          <img src={assets.netflic} className="md:w-44 w-24 mx-14" alt="" />
        </div>
        <div>
          <img src={assets.paypal} className="md:w-44 w-24 mx-14" alt="" />
        </div>
        <div>
          <img src={assets.samsung} className="md:w-44 w-24 mx-14" alt="" />
        </div>
      </Marquee>
    </div>
  );
}

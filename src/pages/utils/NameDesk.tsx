import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ThreeCardFlex: React.FC = () => {
  return (
    <div className="grid mt-10 lg:mt-16 grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-10 justify-center">
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="500" className="shadow-lg dark:shadow-2xl rounded-3xl dark:shadow-neutral-900">
        <ul className="p-9">
          <div className="font-bold  text-2xl mb-2">Card 1</div>
          <p className=" leading-relaxed mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem sapiente omnis ad tempora labore esse laborum rem commodi
            reiciendis.
          </p>
        </ul>
      </div>
      <div data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000" className="bg-[#0072F5] rounded-3xl">
        <ul className="p-9">
          <div className="font-bold text-white text-2xl mb-2">Card 2</div>
          <p className="text-white  leading-relaxed mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem sapiente omnis ad tempora labore esse laborum rem commodi
            reiciendis.
          </p>
        </ul>
      </div>
      <div data-aos="flip-left" data-aos-delay="600" data-aos-duration="1500" className="shadow-lg dark:shadow-2xl rounded-3xl dark:shadow-neutral-900">
        <ul className="p-9">
          <div className="font-bold text-2xl mb-2">Card 3</div>
          <p className=" leading-relaxed mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem sapiente omnis ad tempora labore esse laborum rem commodi
            reiciendis.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default ThreeCardFlex;

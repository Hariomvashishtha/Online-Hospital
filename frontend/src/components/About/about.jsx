
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-around gap-[45px] lg:gap-[110px] xl:gap-0 flex-col lg:flex-row">

          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[440px] z-10 order-2 lg:order-1 left-6">
            <img src={aboutImg} alt=""></img>
            <div className="absolute z-20 bottom-4 w-[180px] md:w-[280px] right-[-30%] md:right-[-7%] lg:right-[-30%]">
              <img src={aboutCardImg}></img>
            </div>
          </div>
          
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[440px] order-1 lg:order-2">
            <h2 className="heading leading-[50px]  text-[40px] font-[500] m-4 p-4">Proud to be one of the nations best</h2>
            <p className="p-4 m-4 text_para">
              For 30 years in a row ,U.S. News & World Report has recognized us as one of the best publics hospitals
              in the nation and #1 in Texas. </p>
            <p className="p-4 m-4 text_para"> Our best is something we strive for each day ,caring for our patients-not
            looking back at what accomplished but towards what we can do tomorrow.Proving the best .</p>
            <Link to="/"><button className="btn relative left-[45px]">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

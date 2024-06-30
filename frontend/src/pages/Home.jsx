/* eslint-disable no-unused-vars */
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import About from "../components/About/about.jsx";
import Services from "../components/Services/services.jsx";
import featureImg from "../assets/images/feature-img.png";
import VideoIcon from "../assets/images/video-icon.png";
import Avatar from "../assets/images/avatar-icon.png";
import DoctorList from "../components/Doctors/DoctorList.jsx";
import faqImg from "../assets/images/faq-img.png";
import Faqlist from "../components/Faq/Faqlist.jsx";
import Footer from "../components/footer/footer.jsx";
// import Testimonial from "../components/Testimonial/Testimonial.jsx";

const Home = () => {
  return (
    <>
      {/* hero section  start  */}

      <section className="hero_section pt-[30px] 2xl:h-[600px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[60px] justify-between">
            {/* hero content */}
            <div className="lg:mx-[8rem] sm:mx-2 md:mx-2">
              <div className="lg:w-[370px]">
                <h1 className="text-[26px] leading-[26px] text-headingCoolor font-[800] md:text-[40px] md:leading-[70px] mx-auto mr-0">
                  We help patients live a healthy , longer life
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis, eveniet.
                </p>
                <button className="relative mx-auto mt-5 mr-0 btn left-6">Request an Appointment</button>
              </div>
              {/* heroCounter */}
              <div className="mt-[30px] lg:mt-[30px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingCoolor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-9px]"></span>
                  <p className="text_para"> Year Of Experience </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingCoolor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-400 rounded-full block mt-[-9px] "></span>
                  <p className="text_para"> Clinical Location </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingCoolor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-9px] "></span>
                  <p className="text_para">Patient Satisfaction </p>
                </div>
              </div>
            </div>
            {/* hero content */}
            <div className="lg:mx-[8rem] flex gap-[30px] justify-end sm:mx-2 md:mx-2">
              <div>
                <img src={heroImg01} alt="" className="w-full" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full mb-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-center heading text-[40px] font-[500]">
              Providing the best medical services
            </h2>
            <p className="text-center text_para">
              World-class care for everyone. Our health System offers unmatched
              ,expert health care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-[30px] mt-[40px] lg:mt-[15px]">
            <div className="px-15 mx-[3rem]">
              <div className="flex items-center justify-center">
                <img src={icon01}></img>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingCoolor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] text-center mt-4 mx-6">
                  World-class care for everyone. Our health System offers
                  unmatched , expert health care from lab to clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full  mt-[20px] mx-auto
               flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRightCircle
                    style={{ height: "32px", width: "32px" }}
                    className="w-6 h-5 group-hover:text-white"
                  />
                </Link>
              </div>
            </div>
            <div className="px-15 mx-[3rem]">
              <div className="flex items-center justify-center">
                <img src={icon02}></img>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingCoolor font-[700] text-center">
                Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] text-center mt-4 mx-6">
                World-class care for everyone. Our health System offers
                unmatched , expert health care from lab to clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full  mt-[20px] mx-auto
               flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRightCircle
                    style={{ height: "32px", width: "32px" }}
                    className="w-6 h-5 group-hover:text-white"
                  />
                </Link>
              </div>
            </div>
            <div className="px-15 mx-[3rem]">
              <div className="flex items-center justify-center">
                <img src={icon03}></img>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingCoolor font-[700] text-center">
                Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] text-center mt-4 mx-6">
                World-class care for everyone. Our health System offers
                unmatched , expert health care from lab to clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full  mt-[20px] mx-auto
               flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRightCircle
                    style={{ height: "32px", width: "32px" }}
                    className="w-6 h-5 group-hover:text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section start   /* about section ==========*/}
      <About />
      {/* about section end */}

      {/* service section start */}
      <Services />
      {/* service section end */}

      {/* feature sectiion starts */}
      <section>
        <div className="container">
          <div className="relative flex flex-col items-center justify-center lg:flex-row ">
            {/* faeture content */}
            <div className="xl:w-[670px] lg:relative lg:left-[10rem]">
              <h2 className="heading text-[40px] items-center ">
                {" "}
                Get Virtual treatment <br /> anytime, Anywhere
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1.Schedule the Appointment directly
                </li>
                <li className="text_para">
                  2.Search for your physician here , and contact their office
                </li>
                <li className="text_para">
                  3.View our physicians who are accepting new patients ,use the
                  online scheduling tool to select an appointment time
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* feature image */}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg}></img>
              <div
                className="w-[150px] lg:w-[328px] bg-white absolute bottom-[50px] left-0 md:bottom-[10px] md:left-5 z-20 p-2
               pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3 relative  ">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg-leading-5 text-headingCoolor font-[600]">
                      Tue ,24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg-leading-5 text-headingCoolor font-[600]">
                      10 :00 AM
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-start  bg-yellow-400 rounded py-1 
                  px-[6px] lg:py-3 lg:px-[9px] relative"
                  >
                    <img src={VideoIcon}></img>
                  </span>
                </div>

                <div
                  className="w-[65px]  lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px]  text-[8px]
             leading-[8px] lg:text-[12px] lg-leading-4 text-irisBlueColor  font-[500] mt-3 lg:mt-4 rounded-[5px]"
                >
                  Consulattion
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={Avatar}></img>
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg-leading:[22px] font-[700] text-headingCoolor">
                    Wayne Calling
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fature section ends   */}

      {/* our great doctor */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading text-[40px]">
              Our great Doctor
            </h2>
            <p className="text-center text_para">
              World class care for everyone .Our health system offers unmatched
              expert health care
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* our greate doctor */}
      {/* faq questions */}
      <section>
        <div className="containser">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="hidden w-1/2 md:block ml-[10rem]  ">
              <img src={faqImg} className="h-[600px] md:h-[550px] sm:[350px]"></img>
            </div>
            <div  className="w-full md:w-1/2 mr-[10%]">
              <h2 className="heading text-[40px]">Most questions by our beloved patients</h2>
            <Faqlist />
            </div>
            
          </div>
        </div>
      </section>
      {/* faq questions  */}

      {/* testimonial  section*/}
      {/* <section>
        <div className="container">
          <div className="xl:w-[450px] mx-auto">
            <h2 className="text-center heading text-[40px]">What our patient say</h2>
            <p className="text-center text_para">
              World class care for everyone .Our health system offers unmatched
              expert health care
            </p>
          </div>
          
        </div>
      </section> */}
      {/* testimonial section */}

      {/* footer section */}
      {/* <Footer /> */}
      {/* footer section */}
    </>
  );
};

export default Home;

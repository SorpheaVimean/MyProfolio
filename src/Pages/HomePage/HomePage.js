import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./HomePage.css"; // Import the CSS file
import { Link, useParams } from "react-router-dom";
import CV from "../../file/Sorphea_Vimean(CV).pdf";
// images
import profile from "../../image/profile1.png";
import stand from "../../image/stand.png";
import express from "../../image/node-express.png";
import after from "../../image/after.png";
import premier from "../../image/premier.png";
import tailwind from "../../image/tailwind.png";
import php from "../../image/php.png";
import laravel from "../../image/laravel.png";
import node from "../../image/node.png";
import html from "../../image/html,css,js.png";
import ant from "../../image/antDesign.png";
import mt from "../../image/logo-mt.png";
import react from "../../image/react.png";
import e1 from "../../image/ecommerce/Ecommerce1.png";
import s1 from "../../image/spotify/Spotify1.png";
import n1 from "../../image/node/Node1.png";

import image1 from "../../image/img-bg/BACK.png";
import image2 from "../../image/img-bg/hill1.png";
import image3 from "../../image/img-bg/hill2.png";
import image4 from "../../image/img-bg/hill3.png";
import image5 from "../../image/img-bg/hill4.png";
import image6 from "../../image/img-bg/hill5.png";
import image7 from "../../image/img-bg/hill6.png";
import image8 from "../../image/img-bg/hill7.png";
import image9 from "../../image/img-bg/hill8.png";

// icon from reactIcon
import { FaGraduationCap } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaEarListen } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiEnglishInput } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

// import { MdEmail } from "react-icons/md";
// import { MdPhoneAndroid } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Input,
  Textarea,
  Alert,
} from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import MessengerCustomerChat from 'react-messenger-customer-chat';
const HomePage = () => {
  const form = useRef();
  const [alertVisible, setAlertVisible] = useState(false);
  const hill2Ref = useRef(null);
  const hill3Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);
  const hill6Ref = useRef(null);
  const hill7Ref = useRef(null);
  const hill8Ref = useRef(null);
  const { section } = useParams();
  const sectionHome = useRef(null);
  const sectionAbout = useRef(null);
  const sectionExper = useRef(null);
  const sectionProject = useRef(null);
  const sectionContact = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 1500 });
    switch (section) {
      case "home":
        sectionHome.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about-me":
        sectionAbout.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "experiences":
        sectionExper.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        sectionProject.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contacts":
        sectionContact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (hill2Ref.current)
        hill2Ref.current.style.transform = `translateY(${scrollY * 2.5}px)`;
      if (hill3Ref.current)
        hill3Ref.current.style.transform = `translateX(${scrollY * 2.5}px)`;
      if (hill4Ref.current)
        hill4Ref.current.style.transform = `translateX(${-scrollY * 2.5}px)`;
      if (hill5Ref.current)
        hill5Ref.current.style.transform = `translateY(${scrollY * 2.5}px)`;
      if (hill6Ref.current)
        hill6Ref.current.style.transform = `translateY(${scrollY * 2}px)`;
      if (hill7Ref.current)
        hill7Ref.current.style.transform = `translateX(${-scrollY * 2.3}px)`;
      if (hill8Ref.current)
        hill8Ref.current.style.transform = `translateX(${scrollY * 2.3}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [section]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wckdvbp", "template_ubhog9a", form.current, {
        publicKey: "inQPgRgmar-7PvM2R",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setAlertVisible(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <div
        ref={sectionHome}
        class=" relative flex flex-row justify-center items-center h-72 md:h-[550px] lg:h-screen overflow-hidden"
      >
        <Alert
        open={alertVisible}
        onClose={() => setAlertVisible(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
          icon={<IoIosCheckmarkCircle  />}
          className="rounded-none border-l-4 border-[#2ec946] bg-BgBtn w-96 font-medium text-[#2ec946] z-30  fixed top-20 right-5"
        >
          Your message was sent successfully!
        </Alert>
        <div class="overflow-hidden">
          <img
            class="absolute top-0 left-0 bottom-0 w-full pointer-events-none mb-[100px]"
            src={image1}
            alt=""
          />

          <img
            class="absolute top-0 left-0 bottom-0 w-full pointer-events-none mb-[100px]"
            src={image2}
            alt=""
          />
          <img
            ref={hill2Ref}
            class="absolute top-0 left-0 bottom-0 w-full pointer-events-none mb-[100px]"
            src={image3}
            alt=""
          />
          <img
            ref={hill3Ref}
            class="absolute top-0 left-0 bottom-0 w-full pointer-events-none mb-[100px]"
            src={image4}
            alt=""
          />

          <img
            ref={hill4Ref}
            class="absolute top-0 left-0 bottom-0 w-full pointer-events-none mb-[100px]"
            src={image5}
            alt=""
          />

          <img
            ref={hill5Ref}
            class="absolute top-0 left-0 bottom-0 w-full pointer-events-none mb-[100px]"
            src={image6}
            alt=""
          />
          <img
            ref={hill5Ref}
            class=" absolute top-0 left-0 bottom-0 w-full pointer-events-none mb-[100px] "
            src={image9}
            alt=""
          />
          <img
            ref={hill6Ref}
            class=" absolute top-0 lg:top-[-100px] left-0 bottom-0 w-full pointer-events-none mb-[100px]   "
            src={image7}
            alt=""
          />

          <img
            ref={hill7Ref}
            class=" absolute top-0 lg:top-[-100px]   left-0 bottom-0 w-full pointer-events-none mb-[100px]  "
            src={image8}
            alt=""
          />
        </div>
        {/* profile */}
        <div className="flex  justify-evenly items-center gap-10 absolute ">
          <div>
            <img
              className="profile mt-28  "
              src={profile}
              alt=""
              data-aos="fade-left"
            />
          </div>

          <div className="mt-[50px]">
            <p data-aos="fade-right">
              {" "}
              <span className="text-BgBtn text-sm md:text-xl">----</span>
              <span className="text-sm md:text-2xl">Hello! It's me</span>
            </p>
            <h1
              className=" text-md md:text-4xl font-bold my-0 md:my-5"
              data-aos="zoom-in"
            >
              Sorphea Vimean
            </h1>
            <p className="job" data-aos="zoom-in">
              {" "}
              <span className="text-[10px] md:text-xl">And I'm</span>{" "}
              <span className="text-sm md:text-3xl text-text font-bold ">
                 a Web Developer
              </span>{" "}
            </p>
            <div
              className="opacity-70 text-[9px] max-w-3xl md:text-xl text-text"
              data-aos="zoom-in"
            >
              {" "}
              passionate about building sleek and functional websites. From crafting beautiful user interfaces to optimizing performance, I love turning ideas into reality through code. Let's connect and create something awesome together!
            </div>
            <div className="hidden md:block" data-aos="zoom-in">
              <div className="flex justify-start items-center text-[9px] md:text-2xl gap-1 my-1 md:my-5">
                <div className="bg-blue-600 p-1 md:p-3 rounded-full">
                  <MdEmail className="text-white text-sm md:text-3xl " />
                </div>
                <label>sorphea.vimean@gmail.com</label>
              </div>
              <div className="flex justify-start items-center text-[9px] md:text-2xl gap-1 my-1 md:my-5">
                <div className="bg-BgBtn p-1 md:p-3 rounded-full">
                  <MdPhoneAndroid className="text-white text-sm md:text-3xl " />
                </div>
                <label>+855 96 920 3039</label>
              </div>
            </div>

            <div className="hidden md:block" data-aos="zoom-in">
              <div className=" flex justify-start items-center gap-5 my-5  ">
                <a
                  href="https://www.facebook.com/profile.php?id=100004168814640"
                  title="facebook"
                  target="blank"
                >
                  <div className=" bg-[#3B5998] p-3 rounded-full hover:scale-105 transition duration-300 cursor-pointer">
                    <FaFacebook className="text-2xl text-white" />
                  </div>
                </a>
                <a
                  href="https://web.telegram.org/a/"
                  title="telgram"
                  target="blank"
                >
                  <div className=" bg-[#0088cc] p-3 rounded-full hover:scale-105 transition duration-300  cursor-pointer">
                    <FaTelegram className="text-2xl text-white" />
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@sorpheavimean3087/videos"
                  title="youtube"
                  target="blank"
                >
                  <div className=" bg-[#bb0000] p-3 rounded-full hover:scale-105 transition duration-300 cursor-pointer">
                    <FaYoutube className="text-2xl text-white" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/sorpheavimean/"
                  title="instagram"
                  target="blank"
                >
                  <div className=" bg-[#405DE6] p-3 rounded-full hover:scale-105 transition duration-300 cursor-pointer">
                    <FaInstagram className="text-2xl text-white" />
                  </div>
                </a>
              </div>
            </div>

            <a
            href={CV}
            // download={CV}
              type="button"
              className="button w-[100px] md:w-[170px] h-[30px] md:h-[40px] border-dedede  "
              data-aos="zoom-in"
            >
              <span className="button__text text-[10px]">Download CV</span>
              <span className="button__icon translate-x-40 md:translate-x-28 w-40 md:w-20 hover:w-[95px] md:hover:w-[170px]">
                <svg
                  className="svg w-3 md:w-[20px]"
                  data-name="Layer 2"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  viewBox="0 0 35 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="m-10 md:m-20">
        {/* About Me */}
        <div
          ref={sectionAbout}
          className="text-center text-3xl font-bold py-5"
          data-aos="zoom-in"
        >
          <br />
          <br />
          ABOUT ME
        </div>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 ">
            <div className="col-span-2 ">
              <div className="text-justify text-xl " data-aos="zoom-in-left">
                Hi! my name's{" "}
                <b className="text-BgBtnHover text-2xl">Sorphea Vimean</b>. As a
                student specializing in both International Relations and
                Management InformationSystems (MIS), I have cultivated a strong
                passion for technology and a keen interest inresearch. Moreover,
                I'm good at communication and problem-solving skills, which
                areintegral to the field of Web development in technology. My
                ability to listen attentivelyallows me to effectively connect
                with individuals and understand their needs, aligningperfectly
                with the dynamic demands of today's society.
              </div>
              <Tabs className="mt-5" value="Educations">
                <TabsHeader className="text-text z-0" data-aos="zoom-in">
                  {/* {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))} */}
                  <Tab value="Educations">Educations</Tab>
                  <Tab value="aboutMe">About Me</Tab>
                  <Tab value="skills">Skills</Tab>
                </TabsHeader>
                <TabsBody
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  <TabPanel
                    className="text-text items-center"
                    value="Educations"
                  >
                    {/* <!-------------- Education -------------------->  */}

                    <div class="grid grid-cols-1 md:grid-cols-2 ">
                      <div class=" flex  gap-5" data-aos="fade-up">
                        <div className="flex flex-col justify-center items-center">
                          {" "}
                          <div className=" bg-blue-700 rounded-full p-5">
                            <FaGraduationCap className="text-4xl " />
                          </div>
                          <div className="w-2 bg-blue-700 h-40 rounded-b-2xl"></div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5">
                          <span className="text-xl bg-BgBtnHover px-8 py-1 rounded-full">
                            2023
                          </span>
                          <h3 className="text-xl">UNIVERSITY OF CAMBODIA</h3>
                          <p className="text-lg">International Relation (IR)</p>
                          <p className="text-md">Finished 2023</p>
                        </div>
                      </div>
                      <div class=" flex  gap-5" data-aos="fade-up">
                        <div className="flex flex-col justify-center items-center">
                          {" "}
                          <div className=" bg-blue-700 rounded-full p-5">
                            <FaGraduationCap className="text-4xl " />
                          </div>
                          <div className="w-2 bg-blue-700 h-40 rounded-b-2xl"></div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5">
                          <span className="text-xl bg-BgBtnHover px-8 py-1 rounded-full">
                            2023-2024
                          </span>
                          <h3 className="text-xl">SETEC INSTITUTE</h3>
                          <p className="text-lg">
                            Management Information System (MIS)
                          </p>
                          <p className="text-md">
                            {" "}
                            Year 3 (In progress) 2023-2024
                          </p>
                        </div>
                      </div>
                      <div class=" flex  gap-5" data-aos="fade-up">
                        <div className="flex flex-col justify-center items-center">
                          {" "}
                          <div className=" bg-blue-700 rounded-full p-5">
                            <FaGraduationCap className="text-4xl " />
                          </div>
                          <div className="w-2 bg-blue-700 h-40 rounded-b-2xl"></div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5">
                          <span className="text-xl bg-BgBtnHover px-8 py-1 rounded-full">
                            2019-2022
                          </span>
                          <h3 className="text-xl">ESIA EURO UNIVERSITY</h3>
                          <p className="text-lg">Computer Science</p>
                          <p className="text-md"> 2019-2022</p>
                        </div>
                      </div>
                      <div class=" flex  gap-5" data-aos="fade-up">
                        <div className="flex flex-col justify-center items-center">
                          {" "}
                          <div className=" bg-blue-700 rounded-full p-5">
                            <FaGraduationCap className="text-4xl " />
                          </div>
                          <div className="w-2 bg-blue-700 h-40 rounded-b-2xl"></div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5">
                          <span className="text-xl bg-BgBtnHover px-8 py-1 rounded-full">
                            2018
                          </span>
                          <h3 className="text-xl">CHOM PO VONG HIGH SCHOOL</h3>
                          <p className="text-lg">International Relation (IR)</p>
                          <p className="text-md">Finished 2018</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  {/* ----------------------About Me---------------------- */}
                  <TabPanel className="text-text items-center" value="aboutMe">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3  ">
                      <div className=" bg-BgBtn p-5 rounded-lg shadow-2xl ">
                        <div className="text-center text-2xl mb-3">
                          PERSONAL SKILLS
                        </div>
                        <ul className="flex flex-col gap-5">
                          <li className=" flex justify-start items-center gap-5">
                            <FaPeopleGroup className="text-xl" />
                            <p> communication</p>
                          </li>
                          <li className=" flex justify-start items-center gap-5">
                            <FaBook className="text-xl" />
                            <p> Quick Learner</p>
                          </li>
                          <li className=" flex justify-start items-center gap-5">
                            <FaEarListen className="text-xl" />
                            <p> Good listener</p>
                          </li>
                          <li className=" flex justify-start items-center gap-5">
                            <MdReportProblem className="text-xl" />
                            <p> Problem-solving</p>
                          </li>
                        </ul>
                      </div>
                      <div className=" bg-BgBtn p-5 rounded-lg shadow-2xl ">
                        <div className="text-center text-2xl mb-3">
                          Sorphea Vimean
                        </div>
                        <ul className="flex flex-col gap-5">
                          <li className=" flex justify-start items-center gap-5">
                            <FaLocationDot className="text-xl" />
                            <p> Prey Tae, Chom Chao, Phnom Penh</p>
                          </li>
                          <li className=" flex justify-start items-center gap-5">
                            <MdEmail className="text-xl" />
                            <p> sorphea.vimean@gmail.com</p>
                          </li>
                          <li className=" flex justify-start items-center gap-5">
                            <MdPhoneAndroid className="text-xl" />
                            <p> +855 96 920 3039</p>
                          </li>
                        </ul>
                      </div>

                      <div className=" bg-BgBtn p-5 rounded-lg shadow-2xl ">
                        <div className="text-center text-2xl mb-3">HOBBIES</div>
                        <ul className="flex flex-col gap-5">
                          <li className=" flex justify-start items-center gap-5">
                            <FaSearchPlus className="text-xl" />
                            <p> Research</p>
                          </li>
                          <li className=" flex justify-start items-center gap-5">
                            <MdOutlineSportsSoccer className="text-xl" />
                            <p> play sport and music</p>
                          </li>
                          <li className=" flex justify-start items-center gap-5">
                            <BiSolidMoviePlay className="text-xl" />
                            <p> Movie</p>
                          </li>
                        </ul>
                      </div>
                      <div className=" bg-BgBtn p-5 rounded-lg shadow-2xl ">
                        <div className="text-center text-2xl mb-3">
                          LANGUAGE
                        </div>
                        <ul className="flex flex-col gap-5">
                          <li className=" flex justify-start items-center gap-5">
                            <RiEnglishInput className="text-xl" />
                            <p> English (good)</p>
                          </li>
                          <li className=" flex justify-start items-center gap-5">
                            <IoLanguageOutline className="text-xl" />
                            <p> China (little)</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  {/* ----------------------Skills---------------------- */}

                  <TabPanel
                    className=" flex justify-center items-center "
                    value="skills"
                  >
                    <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-20 md:grid-cols-2 lg:grid-cols-3 ">
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={node}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={react}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={laravel}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={php}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={html}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={tailwind}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={after}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={premier}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={mt}
                          alt="skills"
                        />
                      </div>
                      <div className="w-36 md:w-56">
                        <img
                          className="h-full w-full max-w-full rounded-lg object-cover object-center"
                          src={ant}
                          alt="skills"
                        />
                      </div>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </div>
            <div
              className="flex justify-center items-start"
              data-aos="fade-down"
            >
              <img src={stand} alt="profile" />
            </div>
          </div>
        </section>

        {/* Experience */}
        <div
          ref={sectionExper}
          className="text-center text-3xl font-bold py-5 my-10"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
        >
          <br />
          <br />
          Experiences
        </div>
        <section>
          {/* <div className="text-center text-3xl font-bold py-5">Experiences</div> */}
          <Timeline>
            <TimelineItem
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-4">
                  <FaGraduationCap className="h-5 w-5" />
                </TimelineIcon>
                <Typography variant="h5" className="text-text font-bold">
                  QUALITY ASSURANCE <br />
                  User Acceptance Testing (UAT)
                  <br />
                  Sathapana Bank <br />
                  <span className="text-black">(01-08-2023 - 01-01-2024)</span>
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  color="gary"
                  className="font-normal text-text opacity-60"
                >
                  <ul className="list-disc">
                    <li>
                      2024contribute to the creation and execution of
                      comprehensive test cases
                    </li>
                    <li>
                      Extensive experience in testing across diverse platforms
                      such as MobileApplications, Web Systems, and Automated
                      Teller Machines (ATMs).
                    </li>
                    <li>
                      Extensive experience with Core Banking
                      SystemTailwindComputer
                    </li>
                  </ul>
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-4">
                  <FaGraduationCap className="h-5 w-5" />
                </TimelineIcon>
                <Typography variant="h5" className="text-text font-bold">
                  TEACHER <br />
                  English Academy School
                  <br />
                  <span className="text-black">(2018 - 01-01-2021)</span>
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  color="gary"
                  className="font-normal text-text opacity-60"
                >
                  <ul className="list-disc">
                    <li>
                      Taught English to both teenagers and adults, creating an
                      interactive andvibrant learning atmosphere.
                    </li>
                    <li>
                      Joint multiple training sessions, working closely with
                      colleagues to improve teaching methods and student
                      results.
                    </li>
                    <li>
                      Worked closely with the IT support team to integrate
                      technology into lessons.
                    </li>
                  </ul>
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-4">
                  <FaGraduationCap className="h-5 w-5" />
                </TimelineIcon>
                <Typography variant="h5" className="text-text font-bold">
                  Technical support <br />
                  Youth Resource Development Program
                  <br />
                  <span className="text-black">(2017)</span>
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  color="gary"
                  className="font-normal text-text opacity-60"
                >
                  <ul className="list-disc">
                    <li>
                      Collaborated with IT support to enhance operational
                      efficiency.
                    </li>
                    <li>Assisted in advertising efforts.</li>
                  </ul>
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </section>

        {/* Project */}
        <div
          ref={sectionProject}
          className="text-center text-3xl font-bold py-5 my-10"
          data-aos="fade-in"
          data-aos-anchor-placement="top-bottom"
        >
          <br />
          <br /> Own Projects
        </div>
        <section>
          {/* <div className="text-center text-3xl font-bold py-5" id="home">
          Own Projects
        </div> */}
          <div className="flex flex-wrap justify-around items-center gap-10">
            <Link
              to={"/ecommerce"}
              data-aos="zoom-out"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card">
                <img
                  className="w-full h-full  object-fill"
                  src={e1}
                  alt="ecommcerce"
                />
                <div className="card__content">
                  <p className="card__title">Ecommerce Project</p>
                  <p className="card__description">
                    This entire eCommerce project with all features using
                    React.js for the frontend and Node.js for the backend as an
                    API involves several components and features.{" "}
                    <span className="text-blue-600">
                      (Click to view details)
                    </span>
                  </p>
                  <div className="flex justify-around items-center">
                    <img className="w-20" src={react} alt="react" />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"/node"}
              data-aos="zoom-out"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card">
                <img
                  className="w-full h-full  object-fill"
                  src={n1}
                  alt="ecommcerce"
                />
                <div className="card__content">
                  <p className="card__title">Node Ecommerce API</p>
                  <p className="card__description">
                    This is a node project that use to create API with Express
                    and support all feactures of Ecommerce website
                    <span className="text-blue-600">
                      (Click to view details)
                    </span>
                  </p>
                  <div className="flex justify-around items-center">
                    <img className="w-28" src={express} alt="react" />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"/spotify"}
              data-aos="zoom-out"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card">
                <img
                  className=" image w-full h-full  object-fill"
                  src={s1}
                  alt="ecommcerce"
                />
                <div className="card__content">
                  <p className="card__title">Spotify Clone</p>
                  <p className="card__description">
                    This is a Spotify Clone project that use React JS to build
                    user interface{" "}
                    <span className="text-blue-600">
                      (Click to view details)
                    </span>
                  </p>
                  <div className="flex justify-around items-center">
                    <img className="w-20" src={react} alt="react" />
                    <img className="w-20" src={node} alt="react" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* get in touch */}
        <div
          ref={sectionContact}
          className="text-center text-3xl font-bold py-5 my-10"
          data-aos="fade-in"
        >
          {" "}
          Context Me
        </div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-text rounded-xl shadow-[1px_-2px_9px_9px_#00000024]"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="text-black p-5 text-center text-2xl font-bold">
                Contact Me
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col items-center gap-7 p-5"
              >
                <Input
                  type="text"
                  color="teal"
                  label="Your Name"
                  name="from_name"
                />
                <Input
                  type="email"
                  color="teal"
                  label="Your Email"
                  name="from_email"
                />
                <Textarea color="green" label="Your message" name="message" />
                <button
                  className="text-black self-start p-5 hover:translate-y-[-3px] hover:shadow-[13px_9px_9px_0px_#00000024] transform duration-300"
                  type="submit"
                >
                  Send message →
                </button>
              </form>
            </div>

            <div
              className="bg-text rounded-xl shadow-[1px_-2px_9px_9px_#00000024]"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="text-black p-5 text-center text-2xl font-bold">
                Location
              </div>
              <div className=" overflow-hidden">
                <iframe
                  className=""
                  title="google"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7735341830667!2d104.89253745069675!3d11.568086091746942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095173761d4a53%3A0xcd09ff2f4d326e3f!2sSETEC%20Institute!5e0!3m2!1sen!2skh!4v1616165094843!5m2!1sen!2skh"
                  width="900"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <MessengerCustomerChat
    pageId="61557052614254"
    appId="633846918878953"
  />
    </div>
  );
};

export default HomePage;

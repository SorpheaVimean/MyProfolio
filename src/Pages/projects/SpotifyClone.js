import React, { useState } from "react";
import s1 from "../../image/spotify/Spotify1.png";
import s2 from "../../image/spotify/Spotify2.png";
import s3 from "../../image/spotify/Spotify3.png";
import { FaGithub } from "react-icons/fa";
const SpotifyClone = () => {
  const [active, setActive] = useState(s1);
  const data = [
    {
      imgelink: s1,
    },
    {
      imgelink: s2,
    },
    {
      imgelink: s3,
    },
  ];
  return (
    <div className="m-10 md:m-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 ">
        <div className="flex flex-col justify-center items-center gap-10 mt-5   ">
          <div className="flex justify-center">
            <img
              className="h-full w-full max-w-full rounded-lg object-cover object-center  "
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-5">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                  alt="gallery"
                />
              </div>
            ))}
          </div>
        </div>
        {/* <video className="h-full w-full rounded-lg mt-[-40px]" controls autoPlay>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
      </div>
      <div className="text-white">
        <p className="text-2xl mb-5 font-extrabold">PROJECT DETAIL</p>
        <div className="">
          <a href="https://github.com/SorpheaVimean/Spotifyclone01" target="blank" > view code
            <FaGithub className="text-5xl  hover:scale-105 hover:text-black" />
          </a>
          <ul className="list-disc space-y-6">
            <li>
              <b>HomePage Clone: </b>Clone landing page of spotiofy 
            </li>
            <li>
              <b>Login Clone: </b>Clone login Page of Spotify
            </li>
            <li>
              <b>SignUp Clone: </b>Clone signUp page of Spotify
            </li>
            
            <li>
              <b>Responsive Design: </b>The spotify site is responsive and works seamlessly across devices and screen sizes, ensuring a consistent user experience whether users access the site from a
              desktop, tablet, or smartphone.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpotifyClone;

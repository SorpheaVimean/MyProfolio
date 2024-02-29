import React, { useEffect, useState } from "react";
import e1 from "../../image/ecommerce/Ecommerce1.png";
import e2 from "../../image/ecommerce/Ecommerce2.png";
import e3 from "../../image/ecommerce/Ecommerce3.png";
import e4 from "../../image/ecommerce/Ecommerce4.png";
import e5 from "../../image/ecommerce/Ecommerce5.png";
import e6 from "../../image/ecommerce/Ecommerce6.png";
import e7 from "../../image/ecommerce/Ecommerce7.png";
import e8 from "../../image/ecommerce/Ecommerce8.png";
import video from "../../videos/Ecommerce.mp4";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file for styling
const EcomerceProject = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  const data = [
    {
      imgelink: e1,
    },
    {
      imgelink: e2,
    },
    {
      imgelink: e3,
    },
    {
      imgelink: e4,
    },
    {
      imgelink: e5,
    },
    {
      imgelink: e6,
    },
    {
      imgelink: e7,
    },
    {
      imgelink: e8,
    },
  ];
  const [active, setActive] = useState(e1);
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
          <div
            className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-5"
            data-aos="fade-right"
          >
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
        <video
          className="h-full w-full rounded-lg mt-[-40px]"
          controls
          autoPlay
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-white">
        <p className="text-2xl mb-5 font-extrabold" >
          PROJECT DETAIL
        </p>
        <div className="">
          <a href="https://github.com/SorpheaVimean/NodeAPI" target="blank">
            view code
            <FaGithub className="text-5xl  hover:scale-105 hover:text-black" />
          </a>
          <ul className="list-disc space-y-6">
            <li>
              <b>library: </b> tailwind, AntDesign, axios, react-dom,
              react-google-charts, react-icon, react-quill, moment
            </li>
            <li>
              <b>Integration with API: </b>All products, user, are integration
              with api that builded with node js
            </li>
            <li>

              <b>User Authentication:</b> Users can create accounts, log in, and
              log out securely. User can access certain features like placing
              orders, viewing order history, etc.
            </li>
            <li>
              <b>Product Management:</b>As an admin, you can add, edit, and
              delete products from the inventory. Each product can have
              attributes such as name, description, price, images, and
              categories.
            </li>

            <li>
              <b>Product Search and Filtering:</b> Users can search for products
              using keywords and filter them based on categories, price range,
              brand, etc. This helps users find products quickly based on their
              preferences.
            </li>
            <li>
              <b>Product Catalog:</b> The eCommerce site displays a catalog of
              available products, showcasing product images, descriptions,
              prices, and other relevant information.
            </li>

            <li>
              <b>Shopping Cart:</b> Users can add products to their shopping
              cart, view the items in their cart, update quantities, and remove
              items if needed. The shopping cart keeps track of the total price
              of the items added.
            </li>
            <li>
              <b>Checkout Process:</b> Users can proceed to checkout, enter
              shipping and billing information, and select a payment method. The
              checkout process guides users through the steps required to
              complete their purchase securely.
            </li>
            <li>
              <b>Order Management: </b> Admins can view and manage orders placed
              by users, including order status, shipping details, payment
              status, etc. Users can also view their order history and track the
              status of their orders.
            </li>
            <li>
              <b>Responsive Design: </b>The eCommerce site is responsive and
              works seamlessly across devices and screen sizes, ensuring a
              consistent user experience whether users access the site from a
              desktop, tablet, or smartphone.
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EcomerceProject;

import React, { useState } from "react";
import n1 from "../../image/node/Node1.png";
import n2 from "../../image/node/Node2.png";
import n3 from "../../image/node/Node3.png";
import n4 from "../../image/node/Node4.png";

import { FaGithub } from "react-icons/fa";
const NodeProject = () => {
  const [active, setActive] = useState(n1);
  const data = [
    {
      imgelink: n1,
    },
    {
      imgelink: n2,
    },
    {
      imgelink: n3,
    },
    {
      imgelink: n4,
    },
  ];
  return (
    <div className="m-10 md:m-20">

        <div className="flex flex-col justify-center items-center gap-10 mt-5   ">
          <div className="flex justify-center">
            <img
              className="h-full w-full max-w-full rounded-lg object-cover object-center  "
              src={active}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-5 ">
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
        
      </div>
      <div className="text-white">
        <p className="text-2xl mb-5 font-extrabold">PROJECT DETAIL</p>
        <div className="">
          <a href="https://github.com/SorpheaVimean/Spotifyclone01" target="blank" > view code
            <FaGithub className="text-5xl  hover:scale-105 hover:text-black" />
          </a>
          <ul className="list-disc space-y-6">
            <li>
              <b>library: </b> bcrypt, cors, express, jsonwebtoken, multer, mysql, modemon
            </li>
            <li>
              <b>MySQL Database Integration: </b>{" "}
            </li>
            <li>
              <b>Authentication using JWT: </b>{" "}
            </li>
            <li>
              {" "}
              <b>User Registration:</b> Verify user credentials against the stored hashed password in the MySQL database. Generate JWT tokens upon successful authentication.
            </li>
            <li>
              <b>JWT Generation:</b> Use a JWT library (like jsonwebtoken) to generate tokens containing user information.
            </li>
            <li>
              <b>Token Verification:</b> Decode and verify JWT tokens using the secret key to ensure authenticity.Implement middleware to validate JWT tokens for protected routes.
            </li>
            <li>
              <b>Authorization:</b> Query the MySQL database to retrieve user roles or permissions encoded in the JWT payload. Authorize user access based on their privileges.
            </li>
            <li>
              <b>Token Expiration:</b> Set expiration times for JWT tokens to enhance security. Implement token refresh mechanism if needed.
            </li>
            <li>
              <b></b> 
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
              <b>Product Catalog:</b> The API   a catalog of
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
    </div>
  );
};

export default NodeProject;

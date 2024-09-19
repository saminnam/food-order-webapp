import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Header = () => {
  return (
    <>
    
      <div className="header">
        <div className="header_content">
          <h2>Choose your favourite resturant here</h2>
          <p className="text-dark">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest and culinary expertise. Our mission is to
            satisfy your cravings and elevate your dining experience, one
            delicious meal at a time.
          </p>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose Resturants
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item active" href="#">
                  Fit Foodie Finds
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Buhari
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Bilal
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Anandha Bhavan
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Vasantha Bhavan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

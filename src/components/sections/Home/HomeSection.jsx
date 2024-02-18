import React from "react";
import "./home-section.css";
import Background from "../../../Images/background.jpg"
const HomeSection = () => {
  return (
    <section className="py-3 mt-3">
      <div className="container">
        <div className="home-box d-flex align-items-center">
          <div style={{marginLeft: "4rem"}} className="w-50 d-flex h-100 flex-column justify-content-center">
              <h1 className="title">Studentlarga yordam beradigan site</h1>
              <p className="parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                reiciendis odit architecto exercitationem eum quis fugiat facere
                natus, ipsum cupiditate?
              </p>
              <button style={{width: "230px" , height: "50px"}} className="btn btn-primary">Az'o bo'lish</button>
          </div>
          <div>
            <img style={{width:" 530px" , height: "530px" , borderRadius: "10px"}} src={Background} alt="background" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

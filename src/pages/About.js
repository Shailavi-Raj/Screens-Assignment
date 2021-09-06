import React from "react";
import Aboutbar from "../components/Aboutbar";
import AboutSide from "../components/AboutSide";
import pic from "../components/blog.jpg";
import "../pages/About.css";

function About() {
  return (
    <div className="about">
      <Aboutbar />
      <AboutSide />
      <div className="image-conatiner">
        <img src={pic} alt="user" />
      </div>
      <div className="paragraph">
        <h3>
          <li>
            {" "}
            Coronavirus Disease (COVID-19) is an Infectious disease infections
            disease by newly discovered coronavirus.
          </li>{" "}
          <li>
            {" "}
            Most of the people who fall sick with Covid-19 will experience mild
            to moderate symptoms & recover without special treatment. Common
            sign of infection include respiratory symptoms fever, cough, and
            shortness of breath and breathing difficulties.
          </li>
          <li>
            {" "}
            Vaccine can help to fight against the corona virus. It’s mandatory
            for everyone to take vaccine of 1st and 2nd dose. In respect of the
            vaccine doses provided free of cost by the Government of India to
            the States, the Centre said that the vaccination will be prioritised
            as the following-Health Care Workers, Front Line Workers, Citizens
            more than 45 years of age, Citizens whose second dose has become due
            and Citizens 18 years and above.
          </li>
          <li>
            {" "}
            So kindly visit our website to book the slot for vaccination in your
            area or our website is so friendly or easy to use. Our website give
            you a fast service or book slot easily any time you want to get
            vaccinated.
          </li>
        </h3>
      </div>
    </div>
  );
}

export default About;

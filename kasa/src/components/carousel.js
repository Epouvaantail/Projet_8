import React, { useState, useEffect } from "react";
import "../style/main.css";
import ArrowLeft from"../assets/images/ArrowLeft.svg";
import ArrowRight from "../assets/images/ArrowRight.svg";

const Carousel = (images) => {
    const [counter, setCounter] = useState(0);
    const pictures = images.images;
    const slideLength =  pictures.length;

    let currentPicture;
    currentPicture = pictures[counter];

    const slideLeft = () => {
        setCounter((counter - 1 + slideLength) % slideLength);
      };
    
      const slideRight = () => {
        setCounter((counter + 1) % slideLength);
      };

      useEffect(() => {
        if (pictures.length===1) {
          document.querySelector(".arrow__left").remove(".arrow__left");
          document.querySelector(".arrow__right").remove(".arrow__");
          document.querySelector(".number").remove(".number");
        }
      })
      
    return (
        <div className="carousel">
            <div className="carousel__container">
                <img onClick={slideLeft} className="arrow__left" src={ArrowLeft} alt="arrow left"/>
                <img className="carousel__img" src={currentPicture} alt="chambre"/>
		        <img onClick={slideRight} className="arrow__right" src={ArrowRight} alt="arrow right"/>
            </div>
            <p className="number"> {counter +1}/{slideLength}  </p>
	    </div>
    );
};


export default Carousel
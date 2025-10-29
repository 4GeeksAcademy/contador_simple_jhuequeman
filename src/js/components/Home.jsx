import React from "react";
import Digital from "./Digital";
import { use } from 'react';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [count, setCount] = useState(0);


    
    useEffect(() => {
      const interval =  setTimeout(() => {
        setCount(counter => counter + 1);
        }, 1000);
            }, [count]);

    console.log(count);
    

	return (
        <div className="six-digit-counter"> {/* <--- ¡Añade esta clase! */}
          <Digital count = {<FontAwesomeIcon icon={faClock} />} />
          <Digital count = {Math.floor(count /100000) %10} />
          <Digital count = {Math.floor(count /10000) %10} />
          <Digital count = {Math.floor(count /1000) %10} />
          <Digital count = {Math.floor(count /100) %10} />
          <Digital count = {Math.floor(count /10) %10} />
          <Digital count = {Math.floor(count %10)} />
        </div>
		
	);
};

export default Home;
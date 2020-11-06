import React,{useState} from 'react';
import Navbar from "../Navbar";
import Sidebar from '../Sidebar';
import {HeroH1,HeroP,HeroBtn,HeroContainer,HeroContent,HeroItems} from "./HeroElements";

function Hero() {
     
    const [isOpen, setIsOpen]= useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>   
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

'use client'
import { useRef } from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {
    return(
        <div className="bg-amber-900 text-white w-full fixed z-50">
            <div className="container md:grid md:grid-cols-2 mx-auto flex flex-col">
                <img src="img/dunder-logo.png" className="w-24 flex self-center"/>
                
                <ul className="container md:grid md:grid-cols-3 md:items-center p-3 flex justify-around">
                    <li className="hover:underline">
                        <a href="#home">Inicio</a>
                    </li>
                    <li className="hover:underline">
                        <a href="#about">Sobre</a>
                    </li>
                    <li className="hover:underline">
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
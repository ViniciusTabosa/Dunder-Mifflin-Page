import React from 'react';
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { NavMenu } from "@/components/NavMenu";
import { News } from "@/components/News";

export default function Home() {
  return (
    
      <div className=" bg-white text-black mx-auto">
        <NavMenu/>
        
        <About/>
        <Contact/>
        
      </div>

    
  );
}

"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import ToggleSidebar from "@/components/ToggleSidebar";
import Field from "@/components/Field";
import Code from "@/components/Code";

import { CodeType } from "@/utils/types";

const Home = () => {

  const [ code, setCode ] = useState<CodeType>( 0 )
  const [ displaySidebar, setDisplaySidebar ] = useState( false )

  const toggleSidebar = () => setDisplaySidebar( !displaySidebar )
  
  return (
    <div className="flex-grow xl:flex xl:items-stretch">
      <ToggleSidebar handleClick={ toggleSidebar } />
      <Sidebar display={ displaySidebar } handleClick={ toggleSidebar } />
      <div className="xl:flex-grow flex flex-col justify-center items-center my-8 xl:my-0">
        <div>
          <Field updateCode={ setCode } />
        </div>
        <div className="mt-10 xl:mt-20">
          <Code code={ code } />
        </div>
      </div>
    </div>
  );
}

export default Home
"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Field from "@/components/Field";
import Code from "@/components/Code";

import { CodeType } from "@/utils/types";

const Home = () => {

  const [ code, setCode ] = useState<CodeType>( 1 )
  
  return (
    <div className="flex-grow xl:flex xl:items-stretch">
      <Sidebar />
      <div className="xl:flex-grow flex flex-col justify-center xl:items-center my-8 xl:my-0">
        <div>
          <Field updateCode={ setCode } />
        </div>
        <div>
          <Code code={ code } />
        </div>
      </div>
    </div>
  );
}

export default Home
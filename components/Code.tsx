"use client";

import { v4 as uuidv4 } from "uuid";
import Square from "./Square";

import { CodeType } from "@/utils/types";

type CodeFCType = {
  code: CodeType;
}

const Code = ( { code }: CodeFCType ) => {

  const digits = code.toString().split("").reverse()
  
  return (
    <div className="relative w-80 h-96">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bottom-0 z-20 w-3 bg-slate-700 rounded-full"></div>
      {
        digits.map( ( digit, index ) => <Square key={ uuidv4() } number={ digit } order={ index } /> )
      }
    </div>
  )
}

export default Code
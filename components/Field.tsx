"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { CodeType } from "@/utils/types";

type FieldType = {
  updateCode: ( code: CodeType ) => void;
}

const Field = ( { updateCode }: FieldType ) => {

  const [ value, setValue ] = useState<CodeType|string>( 0 )

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const newValue = e.target.value
    const newIntValue = parseInt( newValue )
    
    if ( isNaN( newIntValue ) ) {
      setValue( newValue )
    } else {
      if ( newIntValue >= 0 && newIntValue <= 9999 ) {
        setValue( newIntValue )
        updateCode( newIntValue )
      }
    }
  }

  const handlePlusClick = () => {
    let newValue: number = 1

    if ( typeof value !== "string" ) newValue = value + 1
      
    if ( newValue <= 9999 ) {
      setValue( newValue )
      updateCode( newValue )
    }
  }

  const handleMinusClick = () => {
    let newValue: number = 9999

    if ( typeof value !== "string" ) newValue = value - 1

    if ( newValue >= 0 ) {
      setValue( newValue )
      updateCode( newValue )
    }
  }
  
  return (  
    <div className="relative h-20 w-60">
      <input
        className="absolute z-0 h-full w-full pl-4 pr-10 text-4xl text-center font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none"
        type="number"
        min={ 1 }
        max={ 9999 }
        step={ 1 }
        value={ value.toString() }
        onChange={ handleChange }
      />
      <button
        className="absolute z-10 top-0 right-0 h-10 w-10 flex justify-center items-center bg-slate-700 transition duration-300 hover:bg-slate-600"
        onClick={ handlePlusClick }
      >
        <Plus strokeWidth={ 1.5 } stroke="#FFF" />
      </button>
      <button
        className="absolute z-10 bottom-0 right-0 h-10 w-10 flex justify-center items-center bg-slate-500 transition duration-300 hover:bg-slate-400"
        onClick={ handleMinusClick }
      >
        <Minus strokeWidth={ 1.5 } stroke="#FFF" />
      </button>
    </div>
  )
}

export default Field
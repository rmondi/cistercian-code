"use client";

type SquareType = {
  number: string;
  order: number;
}

const Square = ( { number, order }: SquareType ) => {

  let scale: string = "none"

  switch( order ) {
    case 0:
      scale = "translateX(-6px)"
      break
    case 1:
      scale = "translateX(6px) scaleX(-1)"
      break
    case 2:
      scale = "translateX(-6px) scaleY(-1)"
      break
    case 3:
      scale = "translateX(6px) scale(-1, -1)"
      break
    default:
      scale = "none"
  } 
  
  return (
    <div
      className="absolute w-40 h-40 flex justify-center items-center"
      style={
        {
          top: ( order === 0 || order === 1 ) ? "0" : "auto",
          right: ( order === 0 || order === 2 ) ? "0" : "auto",
          bottom: ( order === 2 || order === 3 ) ? "0": "auto",
          left: ( order === 1 || order === 3 ) ? "0" : "auto",
          transform: scale
        }
      }
    >
      {
        /** Top */
        ( number === "1" || number === "5" || number === "7" || number === "9" ) &&
        <div className="absolute top-0 right-0 left-0 h-3 bg-slate-700 rounded-full"></div>
      }
      {
        /** right */
        ( number === "6" || number === "7" || number === "8" || number === "9" ) &&
        <div className="absolute top-0 right-0 bottom-0 w-3 bg-slate-700 rounded-full"></div>
      }
      {
        /** bottom */
        ( number === "2" || number === "8" || number === "9" ) &&
        <div className="absolute bottom-0 right-0 left-0 h-3 bg-slate-700 rounded-full"></div>
      }
      { /** Left */ }
      <div className="absolute top-0 bottom-0 left-0 w-3 bg-slate-700 rounded-full"></div>
      {
        /** Diag A to C */
        ( number === "3" ) &&
        <div className="absolute top-1/2 left-1/2 h-3 w-diagXL origin-center -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-700 rounded-full"></div>
      }
      {
        /** Diag B to D */
        ( number === "4" || number === "5" ) &&
        <div className="absolute top-1/2 left-1/2 h-3 w-diagXL origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-slate-700 rounded-full"></div>
      }
    </div>
  )
}

export default Square
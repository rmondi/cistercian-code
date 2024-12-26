"use client";

import { CodeType } from "@/utils/types";

type CodeFCType = {
  code: CodeType;
}

const Code = ( { code }: CodeFCType ) => {
  
  return (
    <div>{ code }</div>
  )
}

export default Code
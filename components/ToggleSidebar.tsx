"use client";

import { Menu } from "lucide-react";

type ToggleSidebarType = {
  handleClick: () => void;
}

const ToggleSidebar = ( { handleClick }: ToggleSidebarType ) => {
  
  return (
    <button
      className="xl:hidden fixed top-1 left-4 h-10 w-10 transition duration-300 hover:opacity-70"
      onClick={ handleClick }
    >
      <Menu className="stroke-slate-600" />
    </button>
  )
}

export default ToggleSidebar
"use client";

import Link from "next/link";
import { X } from "lucide-react";

type SidebarType = {
  display: boolean;
  handleClick: () => void;
}

const Sidebar = ( { display, handleClick }: SidebarType ) => {
  
  return (
    <aside
      className={ `fixed xl:relative inset-0 z-50 min-h-40 xl:w-96 xl:h-auto bg-slate-200 transition duration-500 ${ display ? "translate-x-0" : "-translate-x-full" } xl:translate-x-0` } 
    >
      <div className="xl:hidden flex justify-end items-center p-1">
        <button
          className="w-10 h-10 transition duration-300 hover:opacity-70"
          onClick={ handleClick }
        >
          <X className="stroke-slate-600" />
        </button>
      </div>
      <div className="flex flex-col px-5 sm:px-8 py-4 sm:py-6 h-full">
        <h1 className="text-2xl font-semibold text-slate-700">
          Le système cistercien de notation numérique
        </h1>
        <p className="my-2">
          Le système cistercien de notation numérique est un système de numérotation développé au Moyen Âge par l'ordre cistercien, vers le 12ᵉ siècle. Ce système repose sur un principe géométrique : chaque chiffre (de 0 à 9) est représenté par un segment de ligne dans un carré divisé en quatre parties. Les segments sont placés de manière spécifique pour indiquer la valeur du chiffre.
        </p>
        <p className="my-2">
          Ce code permet de représenter des nombres allant de 0 à 9999. Les segments sont positionnés selon quatre zones dans la grille : les deux premières zones pour les dizaines (quart nord-ouest) et les unités (quart nord-est), et les deux suivantes pour les milliers (quart sud-ouest) et les centaines (quart sud-est). La position et l'orientation des segments permettent de distinguer chaque chiffre et ainsi de créer un nombre complet. Ce système était utilisé dans les monastères pour inscrire des nombres de façon concise, notamment sur des documents liturgiques et administratifs.
        </p>
        <p className="my-2">
          Voir la fiche <Link className="text-slate-500 transition duration-300 hover:text-slate-900 underline" href="https://fr.wikipedia.org/wiki/Syst%C3%A8me_cistercien_de_notation_num%C3%A9rique" target="_blank">Wikipedia</Link>
        </p>
        <p className="my-2">
          Voir la vidéo de <Link className="text-slate-500 transition duration-300 hover:text-slate-900 underline" href="https://www.youtube.com/watch?v=X7MekdlnfuM" target="_blank">Nota Bene</Link> sur Youtube
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/header";

export default function Home() {
  return (
    <main >
        <Header/>
  
        
        <div className="flex justify-center my-40">
          <Image 
          src ="/icon2.png"
          alt="react-icon" 
          width={250} height ={250}
          />
        </div>
        <div className="mx-40 my-40 text-center text-white">
        <h1 className="font-bold text-xl"> Crear interfaces de usuario a partir de componentes</h1>
        <h2>React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios componentes de React, como Thumbnail, LikeButton y Video. Luego, combínalos para formar pantallas, páginas y aplicaciones completas.</h2>
        </div>
        
    </main>
  );
}

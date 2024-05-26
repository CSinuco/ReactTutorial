import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/SideBar/sidebar";
import Header from "../components/Header/header";
import { Marvel } from "next/font/google";
export default function Home() {
  return (
    <main className=" ">
        
        <Header/>
        <div className="flex">
        <div>
            <div>
            <h1 className="flex justify-center mt-40 font-black text-5xl "  id= "Marvel Api"> Marvel api</h1>
            <h1 className="flex justify-center my-5 " >Marvel api fue una aproximacion general a lo que era react, la idea 
              era conectarnos a una API y generar un directorio de componentes de un heroe, 
              desplegando asi sus comics.</h1>  
            <h1 className="flex justify-center my-5">1. Componentes: Los componentes son piezas reutilizables de codigo que nos permiten
              crear partes accesibles desde cualquier parte de la pagina. 
              En este caso vimos Character, Comic, Search
            </h1>
            <h1 className="flex justify-center my-5"> En character tendriamos lo que seria la forma en que mostrariamos los personajes</h1>
            <Image className="flex justify-center " src= "/react-tutorial/app/Proyectos/Componentes.jpg" alt="Componentes" width={50} height={50}/>
            <h1 className="flex justify-center my-5"> En comic mostrariamos los comics relacionados al personaje</h1>
            <Image className="flex justify-center " src= "/react-tutorial/app/Proyectos/Componentes.jpg" alt="Componentes" width={50} height={50}/>
            <h1 className="flex justify-center my-5"> Search era donde haciamos la conexion y recibiamos los datos que ibamos a usar para cada busqueda</h1>
            <Image className="flex justify-center " src= "/react-tutorial/app/Proyectos/Componentes.jpg" alt="Componentes" width={50} height={50}/>
        </div>
        <div>
          <h1 className="flex justify-center mt-40 font-black text-5xl" id = "Calculadora"> Calculadora</h1>
          <h1 className="flex justify-center my-5"> Aca aprendimos mas especificamente lo que eran los hooks y su verdadera utilidad</h1>
        </div>
        <div>
        <h1 className="flex justify-center mt-40 font-black text-5xl" id = "Movie api"> Movie api</h1>
        <h1  className="flex justify-center my-5"> Una nueva conexion a otra api ahora de peliculas que tenia un boton de busqueda tambien </h1>
        </div>
        </div>
        <Sidebar data={["Marvel Api","Calculadora", "Movie api"]}/> 
        </div>
    </main>
  );
}

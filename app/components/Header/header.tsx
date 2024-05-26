import Link from "next/link"
export default function Header(){
    return(
        <nav className="flex flex-wrap justify-end text-5xl mx-20 space-x-60 place-items-end  ">    
            <Link href="/Proyectos" className="" >Proyectos </Link>
            <Link href="/Docs" className="" >Docs </Link>
            <Link href = "https://react.dev/" className="">Comunidad</Link> 

        </nav>
    )
}
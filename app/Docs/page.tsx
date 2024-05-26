import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/header";
import Sidebar from "../components/SideBar/sidebar";

export default function Docs() {
  return (
    <main className=" ">
        
        <Header/>
        
        <Sidebar data={[]}/> 
    </main>
  );
}

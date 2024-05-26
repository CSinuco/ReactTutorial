//typado de dato con interfaces
import Link from "next/link"
interface SidebarProps{
    data: string[]
}

//Pasar a arrow function 
 const Sidebar : React.FC <SidebarProps> = ({data}) =>{
    
    return(
        <div className="mt-20 mx-10 ">
            {data.map((dataItem) =>(
                <li className="list-none my-5" key= "dataItem"><Link href={"#"+dataItem}>{dataItem}</Link></li>
            ) )}
        </div>
    )
}
export default Sidebar;
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event(){
// constante para receber a slug
const { slug } = useParams<{slug:string}>() 

  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
    <main className="flex flex-1">
{/* Se slug existe mostra video, senao mostra vazio */}
      {slug 
      ? <Video lessonSlug={slug}/> 
      : <div className="flex-1"/>
      }
      <Sidebar/>
    </main>
    </div>

  )
}
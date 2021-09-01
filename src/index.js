import './styles.css'; 
import {navbar, navElement} from "./components /nav";
import {home, mainElement} from "./components /home"
import {menu, menuElement} from  "./components /menu"
import {con, conElement} from  "./components /contact"

const app = () => {
    navbar(function(e){
        if(e.target.id === "menu"){
            document.body.replaceChild(menu(),home(function(){
                document.body.replaceChild(con(),home())
            }))
            document.body.removeChild(con())
            
           } 
        else if(e.target.id === "home"){
            document.body.replaceChild(home(function(){
                document.body.replaceChild(con(),home())
            }),menu())
            document.body.removeChild(con())
        }  
        else if(e.target.id === "contact"){
            document.body.replaceChild(con(),home(function(){
                document.body.replaceChild(con(),home())
            }))
            document.body.removeChild(menu())
        } 
    })

    home(function(){
        document.body.replaceChild(con(),home())
    })
   
}

// init app
app()



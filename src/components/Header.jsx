
import NavBar from "./NavBar";
import "../css/main.css";



export const Header = () => {
        return (
        <div className="header">
        <NavBar />
            <div>
                <h1 className="main-title">Bienvenido a Aromas del Sur</h1>
                <p className="text-init">En Aromas del Sur, nos apasiona crear velas únicas y llenas de energía positiva. Cada vela está hecha a mano con amor y cuidado, utilizando ingredientes naturales y fragancias exquisitas. Nuestro objetivo es iluminar tus momentos especiales y crear un ambiente acogedor en tu hogar.</p>
            </div>
        </div>    
        )
}

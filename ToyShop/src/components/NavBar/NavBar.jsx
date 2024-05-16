import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartWidget from "../CartWidget/CartWidget "
import LikeWidget from "../LikeWidget/LikeWidget";
import Logout from "../Logout/Logout";
import PanelLogin from "../PanelLogin/PanelLogin";
import PanelRoot from "../PanelRoot/PanelRoot";
import PanelSettings from "../PanelSettings/PanelSettings";
import Toggle from "../Toggle/Toggle";
import UserWidget from "../UserWidget/UserWidget";
import UserWidgetActive from "../UserWidgetActive/UserWidgetActive";

//objetivo : crear el menú ecommerce de mi proyecto
const NavBar = ({ footerRef }) => {
    const [toggleState, setToggleState] = useState(false)
    const [renderLogin, setRenderLogin] = useState(null)
    const [renderPanelRoot, setRenderPanelRoot] = useState(null)
    const { panelRoot, login, user } = useCartContext()
    const [rootActiv, setUserRootAct] = useState(false)

    function handleClick() {
        setToggleState(toggleState => !toggleState);
    }

    const toggleClassCheck = toggleState ? 'active' : '';

    useEffect(() => {
        setRenderLogin(!login ? null : <PanelLogin />)
    },[login])

    useEffect(() => {
        setRenderPanelRoot(!panelRoot ? null : <PanelSettings /> )

    },[panelRoot])
    //mini panel para el admin

    useEffect(()=>{
        user == null ? setUserRootAct(false) : (user.email === "root@gmail.com" ? setUserRootAct(true) : setUserRootAct(false))
        
    },[]) 

    const handleContact = (e) => {
        e.preventDefault()
        footerRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest", });
    }

    return (
        <>
            <nav className={`navBar ${toggleClassCheck}`}>
                <section className="menuSuperior">
                    <section className="contenedorLogo">
                        <span>ToyShop</span>
                    </section>
                    <section className="menuAndCar">
                        <ul className="listMenu">
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>home</NavLink></li>
                            <li className="listConSubMenu">
                                <a>categoría
                                    <ion-icon name="chevron-down"></ion-icon>
                                </a>
                                <ul className="subMenuCategoria">
                                    <li><NavLink to='/categoria/funkopop' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>Funkos</NavLink></li>
                                    <li><NavLink to='/categoria/figura' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>Figuras</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink onClick={handleContact} to='/contacto' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>contacto</NavLink></li>
                        </ul>

                    </section>
                    <Toggle prop1={toggleClassCheck} func2={handleClick} />
                </section>
                <section className="subMenuPrincipal">
                    { rootActiv ? <PanelRoot /> : null}
                    { user == null ? null : <Logout />}
                    { user == null ? <UserWidget /> : <UserWidgetActive /> }
                    <LikeWidget />
                    <CartWidget />
                </section>

            </nav>
            {
                (panelRoot || login) ? (<div className="subPaneles">
                {renderPanelRoot}
                { user == null ? renderLogin : null} 
            </div>) : null
            }
            
        </>
    )
}

export default NavBar
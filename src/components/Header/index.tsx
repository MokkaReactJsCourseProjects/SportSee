//Imports
import { Link } from "react-router-dom";
import images from "../../assets/images";
import style from "./style.module.scss";
import Paths from "../../types/paths";
import PageLink from "./PageLink";

//Exports
export default function Header() {
    return (
        <header className={style.header}>
            <Link to={Paths.home} className={style.logo}>
                <img src={images.logo} alt={`Logo de SportSee`} />
            </Link>
            <nav>
                <PageLink path={Paths.home}>Accueil</PageLink>
                <PageLink path={Paths.profile}>Profil</PageLink>
                <PageLink path={Paths.settings}>Réglage</PageLink>
                <PageLink path={Paths.community}>Communauté</PageLink>
            </nav>
        </header>
    );
}

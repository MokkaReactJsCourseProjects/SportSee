//Imports
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { Image } from "../../../types/misc";

//Types
interface ActivityProps {
    icon: Image;
}

//Exports
export default function Activity({ icon }: ActivityProps) {
    return (
        <Link to={"/"} className={style.activity}>
            <img src={icon} className={style.icon} />
        </Link>
    );
}

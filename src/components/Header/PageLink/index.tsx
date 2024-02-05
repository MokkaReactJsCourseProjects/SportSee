//Imports
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { ReactNode } from "react";

//Types
interface PageLinkProps {
    path: string;
    children: ReactNode;
}

//Exports
export default function PageLink({ path, children }: PageLinkProps) {
    return (
        <Link to={path} className={style.link}>
            {children}
        </Link>
    );
}

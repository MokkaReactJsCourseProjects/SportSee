//Imports
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages";
import Header from "../Header";
import style from "./style.module.scss";

//Exports
export default function App() {
    return (
        <>
            <Header />
            <div className={style.content}>
                <Routes>
                    <Route index element={<HomePage />} />
                </Routes>
            </div>
        </>
    );
}

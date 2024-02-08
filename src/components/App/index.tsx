//Imports
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages";
import Header from "../Header";
import SideNav from "../SideNav";

//Exports
export default function App() {
    return (
        <>
            <Header />
            <SideNav />
            <Routes>
                <Route index element={<HomePage />} />
            </Routes>
        </>
    );
}

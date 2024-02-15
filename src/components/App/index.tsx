//Imports
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages";
import Header from "../Header";
import SideNav from "../SideNav";
import NotFoundPage from "../../pages/NotFoundPage";

//Exports
export default function App() {
    return (
        <>
            <Header />
            <SideNav />
            <Routes>
                <Route path="/user/:id" element={<HomePage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

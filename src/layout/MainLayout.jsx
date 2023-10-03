import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";

export const MainLayout = () => {

    return (
        <>
            <Header />
            <Navigation />
            <Outlet />
          
            <Footer />
        </>
    )
}
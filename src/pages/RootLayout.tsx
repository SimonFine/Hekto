import { Outlet } from "react-router-dom";
import TopBar from "../sections/Home/TopBar/TopBar";
import Footer from "../sections/Home/Footer/Footer";
import SnackBar from "../components/SnackBar/SnackBar";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout: React.FC = () => {
    return (
        <>
            <TopBar />
                <main>
                    <SnackBar />
                    <ScrollToTop />
                    <Outlet />
                </main>
            <Footer />
        </>
    );
}

export default RootLayout;
import Header from "../components/organisim/Header";
import Footer from "../components/organisim/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

function Layout() {
  // const { state } = useNavigation();

  ScrollToTop();

  return (
    <div className="w-full h-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

import Header from "../components/organisim/Header";
import Footer from "../components/organisim/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  // const { state } = useNavigation();

  return (
    <div className="w-full h-full">
      <Header />
      <main className="pt-[90px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

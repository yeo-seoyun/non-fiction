import Header from "../components/organisim/Header";
// import Footer from "../components/organisim/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  // const { state } = useNavigation(); // �ε����г�  ���?

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;

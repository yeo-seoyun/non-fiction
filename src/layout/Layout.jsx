import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Layout() {
  const queryClient = new QueryClient();

  // ScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <div className="w-full h-full">
          <Header />
          <ScrollToTop />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default Layout;

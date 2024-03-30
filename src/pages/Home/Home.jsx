import PerfumeLeft from "@/assets/Home/home01.jpg";
import PerfumeRight from "@/assets/Home/home02.jpg";
import Homfragrance from "@/assets/Home/home03.jpg";
import HandandBodyLeft from "@/assets/Home/home04.jpg";
import HandandBodyRight from "@/assets/Home/home05.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-pink-200">
      <h1 className="sr-only">Home</h1>
      <Link to="/perfume" aria-label="향수">
        <div className="w-full flex justify-center relative">
          <h2 className="absolute bottom-10 text-xl text-white font-noto-serif font-light">
            Eau de Parfum
          </h2>
          <ul className="w-full flex">
            <li
              style={{
                backgroundImage: `url(${PerfumeLeft})`,
                flex: 1,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></li>
            <li
              style={{
                backgroundImage: `url(${PerfumeRight})`,
                flex: 1,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></li>
          </ul>
        </div>
      </Link>
      <Link to="/comingsoon" aria-label="홈 프래그런스">
        <div className="w-full flex justify-center relative">
          <h2 className="absolute bottom-10 text-xl text-white font-noto-serif font-light">
            Home Fragrance
          </h2>
          <ul className="w-full flex">
            <li
              style={{
                backgroundImage: `url(${Homfragrance})`,
                flex: 1,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></li>
          </ul>
        </div>
      </Link>
      <Link to="/handandbody" aria-label="핸드 앤 바디">
        <div className="w-full flex justify-center relative">
          <h2 className="absolute bottom-10 text-xl text-white font-noto-serif font-light">
            Hand & Body Care
          </h2>
          <ul className="w-full flex">
            <li
              style={{
                backgroundImage: `url(${HandandBodyLeft})`,
                flex: 1,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></li>
            <li
              style={{
                backgroundImage: `url(${HandandBodyRight})`,
                flex: 1,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></li>
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default Home;

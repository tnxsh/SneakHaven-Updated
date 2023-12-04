import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone1415Pro1 from "./pages/IPhone1415Pro1";
import IPhone1415ProProceedO from "./pages/IPhone1415ProProceedO";
import IPhone1415ProShip from "./pages/IPhone1415ProShip";
import IPhone1415ProEditProf from "./pages/IPhone1415ProEditProf";
import IPhone1415ProProfile from "./pages/IPhone1415ProProfile";
import IPhone1415ProWishlist from "./pages/IPhone1415ProWishlist";
import IPhone1415ProCart from "./pages/IPhone1415ProCart";
import IPhone14Pro6thShoe from "./pages/IPhone14Pro6thShoe";
import IPhone14Pro5thShoe from "./pages/IPhone14Pro5thShoe";
import IPhone14Pro4thShoe from "./pages/IPhone14Pro4thShoe";
import IPhone14Pro3thShoe from "./pages/IPhone14Pro3thShoe";
import IPhone14Pro2ndShoe from "./pages/IPhone14Pro2ndShoe";
import IPhone1415ProBlueShoe from "./pages/IPhone1415ProBlueShoe";
import IPhone1415ProOrangeSh from "./pages/IPhone1415ProOrangeSh";
import IPhone14ProGreenShoe from "./pages/IPhone14ProGreenShoe";
import IPhone1415ProHomePage from "./pages/IPhone1415ProHomePage";
import IPhone1415ProSignUp from "./pages/IPhone1415ProSignUp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-proceed-order":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-ship":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-profile":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-wishlist":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-cart":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-6th-shoe":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-5th-shoe":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-4th-shoe":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-3th-shoe":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-2nd-shoe":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-blue-shoe":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-orange-shoe":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-green-shoe":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-home-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-signup":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone1415Pro1 />} />
      <Route
        path="/iphone-14-15-pro-proceed-order"
        element={<IPhone1415ProProceedO />}
      />
      <Route path="/iphone-14-15-pro-ship" element={<IPhone1415ProShip />} />
      <Route
        path="/iphone-14-15-pro-edit-profile"
        element={<IPhone1415ProEditProf />}
      />
      <Route
        path="/iphone-14-15-pro-profile"
        element={<IPhone1415ProProfile />}
      />
      <Route
        path="/iphone-14-15-pro-wishlist"
        element={<IPhone1415ProWishlist />}
      />
      <Route path="/iphone-14-15-pro-cart" element={<IPhone1415ProCart />} />
      <Route path="/iphone-14-pro-6th-shoe" element={<IPhone14Pro6thShoe />} />
      <Route path="/iphone-14-pro-5th-shoe" element={<IPhone14Pro5thShoe />} />
      <Route path="/iphone-14-pro-4th-shoe" element={<IPhone14Pro4thShoe />} />
      <Route path="/iphone-14-pro-3th-shoe" element={<IPhone14Pro3thShoe />} />
      <Route path="/iphone-14-pro-2nd-shoe" element={<IPhone14Pro2ndShoe />} />
      <Route
        path="/iphone-14-15-pro-blue-shoe"
        element={<IPhone1415ProBlueShoe />}
      />
      <Route
        path="/iphone-14-15-pro-orange-shoe"
        element={<IPhone1415ProOrangeSh />}
      />
      <Route
        path="/iphone-14-pro-green-shoe"
        element={<IPhone14ProGreenShoe />}
      />
      <Route
        path="/iphone-14-15-pro-home-page"
        element={<IPhone1415ProHomePage />}
      />
      <Route
        path="/iphone-14-15-pro-signup"
        element={<IPhone1415ProSignUp />}
      />
    </Routes>
  );
}
export default App;

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";

// <Outlet /> renders the current nested route
function AppLayout() {
  const navigation = useNavigation();
  // will render a loading animation when waiting for data to be fetched and page rendered.
  const isLoading = navigation.state === "loading" ? true : false;
  return (
    <div className="  grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

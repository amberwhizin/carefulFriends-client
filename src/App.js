import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/Routes";
import BootstrapNavbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BootstrapNavbar />
      <Routes />
    </>
  );
};

export default App;

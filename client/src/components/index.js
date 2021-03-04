import { Demos, DemoForm } from "./demo";
import { Logout } from "./logout";
import { Login } from "./login";
import { useSelector } from "react-redux";
import Navbar from "./navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
export function App() {
  return (
    // <div>
    //     <Demos/>
    //     <DemoForm/>
    // </div>
    <div>
      <Navbar />
      {/*<Logout />*/}
      <Login />
    </div>
  );
}

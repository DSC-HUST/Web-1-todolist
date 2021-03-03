import "./App.css";
import Login from "./components/login.js";
import Logout from "./components/logout.js";
import { useSelector } from "react-redux";
import { selectUser } from "./feature/userSlice";
const App = () => {
  const user = useSelector(selectUser);
  return <div>{user ? <Logout /> : <Login />}</div>;
};
export default App;

import {Demos, DemoForm} from './demo';
import {Logout} from './logout';
import {Login} from './login';
import { useSelector } from "react-redux";

export function App() {
    
    return (
        // <div>
        //     <Demos/>
        //     <DemoForm/>
        // </div>
        <div>
            <Logout />
            {/* <Login /> */}
        </div>
    );
}

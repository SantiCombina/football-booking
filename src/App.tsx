import {Route, Routes} from "react-router-dom";

import {Layout} from "./components/layout/layout";
import {LayoutBackOffice} from "./components/layout/layout-back-office";
import {Fields} from "./components/views/fields";
import {Home} from "./components/views/home";
import {Login} from "./components/views/login";
import {FieldDetail} from "./components/views/field-detail";

function App() {
    return (
        <Routes>
            <Route element={<LayoutBackOffice />}>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
            </Route>
            <Route element={<Layout />}>
                <Route element={<Fields />} path="/fields" />
                <Route element={<FieldDetail />} path="/field-detail" />
            </Route>
        </Routes>
    );
}

export default App;

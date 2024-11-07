import {Route, Routes} from "react-router-dom";

import {Layout} from "./components/layout/layout";
import {LayoutBackOffice} from "./components/layout/layout-back-office";
import {FieldDetail} from "./components/views/field-detail";
import {Fields} from "./components/views/fields";
import {Home} from "./components/views/home";
import {Login} from "./components/views/login";
import {NotFound} from "./components/views/not-found";
import {Reservation} from "./components/views/reservation";

function App() {
    return (
        <Routes>
            <Route element={<LayoutBackOffice />}>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
            </Route>
            <Route element={<Layout />}>
                <Route element={<Fields />} path="/fields" />
                <Route element={<FieldDetail />} path="/field-detail/:id" />
                <Route element={<Reservation />} path="/reservation/:id" />
            </Route>
            <Route element={<NotFound />} path="*" />
        </Routes>
    );
}

export default App;

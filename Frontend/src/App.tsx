import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Textiles from "./pages/Textiles";
import Collections from "./pages/Collections";
import ErrorPage from "./error/Error";
import Palazzina2025 from "./pages/Palazzina-2025";
import TitleUpdater from "./components/TitleUpdater";
import Armonia from "./pages/Collections/Armonia";

export default function App() {
    return (

        <><TitleUpdater /><Routes>

            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="palazzina-2025" element={<Palazzina2025 />} />
                <Route path="textiles" element={<Textiles />} />
                <Route path="collections" element={<Collections />} />
                <Route path="collections/armonia" element={<Armonia />} />
                  
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes></>
    );
}

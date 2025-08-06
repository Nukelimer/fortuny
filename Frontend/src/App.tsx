import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Textiles from "./pages/Textiles";
import Collections from "./pages/Collections";
import ErrorPage from "./error/Error";

export default function App() {
        return (
                <Routes >
                        <Route path="/" element={<Layout />}>
                                <Route index element={<Home />} />
                                <Route path="shop" element={<Shop />} />
                                <Route path="textiles" element={<Textiles />} />
                                <Route path="collections" element={<Collections />} />
                                <Route path="*" element={<ErrorPage />} />
                        </Route>
                </Routes>
        );
}

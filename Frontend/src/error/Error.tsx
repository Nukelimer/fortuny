import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link} from "react-router-dom";

interface ErrorPageProps {
        errorCode?: number;
        message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode = 404, message = "Page Not Found" }) => {


        const [changeColor, setChangeColor] = useState(false);

        return (
                <div className="flex justify-center items-center flex-col  min-h-screen bg-[#F8F8F8]">
                        <img src="/error/error.webp" alt="error-image" className="h-32 mb-24" />
                        <h1 className="pb-4 text-xl">Error: {errorCode}</h1>
                        <h3 className="text-sm pb-8">{message}</h3>

                        <Link
                                to={"/"}
                                onMouseEnter={() => setChangeColor(true)}
                                onMouseLeave={() => setChangeColor(false)}
                                className="text-[14px] cursor-pointer hover:text-[#00e1d2] font-light uppercase bg-white px-10 py-2 rounded flex items-center gap-2"
                             
                        >
                                <BsArrowUpRight color={changeColor ? "#00e1d2" : "black"} /> Go to
                                Homepage
                        </Link>
                </div>
        );
};

export default ErrorPage;

import React, { useState } from "react";
import { LiaSearchSolid, LiaShoppingBagSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Button from "./Button";
import { MdOutlinePersonOutline } from "react-icons/md";

function NavBar_Light() {
    const [changeColor, setchangeColor] = useState(false);

    const headers = ["Textiles", "Shop", "Stories", "History"]
    const headersSecondary = ["Visit",
        "Contact",
        "Professional"]





    return (
        <>
            <div className=" lg:hidden bg-white rounded-md w-[98%] p-2 fixed top-2 mx-auto  flex items-center justify-between px-4 z-10">
                <RxHamburgerMenu
                    color={changeColor ? "#00e1d2" : ""}
                    stroke={changeColor ? "14" : ""}
                    onMouseEnter={() => {
                        setchangeColor(true);
                    }}
                    onMouseLeave={() => {
                        setchangeColor(false);
                    }}
                    className={changeColor ? " cursor-pointer" : ""}
                />
                <Link to={"/"}>
                    <img
                        src="/logo/fortuny.webp"
                        alt=""
                        className="h-3"
                    />
                </Link>

                <div className=" flex items-center justify-center gap-3">
                    <LiaShoppingBagSolid className="" />
                    <LiaSearchSolid className="mt-[2px]" />
                </div>
            </div>
            <div className=" hidden lg:flex  rounded-md w-[98%] p-2 fixed top-2 mx-auto items-center justify-between px-4 z-10">
                <div className=" flex gap-4 uppercase text-[12px]">
                    {

                        headers.map((header) => {

                            if (header.includes("Shop") || header.includes("Textiles")) {
                                return <Link to={`${header.toLowerCase()}`} className="hover:text-phc cursor-pointer">{header}</Link>

                            } else {
                                return <Button styling="hover:text-phc cursor-pointer uppercase" >{header}</Button>


                            }
                        })
                    }
                </div>
                <Link to={"/"}>
                    <img
                        src="/logo/fortuny.webp"
                        alt=""
                        className="h-6"
                    />
                </Link>

                <div className=" flex items-center justify-center gap-3">


                    <div className="flex">
                        {

                            headersSecondary.map((header) => {

                                if (!header.includes("Contact")) {
                                    return <Link to={`${header.toLowerCase()}`} className="hover:text-phc cursor-pointer text-[12px] uppercase  px-4">{header}</Link>

                                } else {
                                    return <Button styling="hover:text-phc cursor-pointer uppercase text-[12px]" >{header}</Button>


                                }
                            })

                        }

                    </div>

                    <MdOutlinePersonOutline className="hover:text-phc  cursor-pointer"/>
                    <LiaShoppingBagSolid className="hover:text-phc  cursor-pointer" />
                    <LiaSearchSolid className="mt-[2px] hover:text-phc  cursor-pointer" />
                </div>
            </div>
        </>
    );
}

export default NavBar_Light;

import React, { useState } from "react";
import { LiaSearchSolid, LiaShoppingBagSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function NavBar_Light() {
        const [changeColor, setchangeColor] = useState(false);
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
                                        className={changeColor ? "rotate-x-12 cursor-pointer" : ""}
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
                        <div className=" hidden lg:flex bg-white rounded-md w-[98%] p-2 fixed top-2 mx-auto items-center justify-between px-4 z-10">
                                <div className="">
                                        <Link to={"shop"}>Shop</Link>
                                        <Link to={"shop"}>Shop</Link>
                                </div>
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
                </>
        );
}

export default NavBar_Light;

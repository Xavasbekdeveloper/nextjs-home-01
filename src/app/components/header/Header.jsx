"use client";
import React from "react";
import Link from "next/link";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="py-5 sticky top-0 left-0 w-full">
      <div className="container flex items-center justify-between gap-4">
        <div>
          <Link href={"/"}>
            <Image width={126} height={34} alt="logo img" src={logo} />
          </Link>
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <Link
              className="flex items-center gap-1 text-base font-medium text-[#272727] leading-4"
              href={"/discovery"}
            >
              Discovery <IoIosArrowDown />{" "}
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-medium text-[#272727] leading-4"
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-medium text-[#a38282] leading-4"
              href={"/contact"}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div>
          <button>
            <FaUser />
          </button>
          <button>
            <BsCart3 />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

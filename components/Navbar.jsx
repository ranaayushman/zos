import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 h-20 items-center bg-red-200">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold text-3xl">LOG</h1>
        </Link>
      </div>
      <div>
        <Link href={"/addTopic"}>
          <h1 className="font-bold text-3xl w-fit bg-gray-400 p-3 rounded-md">Add Topic</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

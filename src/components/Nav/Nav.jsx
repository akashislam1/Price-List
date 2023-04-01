import React, { useState } from "react";
import List from "../List/List";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Service",
      path: "/service",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Login",
      path: "/login",
    },
  ];

  return (
    <nav className="bg-purple-600 px-2">
      <div onClick={() => setOpen(!open)} className="md:hidden p-4">
        <span>
          {open ? (
            <XMarkIcon className="h-6 w-6 text-white"></XMarkIcon>
          ) : (
            <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>
          )}
        </span>
      </div>
      <ul
        className={`md:flex md:text-xl duration-700 md:duration-0 pb-4 lg:p-2  text-white absolute md:static ${
          open ? "top-14 bg-purple-700 " : "-top-64"
        }`}
      >
        {routes.map((route) => (
          <List key={route.id} route={route}></List>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

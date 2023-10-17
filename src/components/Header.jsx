import React from "react"
import { Link, NavLink } from "react-router-dom"
import avatarIcon from "../assets/img/avatar-icon.png"

const Navbar = () => {
  const fakeLogOut = () => {
    localStorage.removeItem("loggedin")
  }
  return (
    <div className="sticky inset-0 bg-white">
      <header className="flex items-center justify-between p-6 md:p-8 md:pr-10">
        <h2 className="cursor-pointer text-xl font-bold md:text-3xl">
          <Link to="/">#VANLIFE</Link>
        </h2>
        <nav>
          <ul className="flex items-center gap-4 md:gap-6 md:text-xl">
            <li className="cursor-pointer hover:font-bold hover:underline">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : null
                }
                to="host"
              >
                Host
              </NavLink>
            </li>
            <li className="cursor-pointer hover:font-bold hover:underline">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : null
                }
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="cursor-pointer hover:font-bold hover:underline">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : null
                }
                to="vans"
              >
                Vans
              </NavLink>
            </li>
            <li className="mt-1 hover:scale-125 hover:transition-all">
              <NavLink to="login">
                <img
                  className="w-5 md:w-6"
                  src={avatarIcon}
                  alt="avatar icon"
                />
              </NavLink>
            </li>
            <li>
              <button onClick={fakeLogOut}>X</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar

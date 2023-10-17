import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  }
  return (
    <>
      <div className="flex gap-5 border-b-2 px-4 py-3 text-sm text-gray-500 md:px-8 md:py-5 md:text-lg">
        <NavLink
          className="hover:font-semibold hover:text-black hover:underline"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className="hover:font-semibold hover:text-black hover:underline"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className="hover:font-semibold hover:text-black hover:underline"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className="hover:font-semibold hover:text-black hover:underline"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  )
}

export default HostLayout

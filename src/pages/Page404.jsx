import React from "react"
import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <div className="mx-auto flex grow flex-col justify-center md:max-w-3xl">
      <h1 className="p-6 text-5xl font-bold leading-tight">
        Sorry, the page you are looking for was not found.
      </h1>
      <Link
        className="mx-4 rounded-lg bg-black p-6 text-center text-lg text-white"
        to="/"
      >
        Back to home
      </Link>
    </div>
  )
}

export default Page404

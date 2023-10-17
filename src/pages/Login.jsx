import React from "react"
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom"
import { loginUser } from "../api"

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("message")
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host"

  try {
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedin", true)
    return redirect(pathname)
  } catch (err) {
    return err
  }
}

const Login = () => {
  const errorMessage = useActionData()
  const message = useLoaderData()

  return (
    <div className="flex grow flex-col items-center justify-center md:gap-9">
      <h1 className="text-3xl font-bold md:text-6xl">
        Sign in to your account
      </h1>

      {message && (
        <p className="-mb-2 mt-4 text-lg font-semibold text-red-500">
          {message}
        </p>
      )}

      {errorMessage && (
        <p className="text-gray-950-600 -mb-2 mt-4 font-semibold">
          {errorMessage.message}
        </p>
      )}
      <Form
        method="post"
        className="mt-4 flex flex-col self-stretch p-4 md:w-2/4 md:self-center"
        replace
      >
        <input
          className="rounded-t-lg border-2 border-b-0 border-gray-300 px-2 py-1 text-lg md:px-4 md:py-3 md:text-xl"
          type="email"
          name="email"
          placeholder="Enter your Email"
        />
        <input
          className="rounded-b-lg border-2 border-gray-300 px-2 py-1 text-lg md:px-4 md:py-3 md:text-xl"
          type="password"
          name="password"
          placeholder="Enter your Password"
        />
        <button className="mt-6 rounded-lg bg-orange-500 p-2 text-lg font-medium text-white hover:bg-orange-600 md:mt-14 md:py-4 md:text-xl">
          Sign In
        </button>
      </Form>
    </div>
  )
}

export default Login

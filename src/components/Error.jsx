import React from "react"
import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()

  return (
    <div className="flex grow flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">{error?.message}</h1>
      <pre className="mt-2 text-lg">
        {error?.status} - {error?.statusText}
      </pre>
    </div>
  )
}

export default Error

import React, { Suspense } from "react"
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom"
import { getVan } from "../../api"

export const loader = ({ params }) => {
  return defer({ van: getVan(params.id) })
}

const VanDetail = () => {
  const searchParams = useLocation()
  const vanPromise = useLoaderData()

  const renderVanResolvedData = (van) => {
    const { imageUrl, name, type, price, description } = van ? van : {}

    const style = {
      backgroundColor:
        type === "simple"
          ? "#E17654"
          : type === "rugged"
          ? "#115E59"
          : "#161616",
    }
    return (
      <div className=" p-4 pb-10 md:mt-8 md:flex md:max-w-5xl md:gap-8">
        <img
          className="rounded-lg md:max-w-lg"
          src={imageUrl}
          alt="van image"
        />
        <div className="md:relative">
          <p
            className="mt-5 inline-block rounded-md px-3 py-1 text-gray-200 md:mt-1 md:text-xl"
            style={style}
          >
            {type ? type[0].toUpperCase() + type.slice(1) : type}
          </p>
          <p className="mt-3 text-xl font-bold md:mt-5 md:text-6xl">{name}</p>
          <p className="mt-2 text-lg font-bold md:mt-4 md:text-5xl">
            ${price}
            <span className="text-sm font-normal md:text-xl">/day</span>
          </p>
          <p className="mt-2 text-xs tracking-tight md:mt-8 md:text-lg">
            {description}
          </p>
          <button className="mx-auto mt-4 w-full rounded-lg bg-orange-400 py-2 text-lg font-semibold text-gray-200 hover:bg-orange-800 md:absolute md:bottom-0 md:py-4 md:text-2xl">
            Rent this van
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto">
      <Link
        to={`..${
          searchParams.state?.search ? `?${searchParams.state.search}` : ""
        }`}
        relative="path"
        className="inline-block pl-4 pt-4 hover:font-semibold hover:underline"
      >
        &larr;{" "}
        <span>
          Back to {searchParams.state?.type ? searchParams.state?.type : "all"}{" "}
          vans
        </span>
      </Link>
      <Suspense
        fallback={
          <h1 className="mt-8 pl-4 text-center  text-xl font-semibold">
            Loading Van details...
          </h1>
        }
      >
        <Await resolve={vanPromise.van}>{renderVanResolvedData}</Await>
      </Suspense>
    </div>
  )
}

export default VanDetail

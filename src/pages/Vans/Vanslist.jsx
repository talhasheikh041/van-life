import { Suspense } from "react"
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"
import Van from "../../components/Van"

export const loader = () => {
  return defer({ vans: getVans() })
}

const Vanslist = () => {
  const vansPromise = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")

  const renderResolvedVanData = (vans) => {
    const filteredVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans

    const vanElements = filteredVans.map((van) => {
      return (
        <Van
          key={van.id}
          id={van.id}
          imageUrl={van.imageUrl}
          name={van.name}
          price={van.price}
          type={van.type}
          filter={searchParams.toString()}
          filterName={typeFilter}
        />
      )
    })
    return (
      <>
        <div className="mt-4 flex flex-wrap gap-2 pl-4 md:mt-8">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`rounded-lg px-4 py-1  hover:bg-[#E17654] hover:text-gray-200 ${
              typeFilter === "simple"
                ? "bg-[#E17654] text-gray-200"
                : "bg-red-100 text-gray-500"
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`rounded-lg px-4 py-1 hover:bg-[#161616] hover:text-gray-200 ${
              typeFilter === "luxury"
                ? "bg-[#161616] text-gray-200"
                : "bg-red-100 text-gray-500"
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`rounded-lg px-4 py-1 hover:bg-[#115E59] hover:text-gray-200 ${
              typeFilter === "rugged"
                ? "bg-[#115E59] text-gray-200"
                : "bg-red-100 text-gray-500"
            }`}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="px-2 py-1 text-gray-500 underline hover:font-bold"
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="mb-4 flex flex-wrap gap-3 p-4 md:mt-8 md:max-w-5xl md:justify-center">
          {vanElements}
        </div>
      </>
    )
  }

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  return (
    <div className="mx-auto flex flex-col">
      <h1 className="mt-4 pl-4 text-3xl font-bold md:max-w-5xl md:text-5xl">
        Explore our van options
      </h1>
      <Suspense
        fallback={
          <h1 className="mt-8 pl-4 text-center  text-2xl font-semibold">
            Loading Vans....
          </h1>
        }
      >
        <Await resolve={vansPromise.vans}>{renderResolvedVanData}</Await>
      </Suspense>
    </div>
  )
}

export default Vanslist

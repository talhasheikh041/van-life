import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

export const loader = async ({ request }) => {
  await requireAuth(request)
  return defer({ hostVans: getHostVans() })
}

const HostVans = () => {
  const hostVansPromise = useLoaderData()

  const renderHostVansResolvedData = (hostVans) => {
    const hostVanElements = hostVans.map((van) => {
      return (
        <Link key={van.id} to={van.id}>
          <div className="flex gap-5 rounded-lg bg-slate-100 p-4 hover:bg-slate-200 md:max-w-lg">
            <img
              className="w-16 rounded-lg"
              src={van.imageUrl}
              alt="host van image"
            />
            <div>
              <p className="text-lg font-semibold">{van.name}</p>
              <p className="text-slate-600">${van.price}/day</p>
            </div>
          </div>
        </Link>
      )
    })
    return (
      <div className="mt-8 flex flex-col gap-4 px-2">{hostVanElements}</div>
    )
  }

  return (
    <div className="p-7">
      <h1 className="text-3xl font-bold">Your listed vans</h1>
      <Suspense fallback={<h1 className="mt-10 text-center">Loading...</h1>}>
        <Await resolve={hostVansPromise.hostVans}>
          {renderHostVansResolvedData}
        </Await>
      </Suspense>
    </div>
  )
}

export default HostVans

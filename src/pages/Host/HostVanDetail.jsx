import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom"
import { Suspense } from "react"
import { getVan } from "../../api"
import { requireAuth } from "../../utils"

export const loader = async ({ params, request }) => {
  await requireAuth(request)
  return defer({ hostVanDetail: getVan(params.id) })
}

const HostVanDetail = () => {
  const hostVanDetailPromise = useLoaderData()

  const navLinkActiveStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  }
  const renderHostVanDetailResolvedData = (hostVanDetail) => {
    const vanTypeStyles = {
      backgroundColor:
        hostVanDetail?.type === "simple"
          ? "#E17654"
          : hostVanDetail?.type === "rugged"
          ? "#115E59"
          : "#161616",
    }

    return (
      <div className="mt-5 p-4">
        <Link
          to=".."
          relative="path"
          className="p-6 hover:font-semibold hover:underline"
        >
          &larr; <span>Back to all vans</span>
        </Link>
        <div className="flex gap-5 bg-slate-100 p-6">
          <img
            className="w-32 rounded-lg"
            src={hostVanDetail.imageUrl}
            alt="host van image"
          />
          <div className="mt-3">
            <span
              style={vanTypeStyles}
              className="inline-block rounded-md px-2 py-1 text-xs text-gray-200"
            >
              {hostVanDetail.type[0].toUpperCase() +
                hostVanDetail.type.slice(1)}
            </span>
            <p className="mt-4 text-2xl font-bold">{hostVanDetail.name}</p>
            <p className="text-xl font-bold">
              ${hostVanDetail.price}
              <span className="text-sm font-normal text-gray-600">/day</span>
            </p>
          </div>
        </div>
        <div className="bg-slate-100">
          <nav className="flex gap-4 px-6 pt-2">
            <NavLink
              style={({ isActive }) => (isActive ? navLinkActiveStyles : null)}
              className="hover:font-semibold hover:underline"
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? navLinkActiveStyles : null)}
              className="hover:font-semibold hover:underline"
              to="photos"
            >
              Photos
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? navLinkActiveStyles : null)}
              className="hover:font-semibold hover:underline"
              to="pricing"
            >
              Pricing
            </NavLink>
          </nav>
        </div>
        <Outlet context={{ currentVan: hostVanDetail }} />
      </div>
    )
  }

  return (
    <>
      <Suspense
        fallback={
          <h1 className="my-auto text-center text-lg font-semibold">
            Loading Details...
          </h1>
        }
      >
        <Await resolve={hostVanDetailPromise.hostVanDetail}>
          {renderHostVanDetailResolvedData}
        </Await>
      </Suspense>
    </>
  )
}

export default HostVanDetail

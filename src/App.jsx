import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import HostLayout from "./components/HostLayout"
import Layout from "./components/Layout"

import Error from "./components/Error"
import About from "./pages/About"
import Home from "./pages/Home"
import Dashboard from "./pages/Host/Dashboard"
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./pages/Login"
import Page404 from "./pages/Page404"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Vanslist, { loader as vanslistLoader } from "./pages/Vans/Vanslist"

import { requireAuth } from "./utils"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="login"
          element={<Login />}
          action={loginAction}
          loader={loginLoader}
        />
        <Route
          path="/vans"
          element={<Vanslist />}
          errorElement={<Error />}
          loader={vanslistLoader}
        />
        <Route
          path="/vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />

        <Route path="/host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async ({ request }) => await requireAuth(request)}
            />
          </Route>
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
        <Route
          path="*"
          element={<Page404 />}
          loader={async ({ request }) => await requireAuth(request)}
        />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App

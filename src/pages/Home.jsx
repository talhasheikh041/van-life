import React from "react"

const Home = () => {
  return (
    <div className="md:mx-auto md:max-w-5xl">
      <section className="text-gray-100" id="home-page">
        <div className="bg-hero-img bg-cover bg-no-repeat px-8 py-8 md:px-20 md:py-14 md:pt-20">
          <h1 className="text-3xl font-bold md:w-3/4 md:text-5xl">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="mt-4 text-sm md:mt-8 md:w-3/4 md:text-lg">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 hover:bg-orange-700 md:mt-6 md:w-3/4 md:py-3 md:text-lg md:font-semibold">
            Find your van
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home

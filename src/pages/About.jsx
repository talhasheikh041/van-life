import React from "react"
import aboutHero from "../assets/img/about-hero.png"

const About = () => {
  return (
    <div className="md:mx-auto md:max-w-5xl">
      <section>
        <img src={aboutHero} alt="about hero image" />
        <div className="px-9 py-10 pb-20 md:py-16 md:pb-28">
          <h2 className="text-2xl font-bold tracking-tight md:max-w-3xl md:text-4xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="mt-4 text-sm tracking-tighter md:mt-7 md:max-w-3xl md:text-lg">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
          </p>
          <p className="text-xs md:text-sm">(Hitch costs extra 😉)</p>
          <p className="mt-4 text-sm tracking-tighter md:text-lg ">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="mt-6 bg-[#FFCC8D] py-8 md:mt-10 md:py-10">
            <h3 className="ml-8 w-2/3 text-lg font-bold md:text-2xl">
              Your destination is waiting. Your van is ready.
            </h3>
            <button className="ml-8 mt-4 rounded-lg bg-gray-800 px-3 py-2 text-gray-200 hover:bg-gray-500 md:px-4 md:py-3">
              Explore our vans
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

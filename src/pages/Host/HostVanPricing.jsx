import React from "react"
import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {
  const { currentVan } = useOutletContext()

  return (
    <div className="p-6">
      <p className="text-3xl font-semibold">${currentVan.price}/day</p>
    </div>
  )
}

export default HostVanPricing

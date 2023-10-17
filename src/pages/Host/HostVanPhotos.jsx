import React from "react"
import { useOutletContext } from "react-router-dom"

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext()

  return (
    <div className="p-6">
      <img className="w-28" src={currentVan.imageUrl} alt="van photo" />
    </div>
  )
}

export default HostVanPhotos

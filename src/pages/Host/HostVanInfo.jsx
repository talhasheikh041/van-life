import React from "react"
import { useOutletContext } from "react-router-dom"

const HostVanInfo = () => {
  const { currentVan } = useOutletContext()

  return (
    <div className="bg-slate-100 p-6">
      <p className="font-bold">
        Name: <span className="font-normal">{currentVan.name}</span>
      </p>
      <p className="mt-3 font-bold">
        Category:{" "}
        <span className="font-normal">
          {currentVan.type[0].toUpperCase() + currentVan.type.slice(1)}
        </span>
      </p>
      <p className="mt-3 max-w-lg font-bold">
        Description:{" "}
        <span className="font-normal">{currentVan.description}</span>
      </p>
      <p className="mt-3 font-bold">
        Visibility: <span className="font-normal">Public</span>
      </p>
    </div>
  )
}

export default HostVanInfo

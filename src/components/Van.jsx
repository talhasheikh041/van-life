import React from "react"
import { Link } from "react-router-dom"

const Van = ({ id, imageUrl, name, price, type, filter, filterName }) => {
  const style = {
    backgroundColor:
      type === "simple" ? "#E17654" : type === "rugged" ? "#115E59" : "#161616",
  }

  return (
    <div className="grow rounded-b-lg hover:bg-slate-200 hover:p-2 md:grow-0 md:basis-80">
      <Link to={id} state={{ search: filter, type: filterName }}>
        <img className="rounded-lg" src={imageUrl} alt="Van Image" />
        <div className="mt-4 flex justify-between">
          <p className="text-lg font-bold">{name}</p>
          <div>
            <p className="text-lg font-bold">${price}</p>
            <p className="-mt-1 text-right text-xs">/day</p>
          </div>
        </div>
        <p
          className="inline-block rounded-md px-3 py-1 text-gray-200"
          style={style}
        >
          {type[0].toUpperCase() + type.slice(1)}
        </p>
      </Link>
    </div>
  )
}

export default Van

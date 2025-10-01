import Image from 'next/image'
import React, { FC } from 'react'
import SeeMore from '../SeeMore'

interface IProps {
  data: any[]
}

const ProductView: FC<IProps> = ({ data }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((i) => (
          <div
            key={i.id}
            className="border rounded-2xl shadow-md p-4 bg-white flex flex-col"
          >
            <div className="flex justify-center">
              <Image
                src={i.image}
                alt={i.title}
                width={200}
                height={200}
                className="mb-3 object-contain"
              />
            </div>

            <h3 className="font-semibold text-lg mb-2 line-clamp-1">
              {i.title}
            </h3>
            <strong className="text-xl text-green-600 block mb-2">
              ${i.price}
            </strong>
            <p className="text-sm text-gray-600 line-clamp-2 flex-grow">
              {i.description}
            </p>
            <SeeMore id={i.id}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductView

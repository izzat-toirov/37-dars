import Image from 'next/image'
import React, { FC } from 'react'

interface IProps {
    data: any[]
}

const ProductView: FC<IProps> = ({data}) => {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-4 gap-5'>
        {
            data?.map((i)=>(
                <div key={i.id} className='border max-w-[300px]'>
                    <Image src={i.image} alt={i.title} width={200} height={200} className='mb-3'/>
                    <h3>{i.title}</h3>
                    <strong>{i.price}</strong>
                    <p>{i.description}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default ProductView
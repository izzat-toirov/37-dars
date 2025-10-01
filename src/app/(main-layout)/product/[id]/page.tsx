import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

type Props = {
    params: Promise<{ id: string }>
  }
   
  // SEO
  export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    const { id } = await params
   
    const product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
   
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        images: [product.image],
      },
    }
  }


// SEO
export async function generateStaticParams() {
  const data = await fetch('https://dummyjson.com/products?limit=20').then(
    (res) => res.json()
  );
  return data?.products.map((pro: any) => ({
    id: pro.id.toString(),
  }));
}

const DetailProduct = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  }); // ISR

  const data = await response.json();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 container">
    <div className="flex justify-center">
      <Image
        src={data?.image}
        alt={data?.title}
        width={400}
        height={400}
        className="object-contain"
      />
    </div>
    <div>
      <h1 className="text-2xl font-bold mb-3">{data?.title}</h1>
      <strong className="text-xl text-green-600 block mb-4">
        {data?.price} USD
      </strong>
      <p className="text-gray-700 leading-relaxed">{data?.description}</p>
    </div>
  </div>
  );
};

export default DetailProduct;

'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const SeeMore = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/product/${id}`)}
      className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
    >
      Add to Cart
    </button>
  );
};

export default SeeMore;

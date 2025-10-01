import Image from "next/image";
import { memo } from "react";

const Hero = () => {
  return (
    <section className=" text-white py-16 px-8 bg-[#2B2B2B]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover <br /> Digital Art & <br /> Collect NFTs
          </h1>
          <p className="text-gray-400 mt-6 max-w-md">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k NFT Artists.
          </p>
          <button className="mt-8 px-8 py-3 flex items-center gap-2 rounded-lg bg-purple-500">
          Get Started
          </button>
          <div className="flex gap-8 mt-10">
            <div>
              <h3 className="text-2xl font-bold">240k+</h3>
              <p className="text-gray-400 text-sm">Total Sale</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">100k+</h3>
              <p className="text-gray-400 text-sm">Auctions</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">240k+</h3>
              <p className="text-gray-400 text-sm">Artists</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#3B3B3B] rounded-xl overflow-hidden shadow-lg max-w-sm">
            <Image
              src={"/hero_image.png"}
              alt="Hero NFT"
              className="w-full object-cover"
              width={200} height={200}
            />
            <div className="p-4">
              <h4 className="font-semibold">Space Walking</h4>
              <p className="text-gray-400 text-sm">Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);

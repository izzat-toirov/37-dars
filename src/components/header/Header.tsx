import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h2>Header</h2>
      <div className='flex gap-5'>
      <Link href={"/"}>Home</Link>
      <Link href={"/product"}>Product</Link>
      <Link href={"/user"}>User</Link>
      </div>
    </div>
  );
};

export default memo(Header);
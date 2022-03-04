import Link from 'next/link';
import { FC } from 'react';

const UserMenu: FC = () => {
  return (
    <div className="z-10 fixed right-4 top-22 ">
      <ul className="w-60 bg-white shadow rounded-md p-4 pl-10">
        <li className=" font-bold pt-4 pb-4">
          <Link href="/faq">F.A.Q</Link>
        </li>
        <li className="font-bold pb-4 pt-4 ">
          <Link href="/">Se déconnecter</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;

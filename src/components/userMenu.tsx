import Link from 'next/link';
import { FC } from 'react';

const UserMenu: FC = () => {
  return (
    <div className="menu">
      <ul className="menu__container">
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

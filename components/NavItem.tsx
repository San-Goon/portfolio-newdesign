import { FunctionComponent, useCallback } from 'react';
import Link from 'next/link';

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  const onClickItem = useCallback(() => {
    setActiveItem(name);
  }, [name]);

  return activeItem !== name ? (
    <Link href={route} passHref>
      <span onClick={onClickItem} className="hover:text-primary">
        {name}
      </span>
    </Link>
  ) : null;
};

export default NavItem;

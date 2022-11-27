import React, { useCallback } from 'react';

interface PropsType {
  activeItem: string;
  name: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const NavItem = ({ activeItem, name, setActiveItem }: PropsType) => {
  const onClickItem = useCallback(() => {
    setActiveItem(name);
  }, [name]);

  return (
    <>
      {name === activeItem ? (
        <span
          onClick={onClickItem}
          className="capitalize cursor-pointer hover:text-green text-green-500"
        >
          {name}
        </span>
      ) : (
        <span
          onClick={onClickItem}
          className="capitalize cursor-pointer hover:text-green-500"
        >
          {name}
        </span>
      )}
    </>
  );
};

export default NavItem;

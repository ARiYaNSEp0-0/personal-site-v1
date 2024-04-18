import NavbarListItem from "./NavbarListItem";

const NavbarList = ({ list = [] }) => {
  return (
    <ul className="navigation-bar__list">
      {list.map((item) => (
        <NavbarListItem key={item.id} listItem={item} />
      ))}
    </ul>
  );
};

export default NavbarList;

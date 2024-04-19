import NavbarListItem from "./NavbarListItem";

const NavbarList = ({ list = [], ...rest }) => {
  return (
    <ul className="navigation-bar__list" {...rest}>
      {list.map((item) => (
        <NavbarListItem key={item.id} listItem={item} />
      ))}
    </ul>
  );
};

export default NavbarList;

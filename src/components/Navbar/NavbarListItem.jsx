const NavbarListItem = ({ listItem }) => {
  return (
    <li>
      <a href={listItem.path}>{listItem.text}</a>
    </li>
  );
};

export default NavbarListItem;

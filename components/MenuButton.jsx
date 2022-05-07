const MenuButton = ({ key, href, name, buttonStyles }) => {
  return (
    <a key={key} href={href} className={buttonStyles}>
      {name}
    </a>
  );
};
export default MenuButton;

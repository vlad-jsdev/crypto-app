const MenuButton = ({ href, name, buttonStyles }) => {
  return (
    <a href={href} className={buttonStyles}>
      {name}
    </a>
  );
};
export default MenuButton;

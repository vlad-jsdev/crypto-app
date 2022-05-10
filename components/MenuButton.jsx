const MenuButton = ({ href, name, buttonStyles, clickFunc }) => {
  return (
    <a href={href} className={buttonStyles} onClick={() => clickFunc()}>
      {name}
    </a>
  );
};
export default MenuButton;

const MenuButton = ({
  href,
  name,
  buttonStyles,
  clickFunc = () => {},
  icon,
}) => {
  return (
    <a href={href} className={buttonStyles} onClick={() => clickFunc()}>
      {icon && <img src={icon.src} className="inline-block pb-1 pr-1 h-5" />}{" "}
      {name}
    </a>
  );
};
export default MenuButton;

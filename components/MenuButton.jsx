import { buttonsMenu, buttonsTypes, walletButton } from "../constants/styles";
import { useEffect, useState } from "react";

const MenuButton = ({ key, href, name, buttonStyles }) => {
  // const [styles, setStyles] = useState("");
  // useEffect(() => {
  //   switch (buttonStyles) {
  //     case buttonsTypes.MENU:
  //       setStyles(buttonsMenu.buttonStyle);
  //       break;
  //     case buttonsTypes.LOGIN:
  //       setStyles(buttonsMenu.loginStyle);
  //       break;
  //     case buttonsTypes.WALLET:
  //       setStyles(walletButton.buttonStyle);
  //       break;
  //     default:
  //       setStyles("font-medium text-gray-500");
  //       break;
  //   }
  // }, []);

  return (
    <a key={key} href={href} className={buttonStyles}>
      {name}
    </a>
  );
};
export default MenuButton;

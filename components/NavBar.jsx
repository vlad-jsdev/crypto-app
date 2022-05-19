import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { buttonsMenu, buttonsTypes } from "../constants/styles";
import MenuButton from "./MenuButton";
import ToggleMode from "./ToggleMode";

const navigation = [
  { name: "Cryptocurrency", href: "/cryptoCurencyPage" },
  { name: "NFTs", href: "#" },
  { name: "Wallet", href: "/" },
  { name: "CryptoBot", href: "#" },
];

const NavBar = ({ theme, setTheme }) => (
  <Popover>
    <div className="relative py-6 px-4 sm:px-6 lg:px-8 dark:bg-gray-800 bg-gray-100">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between sm:h-10 "
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <MenuButton
              key={item.name}
              name={item.name}
              href={item.href}
              buttonStyles="font-medium my-auto text-gray-500 hover:text-black dark:hover:text-gray-100 p-4 rounded-full dark:hover:bg-gray-900 hover:bg-gray-200"
            />
          ))}
          <MenuButton
            name="Log in"
            href="#"
            buttonStyles="font-medium text-indigo-600 hover:text-white p-4 rounded-full hover:bg-indigo-600"
          />
          <ToggleMode theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </div>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden dark:bg-gray-800">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </div>
            <div className="-mr-2 ">
              <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block dark:text-gray-200 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800"
          >
            Log in
          </a>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default NavBar;

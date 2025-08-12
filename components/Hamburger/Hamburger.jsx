import { useState } from "react";

export default function AnimatedHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none text-gray-700 dark:text-gray-200 hover:text-blue-600"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span
        className={`block h-0.5 w-6 bg-current rounded transform transition duration-300 ease-in-out origin-left ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-current rounded transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-current rounded transform transition duration-300 ease-in-out origin-left ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></span>
    </button>
  );
}

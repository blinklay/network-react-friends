import { useContext, useEffect, useRef, useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import "./Header.css";
import { ThemeContext } from "../../App";

// export default function Header() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [activeMenu, setActiveMenu] = useState(false);

//   function showHeaderMenu() {
//     setActiveMenu(true);
//   }

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header__wrapper">
//           <div className="header__logo logo">
//             <img
//               src={`./img/${theme === "light" ? "logo" : "logo-light"}.svg`}
//               alt="logo icon"
//             />
//           </div>
//           <div className={`header__settings ${activeMenu ? "active" : ""}`}>
//             <button
//               onClick={showHeaderMenu}
//               className="header__settings-btn"
//               aria-label="show settings"
//             ></button>
//           </div>

//           <div
//             className={`header__settings-menu header__menu ${
//               activeMenu ? "active" : ""
//             }`}
//           >
//             <p className="header__menu-title">Настройка приложения</p>

//             <ul className="header__menu-list">
//               <li className="header__menu-item">
//                 <Checkbox
//                   onClick={toggleTheme}
//                   active={theme === "dark" ? true : false}
//                 />
//                 <span>Темная тема</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeMenu, setActiveMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  function showHeaderMenu() {
    setActiveMenu(true);
  }

  function handleClickOutside(event) {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setActiveMenu(false);
    }
  }

  useEffect(() => {
    if (activeMenu) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [activeMenu]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo logo">
            <img
              src={`/img/${theme === "light" ? "logo" : "logo-light"}.svg`}
              alt="logo icon"
            />
          </div>
          <div className={`header__settings ${activeMenu ? "active" : ""}`}>
            <button
              ref={buttonRef}
              onClick={showHeaderMenu}
              className="header__settings-btn"
              aria-label="show settings"
            ></button>
          </div>

          <div
            ref={menuRef}
            className={`header__settings-menu header__menu ${
              activeMenu ? "active" : ""
            }`}
          >
            <p className="header__menu-title">Настройка приложения</p>

            <ul className="header__menu-list">
              <li className="header__menu-item">
                <Checkbox onClick={toggleTheme} active={theme === "dark"} />
                <span>Темная тема</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div>
      <NavLink className={getNavLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
}

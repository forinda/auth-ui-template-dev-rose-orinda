import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex justify-center items-center py-4 px-3 borer-b">
      <nav className="space-x-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/role"}>Role</Link>
        <Link to={
            "/users"
        }>Users</Link>
      </nav>
    </div>
  );
}

export default Header;

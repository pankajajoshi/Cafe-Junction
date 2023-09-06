import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav>
      <Link to="/orders"> Order History </Link>
      <Link to="/orders/new"> New Order</Link>
      <span>Welcome, {props.user.name}</span>
    </nav>
  );
}

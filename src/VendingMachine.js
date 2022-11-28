import React from "react";
import { Link } from "react-router-dom";


/**
 * No props
 * No state
 *
 * returns Nav list for user to select chips, chocolate bar, or granola bar
 */
function VendingMachine() {
  return (
    <ul>
      <li><Link to="/chips">Chips</Link></li>
      <li><Link to="/chocolate">Chocolate</Link></li>
      <li><Link to="/granola-bar">Granola Bar</Link></li>
    </ul>
  );
}

export default VendingMachine;
import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function Menu() {
  const [dropdown, setDropdown] = useState(false);
  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="dropdown menu">
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
        <DropdownToggle>EN</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>FR</DropdownItem>
          <DropdownItem>DE</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Menu;

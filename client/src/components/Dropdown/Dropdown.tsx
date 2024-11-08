import * as React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuOpen, Close } from "@mui/icons-material"; // Import both icons

const options = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Order Products", path: "/orderproducts" },
  { label: "Contact Us", path: "/contact" },
];
const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = React.useState<string>("Home"); // Initial selected option
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: { label: string; path: string }) => {
    setSelectedOption(option.label);
    navigate(option.path);
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="menu"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={open ? handleClose : handleClick}
      >
        {open ? <Close /> : <MenuOpen />}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            selected={option.label === selectedOption}
            onClick={() => handleMenuItemClick(option)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

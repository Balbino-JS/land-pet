import React, { useState } from "react"
import Logo from "../assets/logo.jpg"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import { HiOutlineBars3 } from "react-icons/hi2"
import Drawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Sobre Nós", icon: <InfoIcon /> },
    { text: "Nosso trabalho", icon: <HomeWorkIcon /> },
    { text: "Avaliações", icon: <CommentRoundedIcon /> },
    { text: "Contato", icon: <PhoneRoundedIcon /> }
  ]

  return (
    <div className="home-container">
      <nav>
        <div className="nav-logo-container">
          <img
            src={Logo}
            alt="logo pet shop"
            style={{ width: "75px", height: "auto", borderRadius: "1rem" }}
          />
          <span className="texto-sobre-imagem">Pet Shop</span>
        </div>

        <div className="navbar-links-container">
          <a href="">Home</a>
          <a href="">Sobre Nós</a>
          <a href="">Nosso trabalho</a>
          <a href="">Avaliações</a>
          <a href="">Contato</a>
          <button className="primary-button">Fale conosco</button>
        </div>

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>

        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </div>
  )
}

export default Navbar
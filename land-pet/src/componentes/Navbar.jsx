import React from "react"
import Logo from "../assets/logo.jpg"
import HomeIcon from "@mui/icon-material/home"
import InfoIcon from "@mui/icons-material/Info"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import HiOutlineBars3 from "react-icon/hi2"
import Drawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptins =[
    {
        text:"Home",
        icon: <HomeIcon />,
    },
    {
        text: "Sobre Nós",
        icon: <InfoIcon />,
    },
    {
        text: "Nosso trabalho",
        icon: <HomeWorkIcon />,
    },
    {
        text: "Avaiações",
        icon: <CommentRoundedIcon />,
    },
    {
        text: "Contato",
        icon: <PhoneRoundedIcon />,
    }
  ]
  return (
    <div className='home-container'>
      <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="logo pet shop" style={{width: "100px", height: "auto",borderRadius: "10px"}} />
            <span className="texto-sobre-imagem">Pet Shop</span>
        </div>

        <div className="navbar-links-contatiner">
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
        onClose={() => 
        setOpenMenu(false)} 
        anchor="rigth">
            <Box
                sx={{width: 250}}
                role="presenttion"
                onClick={() => setOpenMenu(flse)}
                onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptins.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text}/>
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
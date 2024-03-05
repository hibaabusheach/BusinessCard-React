import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavItem from "../routes/NavItem";

const Sandbox = () => (
    <>
        <AppBar position="static" color="transparent">
            <Toolbar>
                <NavItem label="Hooks 🪝" to="hooks" color="black" ></NavItem>
                <NavItem label="LifeCycle Hooks 🪝" to="life-cycle-hooks" color="black" ></NavItem> 
                <NavItem label="Custom Hooks 🪝" to="custom-hooks" color="black" ></NavItem> 
                <NavItem label="Memoization 🤔" to="memoization" color="black" ></NavItem> 
                <NavItem label="context" to="context" color="black" ></NavItem> 
                <NavItem label="form" to="form" color="black" ></NavItem> 
            </Toolbar>
        </AppBar>

        <Outlet />
    </>
)

export default Sandbox;
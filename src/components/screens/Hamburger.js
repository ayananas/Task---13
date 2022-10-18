import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="/all">Menu</MenuLink>
                <MenuLink to="/">Cambervan</MenuLink>
                <MenuLink to="/calender">Calender</MenuLink>
                <MenuLink to="/note">Note</MenuLink>
                <MenuLink to="/chat">Chat</MenuLink>
            </Menu>
        </Nav>
    );
};

export default Navbar;

const MenuLink = styled(NavLink)`
    padding: 20px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease-in;
    font-size: 18px;
    font-weight: bold;
    &:hover {
        color: #000;
    }
`;

const Nav = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: transparent;
    position: absolute;
    top: 15px;
    left: 10px;
    @media all and (max-width: 640px) {
        top: 0;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media all and (max-width: 2500px) {
        overflow: hidden;
        flex-direction: column;
        height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
        background-color: #ff724a9e;
        z-index: 7;
    }
`;

const Hamburger = styled.div`
    display: none;

    flex-direction: column;
    cursor: pointer;

    span {
        height: 8px;
        width: 35px;
        background: #ff724a;
        margin-bottom: 4px;
        border-radius: 5px;
        @media all and (max-width: 480px) {
            width: 30px;
            height: 6px;
        }
    }

    @media all and (max-width: 768px) {
        display: flex;
        margin-top: 30px;
    }
`;

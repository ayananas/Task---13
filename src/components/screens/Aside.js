import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Aside() {
    return (
        <MenuList>
            <Item>
                <WidgetAll to="/all">
                    <Icon
                        src={require("../../assets/menu.svg").default}
                        alt="menu"
                    />
                </WidgetAll>
            </Item>
            <Item>
                <Widget to="/">
                    <Icon
                        src={require("../../assets/car.svg").default}
                        alt="trip"
                    />
                </Widget>
            </Item>
            <Item>
                <WidgetCalender to="/calender">
                    <Icon
                        src={require("../../assets/calender.svg").default}
                        alt="calender"
                    />
                </WidgetCalender>
            </Item>
            <Item>
                <WidgetNote to="/note">
                    <Icon
                        src={require("../../assets/save.svg").default}
                        alt="save"
                    />
                </WidgetNote>
            </Item>
            <Item>
                <WidgetChat to="/chat">
                    <Icon
                        src={require("../../assets/message.svg").default}
                        alt="message"
                    />
                </WidgetChat>
            </Item>
        </MenuList>
    );
}

export default Aside;

const MenuList = styled.ul`
    width: 30%;
    margin: 0 auto;
`;
const Item = styled.li`
    margin-bottom: 80px;
    position: relative;
    &:last-child {
        margin-bottom: 0;
    }
    &:first-child {
        margin-top: 10px;
        @media all and (max-width: 1280px) {
            margin-top: 45px;
        }
    }
    &::after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: -5px;
        width: 40px;
        height: 42px;
        background-color: #fe91727d;
        border-radius: 12px;
        z-index: -1;
        display: none;
        @media all and (max-width: 1280px) {
            bottom: -8px;
            left: -7px;
        }
    }
    &:hover::after {
        display: block;
    }
`;
const Widget = styled(Link)`
    width: 30px;
    display: block;
    @media all and (max-width: 1280px) {
        width: 25px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
`;
const WidgetAll = styled(Link)`
    width: 30px;
    display: block;
    @media all and (max-width: 1280px) {
        width: 25px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
`;
const WidgetCalender = styled(Link)`
    width: 30px;
    display: block;
    @media all and (max-width: 1280px) {
        width: 25px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
`;
const WidgetNote = styled(Link)`
    width: 30px;
    display: block;
    @media all and (max-width: 1280px) {
        width: 25px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
`;
const WidgetChat = styled(Link)`
    width: 30px;
    display: block;
    @media all and (max-width: 1280px) {
        width: 25px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
`;
const Icon = styled.img`
    display: block;
    width: 100%;
    filter: grayscale();
    &:hover {
        filter: none;
    }
`;

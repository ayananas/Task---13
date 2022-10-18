import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Aside from "./Aside";

function All() {
    return (
        <>
            <Navbar />
            <SubContainer>
                <MenuBar>
                    <Aside />
                </MenuBar>
                <Container>
                    <MenuImage>
                        <MenuImg
                            src={require("../../assets/menu-image.jpg")}
                            alt="chat"
                        />
                    </MenuImage>
                </Container>
            </SubContainer>
        </>
    );
}

export default All;

const SubContainer = styled.section`
    display: flex;
`;
const MenuBar = styled.aside`
    width: 7%;
    @media all and (max-width: 1080px) {
        width: 8%;
    }
    @media all and (max-width: 980px) {
        width: 15%;
    }
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const Container = styled.section`
    width: 93%;
    background: #ebebeb;
    display: flex;
    padding: 20px 25px;
    @media all and (max-width: 1080px) {
        padding: 20px;
    }
    @media all and (max-width: 980px) {
        display: block;
        width: 85%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const MenuImage = styled.div`
    width: 100%;
`;
const MenuImg = styled.img`
    width: 100%;
    display: block;
    border-radius: 15px;
`;

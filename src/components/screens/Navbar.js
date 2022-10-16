import React from "react";
import styled from "styled-components";

function Navbar() {
    return (
        <Header>
            <MobileMenu>
                <MenuImg
                    alt="menu"
                    src={require("../../assets/mobile-menu.png")}
                />
            </MobileMenu>
            <LeftContainer>
                <Heading>My Cambervan</Heading>
                <Form>
                    <Input type="text" placeholder="Search cambervan..." />
                    <Search>
                        <SearchImage
                            src={require("../../assets/search.svg").default}
                            alt="search"
                        />
                    </Search>
                </Form>
            </LeftContainer>
            <RightContainer>
                <Avatar>
                    <AvatarImage
                        src={require("../../assets/login-avatar.jpg")}
                        alt="avatar"
                    />
                </Avatar>
                <Details>
                    <Name>Aria zidaniro</Name>
                    <Drop>
                        <UserName>@danikuillustrator</UserName>
                        <Arrow>
                            <ArrowImage
                                src={require("../../assets/arrow.svg").default}
                                alt="arrow"
                            />
                        </Arrow>
                    </Drop>
                </Details>
            </RightContainer>
        </Header>
    );
}

export default Navbar;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 0 180px;
    height: 150px;
    @media all and (max-width: 1440px) {
        height: 120px;
    }
    @media all and (max-width: 1380px) {
        padding-left: 140px;
    }
    @media all and (max-width: 1280px) {
        padding-left: 50px;
        padding-right: 40px;
    }
    @media all and (max-width: 768px) {
        padding-left: 20px;
        padding-right: 0px;
    }
    @media all and (max-width: 640px) {
        height: 85px;
    }
`;
const LeftContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    @media all and (max-width: 1280px) {
        width: 73%;
    }
`;
const Heading = styled.h1`
    font-size: 35px;
    font-family: "LatoBold";
    @media all and (max-width: 1380px) {
        font-size: 32px;
    }
    @media all and (max-width: 768px) {
        width: 89%;
        text-align: right;
    }
    @media all and (max-width: 640px) {
        font-size: 30px;
    }
`;
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    background: #9a9a9a37;
    padding: 18px 30px;
    width: 70%;
    border-radius: 15px;
    @media all and (max-width: 1440px) {
        width: 65%;
    }
    @media all and (max-width: 1280px) {
        padding: 15px 25px;
        width: 60%;
    }
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const Input = styled.input`
    font-family: "LatoBold";
    font-size: 18px;
    opacity: 0.7;
`;
const Search = styled.div`
    width: 20px;
`;
const SearchImage = styled.img`
    display: block;
    width: 100%;
`;
const RightContainer = styled.div`
    display: flex;
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const Avatar = styled.div`
    width: 55px;
    margin-right: 8px;
`;
const AvatarImage = styled.img`
    display: block;
    width: 100%;
    overflow: hidden;
    border-radius: 50%;
`;
const Details = styled.div``;
const Name = styled.h4`
    font-family: "LatoBold";
    margin-bottom: 5px;
`;
const Drop = styled.div`
    display: flex;
`;
const UserName = styled.blockquote`
    opacity: 0.4;
    font-family: "LatoBold";
`;
const Arrow = styled.div`
    width: 25px;
    margin-left: 8px;
`;
const ArrowImage = styled.img`
    display: block;
    width: 100%;
`;
const MobileMenu = styled.div`
    display: none;
    width: 11%;
    @media all and (max-width: 768px) {
        display: block;
    }
`;
const MenuImg = styled.img`
    display: block;
    width: 100%;
`;

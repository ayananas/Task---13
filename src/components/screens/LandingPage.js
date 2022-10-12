import React from "react";
import styled from "styled-components";

function LandingPage() {
  return (
    <MainContainer>
      <Header>
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
      <SubContainer>
        <MenuBar>
          <MenuList>
            <Item></Item>
          </MenuList>
        </MenuBar>
        <Container></Container>
      </SubContainer>
    </MainContainer>
  );
}

export default LandingPage;

const MainContainer = styled.section``;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 0 180px;
  height: 150px;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;
const Heading = styled.h1`
  font-size: 35px;
  font-family: "LatoBold";
  margin-right: 50px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  background: #9a9a9a37;
  padding: 18px 30px;
  width: 70%;
  border-radius: 15px;
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
const SubContainer = styled.section``;
const MenuBar = styled.aside``;
const MenuList = styled.ul``;
const Item = styled.li``;
const Container = styled.section``;

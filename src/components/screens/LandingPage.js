import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <SubContainer>
        <MenuBar>
          <MenuList>
            <Item>
              <Widget>
                <Icon
                  src={require("../../assets/menu.svg").default}
                  alt="menu"
                />
              </Widget>
            </Item>
            <Item>
              <Widget>
                <Icon
                  src={require("../../assets/car.svg").default}
                  alt="trip"
                />
              </Widget>
            </Item>
            <Item>
              <Widget>
                <Icon
                  src={require("../../assets/calender.svg").default}
                  alt="calender"
                />
              </Widget>
            </Item>
            <Item>
              <Widget>
                <Icon
                  src={require("../../assets/save.svg").default}
                  alt="save"
                />
              </Widget>
            </Item>
            <Item>
              <Widget>
                <Icon
                  src={require("../../assets/message.svg").default}
                  alt="message"
                />
              </Widget>
            </Item>
          </MenuList>
        </MenuBar>
        <Container></Container>
      </SubContainer>
    </>
  );
}

export default LandingPage;

const SubContainer = styled.section`
  display: flex;
`;
const MenuBar = styled.aside`
  width: 7%;
  padding: 0 55px;
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
  &:first-child {
    margin-top: 10px;
  }
`;
const Widget = styled.div`
  width: 30px;
`;
const Icon = styled.img`
  display: block;
  width: 100%;
`;
const Container = styled.section`
  width: 93%;
  background: #ebebeb;
`;

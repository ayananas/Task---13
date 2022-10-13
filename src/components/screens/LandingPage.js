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
                                    src={
                                        require("../../assets/menu.svg").default
                                    }
                                    alt="menu"
                                />
                            </Widget>
                        </Item>
                        <Item>
                            <Widget>
                                <Icon
                                    src={
                                        require("../../assets/car.svg").default
                                    }
                                    alt="trip"
                                />
                            </Widget>
                        </Item>
                        <Item>
                            <Widget>
                                <Icon
                                    src={
                                        require("../../assets/calender.svg")
                                            .default
                                    }
                                    alt="calender"
                                />
                            </Widget>
                        </Item>
                        <Item>
                            <Widget>
                                <Icon
                                    src={
                                        require("../../assets/save.svg").default
                                    }
                                    alt="save"
                                />
                            </Widget>
                        </Item>
                        <Item>
                            <Widget>
                                <Icon
                                    src={
                                        require("../../assets/message.svg")
                                            .default
                                    }
                                    alt="message"
                                />
                            </Widget>
                        </Item>
                    </MenuList>
                </MenuBar>
                <Container>
                    <LeftContainer>
                        <ImageContainer>
                            <BigImage>
                                <ImgCon>
                                    <BigImg
                                        src={require("../../assets/big-image.jpg")}
                                        alt="big-image"
                                    />
                                </ImgCon>
                            </BigImage>
                            <ImageList>
                                <ContentImage>
                                    <ContentImg
                                        src={require("../../assets/top-image.jpg")}
                                        alt="top-image"
                                    />
                                </ContentImage>
                                <ContentImage>
                                    <ContentImg
                                        src={require("../../assets/bottom-image.jpg")}
                                        alt="bottom-image"
                                    />
                                </ContentImage>
                            </ImageList>
                        </ImageContainer>
                        <DetailsContainer>
                            <Left>
                                <Review>
                                    <Heading3>
                                        Snail the Bigger Campervan
                                    </Heading3>
                                    <ReviewPara>
                                        <Star>
                                            <StarImg
                                                alt="star"
                                                src={
                                                    require("../../assets/star.svg")
                                                        .default
                                                }
                                            />
                                        </Star>
                                        <Rating>4.8</Rating>
                                        available in{" "}
                                        <Bold> &nbsp; all location &nbsp;</Bold>
                                        except genuk
                                    </ReviewPara>
                                    <Description>
                                        All of our campervans for rent are
                                        fully- equiped custom-built,and hand-
                                        painted they,re perfect for long weekend
                                        getaways,cross country bucket- lisk road
                                        trips,and parks tours.
                                    </Description>
                                </Review>
                                <Include>
                                    <Headline>What's Include</Headline>
                                    <FacilityItems>
                                        <FacilityItem>
                                            <FacilityImage>
                                                <FacilityImg
                                                    alt="bed"
                                                    src={
                                                        require("../../assets/bed.svg")
                                                            .default
                                                    }
                                                />
                                            </FacilityImage>
                                            <FacilityContent>
                                                Queen bed fit out
                                            </FacilityContent>
                                        </FacilityItem>
                                        <FacilityItem>
                                            <FacilityImage>
                                                <FacilityImg
                                                    alt="room"
                                                    src={
                                                        require("../../assets/room.svg")
                                                            .default
                                                    }
                                                />
                                            </FacilityImage>
                                            <FacilityContent>
                                                Room single bed
                                            </FacilityContent>
                                        </FacilityItem>
                                        <FacilityItem>
                                            <FacilityImage>
                                                <FacilityImg
                                                    alt="House"
                                                    src={
                                                        require("../../assets/house.svg")
                                                            .default
                                                    }
                                                />
                                            </FacilityImage>
                                            <FacilityContent>
                                                Guest house
                                            </FacilityContent>
                                        </FacilityItem>
                                        <FacilityItem>
                                            <FacilityImage>
                                                <FacilityImg
                                                    alt="requirements"
                                                    src={
                                                        require("../../assets/plus.svg")
                                                            .default
                                                    }
                                                />
                                            </FacilityImage>
                                            <FacilityContent>
                                                Addictional requirements
                                            </FacilityContent>
                                        </FacilityItem>
                                        <FacilityItem>
                                            <FacilityImage>
                                                <FacilityImg
                                                    alt="charging"
                                                    src={
                                                        require("../../assets/battery.svg")
                                                            .default
                                                    }
                                                />
                                            </FacilityImage>
                                            <FacilityContent>
                                                Charging facility
                                            </FacilityContent>
                                        </FacilityItem>
                                        <FacilityItem>
                                            <FacilityImage>
                                                <FacilityImg
                                                    alt="Information"
                                                    src={
                                                        require("../../assets/info.svg")
                                                            .default
                                                    }
                                                />
                                            </FacilityImage>
                                            <FacilityContent>
                                                Information
                                            </FacilityContent>
                                        </FacilityItem>
                                    </FacilityItems>
                                </Include>
                            </Left>
                            <Right>
                                <Owner>
                                    <OwnerTitle>Owner</OwnerTitle>
                                    <ContactDetails>
                                        <OwnerImage>
                                            <OwnerImg
                                                alt="owner"
                                                src={require("../../assets/owner-avatar.jpg")}
                                            />
                                        </OwnerImage>
                                        <OwnerId>
                                            <OwnerName>
                                                Charlie Septimus
                                            </OwnerName>
                                            <OwnerUserName>
                                                @chatliesetimusvan
                                            </OwnerUserName>
                                        </OwnerId>
                                        <OwnerDetails>
                                            <OwnerMessage>
                                                <MessageImg
                                                    alt="message"
                                                    src={
                                                        require("../../assets/message-fill.svg")
                                                            .default
                                                    }
                                                />
                                            </OwnerMessage>
                                            <OwnerPhone>
                                                <PhoneImg
                                                    alt="phone"
                                                    src={
                                                        require("../../assets/call.svg")
                                                            .default
                                                    }
                                                />
                                            </OwnerPhone>
                                        </OwnerDetails>
                                    </ContactDetails>
                                </Owner>
                                <Insurance></Insurance>
                            </Right>
                        </DetailsContainer>
                    </LeftContainer>
                    <RightContainer></RightContainer>
                </Container>
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
    margin-bottom: 80px;
    position: relative;
    &:last-child {
        margin-bottom: 0;
    }
    &:first-child {
        margin-top: 10px;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: -5px;
        right: 0;
        width: 40px;
        height: 42px;
        background-color: #fe91727d;
        border-radius: 12px;
        z-index: -1;
        display: none;
    }
    &:hover::after {
        display: block;
    }
`;
const Widget = styled.div`
    width: 30px;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
    filter: grayscale();
    &:hover {
        filter: none;
    }
`;
const Container = styled.section`
    width: 93%;
    background: #ebebeb;
    display: flex;
    padding: 20px 25px;
`;
const LeftContainer = styled.div`
    width: 70%;
    background: #fff;
    padding: 20px 25px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`;
const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const BigImage = styled.div`
    width: 75%;
`;
const ImgCon = styled.div`
    width: 95%;
    height: 92%;
`;
const BigImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;
const ImageList = styled.ul`
    width: 25%;
`;
const ContentImage = styled.li`
    width: 100%;
    &:nth-child(2) {
        margin-top: 20px;
    }
`;
const ContentImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 15px;
`;
const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 48%;
`;
const Review = styled.div`
    margin-bottom: 30px;
`;
const Heading3 = styled.h3`
    font-size: 30px;
    font-family: "LatoBold";
    margin-bottom: 15px;
`;
const ReviewPara = styled.p`
    display: flex;
    align-items: center;
    font-family: "LatoBold";
    opacity: 0.5;
    margin-bottom: 18px;
`;
const Star = styled.div`
    margin-right: 8px;
`;
const StarImg = styled.img`
    display: block;
    width: 100%;
`;
const Rating = styled.span`
    font-size: 18px;
    margin-right: 12px;
    color: #000;
`;
const Bold = styled.span`
    color: #000;
`;
const Description = styled.p`
    opacity: 0.7;
    font-family: "LatoBold";
    width: 70%;
`;
const Include = styled.div``;
const Headline = styled.h4`
    font-size: 20px;
    font-family: "LatoBold";
    opacity: 0.8;
    margin-bottom: 20px;
`;
const FacilityItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const FacilityItem = styled.li`
    display: flex;
    align-items: center;
    width: 48%;
    margin-bottom: 10px;
`;
const FacilityImage = styled.div`
    margin-right: 10px;
    background-color: #fe917230;
    padding: 8px;
    border-radius: 10px;
`;
const FacilityImg = styled.img`
    display: block;
    width: 100%;
`;
const FacilityContent = styled.span`
    display: inline-block;
    font-family: "LatoBold";
`;
const Right = styled.div`
    width: 48%;
`;
const Owner = styled.div``;
const OwnerTitle = styled.h4``;
const ContactDetails = styled.div``;
const OwnerImage = styled.div``;
const OwnerImg = styled.img``;
const OwnerId = styled.div``;
const OwnerName = styled.h2``;
const OwnerUserName = styled.blockquote``;
const OwnerDetails = styled.div``;
const OwnerMessage = styled.div``;
const MessageImg = styled.img``;
const OwnerPhone = styled.div``;
const PhoneImg = styled.img``;
const Insurance = styled.div``;
const RightContainer = styled.div`
    width: 30%;
`;

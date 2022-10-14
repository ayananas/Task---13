import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function LandingPage() {
    const [select, setSelect] = useState("betterPriceOnly");
    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelect(value);
    };
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
                                <Insurance>
                                    <InsuranceHeading>
                                        Insurance Options
                                    </InsuranceHeading>
                                    <Item1>
                                        <RadioButton
                                            type="radio"
                                            name="radio"
                                            value="No Insurance"
                                            checked={select === "No Insurance"}
                                            onChange={(event) =>
                                                handleSelectChange(event)
                                            }
                                        />
                                        <RadioButtonLabel />
                                        <InsurePolicy>
                                            <InsuranceLeft>
                                                <Insure>No Insurance</Insure>
                                                <InsureContent>
                                                    No Insurance selected
                                                </InsureContent>
                                            </InsuranceLeft>
                                            <InsuranceRight>
                                                <Dollar>$0.00</Dollar>
                                                <DollarDay>$14/day</DollarDay>
                                            </InsuranceRight>
                                        </InsurePolicy>
                                    </Item1>
                                    <Item1>
                                        <RadioButton
                                            type="radio"
                                            name="radio"
                                            value="Collision protection"
                                            checked={
                                                select ===
                                                "Collision protection"
                                            }
                                            onChange={(event) =>
                                                handleSelectChange(event)
                                            }
                                        />
                                        <RadioButtonLabel />
                                        <InsurePolicy>
                                            <InsuranceLeft>
                                                <Insure>
                                                    Collision protection
                                                </Insure>
                                                <InsureContent>
                                                    collision protection on
                                                    vechile only
                                                </InsureContent>
                                            </InsuranceLeft>
                                            <InsuranceRight>
                                                <Dollar>$0.00</Dollar>
                                                <DollarDay>$14/day</DollarDay>
                                            </InsuranceRight>
                                        </InsurePolicy>
                                    </Item1>
                                    <Item1>
                                        <RadioButton
                                            type="radio"
                                            name="radio"
                                            value="Third party"
                                            checked={select === "Third party"}
                                            onChange={(event) =>
                                                handleSelectChange(event)
                                            }
                                        />
                                        <RadioButtonLabel />
                                        <InsurePolicy>
                                            <InsuranceLeft>
                                                <Insure>Third party</Insure>
                                                <InsureContent>
                                                    3rd party liability
                                                    insurance only
                                                </InsureContent>
                                            </InsuranceLeft>
                                            <InsuranceRight>
                                                <Dollar>$0.00</Dollar>
                                                <DollarDay>$14/day</DollarDay>
                                            </InsuranceRight>
                                        </InsurePolicy>
                                    </Item1>
                                </Insurance>
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
    width: 42%;
`;
const Owner = styled.div`
    margin-bottom: 95px;
`;
const OwnerTitle = styled.h4`
    font-size: 25px;
    font-family: "LatoBold";
    margin-bottom: 12px;
`;
const ContactDetails = styled.div`
    display: flex;
    align-items: center;
`;
const OwnerImage = styled.div`
    width: 70px;
    margin-right: 15px;
`;
const OwnerImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`;
const OwnerId = styled.div``;
const OwnerName = styled.h2`
    font-size: 20px;
    font-family: "LatoBold";
    margin-bottom: 10px;
`;
const OwnerUserName = styled.blockquote`
    font-size: 18px;
    font-family: "LatoBold";
    opacity: 0.4;
`;
const OwnerDetails = styled.div`
    display: flex;
    margin-left: 80px;
`;
const OwnerMessage = styled.div`
    width: 50px;
    margin-right: 12px;
    background: #ff724a66;
    padding: 10px;
    border-radius: 15px;
`;
const MessageImg = styled.img`
    display: block;
    width: 100%;
`;
const OwnerPhone = styled.div`
    width: 50px;
    background: #379e635e;
    padding: 10px;
    border-radius: 15px;
`;
const PhoneImg = styled.img`
    display: block;
    width: 100%;
`;
const Insurance = styled.div``;
const InsuranceHeading = styled.h4`
    margin-bottom: 40px;
    font-size: 20px;
    font-family: "LatoBold";
`;
const RightContainer = styled.div`
    width: 30%;
`;
const Item1 = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
    position: relative;
`;

const RadioButtonLabel = styled.label`
    position: absolute;
    top: 25%;
    left: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    &:hover ~ ${RadioButtonLabel} {
        background: #bebebe;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            margin: 6px;
            background: #eeeeee;
        }
    }
    ${(props) =>
        props.checked &&
        ` 
    &:checked + ${RadioButtonLabel} {
      background: #fff;
      border: 2px solid grey;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin: 3px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: #FF724A;
      }
    }
  `}
`;
const InsurePolicy = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    width: 80%;
    justify-content: space-between;
`;
const InsuranceLeft = styled.div``;
const Insure = styled.span`
    display: block;
    font-family: "LatoBold";
`;
const InsureContent = styled.p`
    display: block;
    font-family: "LatoBold";
    opacity: 0.5;
    font-size: 15px;
`;
const InsuranceRight = styled.div`
    text-align: right;
`;
const Dollar = styled.span`
    display: block;
    font-family: "LatoBlack";
`;
const DollarDay = styled.p`
    display: block;
    font-family: "LatoBlack";
    opacity: 0.5;
	font-size: 15px;
`;

import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Radio from "./Radio";

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
                                        available in
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
                                    <OwnerDetails>
                                        <OwnerBio>
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
                                        </OwnerBio>
                                        <OwnerContactDetails>
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
                                        </OwnerContactDetails>
                                    </OwnerDetails>
                                </Owner>
                                <Insurance>
                                    <Radio />
                                </Insurance>
                            </Right>
                        </DetailsContainer>
                    </LeftContainer>
                    <RightContainer>
                        <Rent>
                            <RentHeader>Rent Details</RentHeader>
                            <RentItems>
                                <RentItem>
                                    <Up>Pick Up</Up>
                                    <Down>
                                        <LFT>Sampangan</LFT>
                                        <RGT>29/11/2021 - 07:00AM</RGT>
                                    </Down>
                                </RentItem>
                                <RentItem>
                                    <Up>Drop Off</Up>
                                    <Down>
                                        <LFT>Sumatra</LFT>
                                        <RGT>1/12/2021 - 09:00PM</RGT>
                                    </Down>
                                </RentItem>
                                <RentItem>
                                    <Up>Daily Rate</Up>
                                    <Down>
                                        <LFT>3 days@ $33.00</LFT>
                                        <RGT>$99.00</RGT>
                                    </Down>
                                </RentItem>
                            </RentItems>
                            <HR />
                            <RentChargeLists>
                                <RentChargeList>
                                    <Charge>Estimated Milage Charge</Charge>
                                    <Rate>$120.00</Rate>
                                </RentChargeList>
                                <RentChargeList>
                                    <Charge>No worries on the vechile</Charge>
                                    <Rate>$52.00</Rate>
                                </RentChargeList>
                                <RentChargeList>
                                    <Charge>Sales Tax</Charge>
                                    <Rate>$10.00</Rate>
                                </RentChargeList>
                                <RentChargeList>
                                    <LastCharge>Total</LastCharge>
                                    <LastRate>$151.00</LastRate>
                                </RentChargeList>
                            </RentChargeLists>
                            <RentButton>Rent Now</RentButton>
                        </Rent>
                        <MoreDetails>
                            <More>More Campervan</More>
                            <View>View more</View>
                        </MoreDetails>
                        <Last>
                            <LastImage>
                                <LastImg
                                    alt="image"
                                    src={require("../../assets/last-image.jpg")}
                                />
                            </LastImage>
                        </Last>
                    </RightContainer>
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
`;
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
const Widget = styled.div`
    width: 30px;
    @media all and (max-width: 1280px) {
        width: 25px;
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
const Container = styled.section`
    width: 93%;
    background: #ebebeb;
    display: flex;
    padding: 20px 25px;
    @media all and (max-width: 1080px) {
        padding: 20px;
    }
`;
const LeftContainer = styled.div`
    width: 70%;
    background: #fff;
    padding: 25px;
    padding-bottom: 20px;
    border-radius: 12px;
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
        position: relative;
        @media all and (max-width: 1280px) {
            margin-top: 11px;
        }
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            background: #312e2ec7;
            border-radius: 15px;
            height: 100%;
            margin: 0 auto;
            color: #fff;
        }
        &::after {
            content: "10+ Photos";
            position: absolute;
            top: 50%;
            left: 35%;
            color: #fff;
            font-family: "LatoBold";
            @media all and (max-width: 1440px) {
                top: 45%;
                left: 30%;
            }
            @media all and (max-width: 1280px) {
                top: 43%;
                left: 23%;
            }
        }
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
    @media all and (max-width: 1440px) {
        width: 48%;
    }
`;
const Review = styled.div`
    margin-bottom: 30px;
    @media all and (max-width: 1440px) {
        margin-bottom: 40px;
    }
`;
const Heading3 = styled.h3`
    font-size: 30px;
    font-family: "LatoBold";
    margin-bottom: 15px;
    @media all and (max-width: 1380px) {
        font-size: 27px;
    }
    @media all and (max-width: 1280px) {
        font-size: 23px;
    }
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
    @media all and (max-width: 1280px) {
        display: none;
    }
`;
const Description = styled.p`
    opacity: 0.7;
    font-family: "LatoBold";
    width: 70%;
    @media all and (max-width: 1440px) {
        width: 100%;
    }
    @media all and (max-width: 1380px) {
        width: 380px;
    }
    @media all and (max-width: 1280px) {
        display: none;
    }
`;
const Include = styled.div``;
const Headline = styled.h4`
    font-size: 20px;
    font-family: "LatoBold";
    opacity: 0.8;
    margin-bottom: 20px;
    @media all and (max-width: 1440px) {
        margin-bottom: 25px;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 35px;
        font-size: 25px;
    }
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
    @media all and (max-width: 1440px) {
        width: 50%;
        margin-bottom: 25px;
    }
    @media all and (max-width: 1280px) {
        width: 90%;
    }
`;
const FacilityImage = styled.div`
    margin-right: 10px;
    background-color: #fe917230;
    padding: 8px;
    border-radius: 10px;
    @media all and (max-width: 1280px) {
        width: 45px;
    }
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
    @media all and (max-width: 1280px) {
        width: 50%;
    }
`;
const Owner = styled.div`
    margin-bottom: 95px;
    @media all and (max-width: 1440px) {
        margin-top: 25px;
        margin-bottom: 100px;
    }
`;
const OwnerDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const OwnerTitle = styled.h4`
    font-size: 25px;
    font-family: "LatoBold";
    margin-bottom: 12px;
    @media all and (max-width: 1440px) {
        font-size: 28px;
    }
    @media all and (max-width: 1280px) {
        font-size: 25px;
    }
`;
const OwnerBio = styled.div`
    display: flex;
    width: 75%;
    align-items: center;
    @media all and (max-width: 1280px) {
        flex-wrap: wrap;
    }
`;
const OwnerImage = styled.div`
    width: 18%;
    margin-right: 10px;
    @media all and (max-width: 1440px) {
        width: 22%;
    }
    @media all and (max-width: 1280px) {
        width: 35%;
        margin-bottom: 10px;
    }
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
    @media all and (max-width: 1440px) {
        font-size: 18px;
        margin-bottom: 5px;
    }
    @media all and (max-width: 1280px) {
        font-size: 20px;
    }
`;
const OwnerUserName = styled.blockquote`
    font-size: 18px;
    font-family: "LatoBold";
    opacity: 0.4;
    @media all and (max-width: 1440px) {
        font-size: 16px;
    }
`;
const OwnerContactDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    @media all and (max-width: 1280px) {
        width: 38%;
    }
`;

const OwnerMessage = styled.div`
    width: 45%;
    background: #ff724a66;
    padding: 10px;
    border-radius: 15px;
    @media all and (max-width: 1440px) {
        width: 48%;
    }
`;
const MessageImg = styled.img`
    display: block;
    width: 100%;
`;
const OwnerPhone = styled.div`
    width: 45%;
    background: #379e635e;
    padding: 10px;
    border-radius: 15px;
    @media all and (max-width: 1440px) {
        width: 48%;
    }
`;
const PhoneImg = styled.img`
    display: block;
    width: 100%;
`;
const Insurance = styled.div``;
const RightContainer = styled.div`
    width: 30%;
    margin-left: 20px;
`;
const Rent = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 25px;
`;
const RentHeader = styled.h4`
    text-align: center;
    background: #ebebff;
    width: 40%;
    margin: 0 auto;
    padding: 18px;
    font-family: "LatoBlack";
    opacity: 0.9;
    font-size: 18px;
    border-radius: 25px;
    @media all and (max-width: 1440px) {
        width: 45%;
        padding: 14px;
    }
    @media all and (max-width: 1380px) {
        width: 50%;
    }
    @media all and (max-width: 1280px) {
        width: 65%;
        padding: 12px;
        font-size: 14px;
    }
`;
const RentItems = styled.ul`
    margin-top: 25px;
    @media all and (max-width: 1440px) {
        margin-top: 20px;
    }
`;
const RentItem = styled.li`
    margin-bottom: 24px;
    &:last-child div small {
        @media all and (max-width: 1280px) {
            display: block;
        }
    }
`;
const Up = styled.h5`
    font-family: "LatoBold";
    font-size: 19px;
    opacity: 0.7;
    margin-bottom: 14px;
    @media all and (max-width: 1440px) {
        margin-bottom: 10px;
        font-size: 18px;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 5px;
        font-size: 20px;
    }
`;
const Down = styled.div`
    display: flex;
    justify-content: space-between;
    opacity: 0.3;
`;
const LFT = styled.span`
    font-family: "LatoBold";
    font-size: 17px;
    display: block;
    @media all and (max-width: 1280px) {
        font-size: 16px;
    }
`;
const RGT = styled.small`
    font-family: "LatoBold";
    font-size: 17px;
    display: block;
    @media all and (max-width: 1280px) {
        display: none;
    }
`;
const HR = styled.hr`
    border-top: 1px solid #000;
    margin-bottom: 25px;
    @media all and (max-width: 1440px) {
        margin-top: 40px;
    }
    @media all and (max-width: 1280px) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;
const RentChargeLists = styled.ul``;
const RentChargeList = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    @media all and (max-width: 1440px) {
        margin-bottom: 12px;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 30px;
    }
    &:last-child {
        margin-top: 35px;
        @media all and (max-width: 1440px) {
            margin-top: 30px;
        }
    }
`;
const Charge = styled.p`
    font-family: "LatoBold";
    opacity: 0.4;
    @media all and (max-width: 1280px) {
        line-height: 1em;
    }
`;
const Rate = styled.span`
    display: block;
    font-family: "LatoBold";
    opacity: 0.6;
`;
const LastCharge = styled.p`
    font-family: "LatoBold";
    opacity: 1;
    font-size: 20px;
`;
const LastRate = styled.span`
    display: block;
    font-family: "LatoBold";
    opacity: 0.8;
    font-size: 18px;
`;
const RentButton = styled.div`
    text-align: center;
    background: #ff724a;
    width: 95%;
    margin: 0 auto;
    margin-top: 40px;
    padding: 18px;
    font-family: "LatoBold";
    opacity: 0.9;
    font-size: 17px;
    color: #fff;
    border-radius: 25px;
    @media all and (max-width: 1440px) {
        margin-top: 30px;
    }
    @media all and (max-width: 1280px) {
        width: 90%;
        padding: 15px;
    }
`;
const MoreDetails = styled.div`
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1440px) {
        margin: 15px 0;
    }
    @media all and (max-width: 1280px) {
        margin: 33px 0;
    }
`;
const More = styled.small`
    font-family: "LatoBold";
    font-size: 20px;
    opacity: 0.8;
`;
const View = styled.small`
    font-family: "LatoBold";
    font-size: 15px;
    opacity: 0.6;
`;
const Last = styled.div``;
const LastImage = styled.div`
    width: 99%;
    margin: 0 auto;
`;
const LastImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

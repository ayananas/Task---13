import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App.css";

function Sliderr() {
    const datas = [
        {
            id: 1,
            image: require("../../assets/van/van-1.jpg"),
        },
        {
            id: 2,
            image: require("../../assets/van/van-2.jpg"),
        },
        {
            id: 3,
            image: require("../../assets/van/van-3.jpg"),
        },
        {
            id: 4,
            image: require("../../assets/van/van-4.jpg"),
        },
        {
            id: 5,
            image: require("../../assets/van/van-5.jpg"),
        },
        {
            id: 6,
            image: require("../../assets/van/van-6.jpeg"),
        },
        {
            id: 7,
            image: require("../../assets/van/van-7.jpg"),
        },
        {
            id: 8,
            image: require("../../assets/van/van-8.jpg"),
        },
        {
            id: 9,
            image: require("../../assets/van/van-9.jpg"),
        },
        {
            id: 10,
            image: require("../../assets/van/van-10.jpg"),
        },
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {datas.map((item) => (
                <Container key={item.id}>
                    <SliderImage>
                        <SliderImg src={item.image} />
                    </SliderImage>
                </Container>
            ))}
        </Slider>
    );
}

export default Sliderr;
const Container = styled.div`
    padding: 50px;
    z-index: 9;
`;
const SliderImage = styled.div`
    width: 60%;
    margin: 0 auto;
    background-color: black;
    @media all and (max-width: 1080px) {
        width: 25%;
    }
    @media all and (max-width: 980px) {
        width: 30%;
    }
    @media all and (max-width: 640px) {
        width: 75%;
    }
    @media all and (max-width: 480px) {
        width: 35%;
    }
`;
const SliderImg = styled.img`
    display: block;
    width: 100%;
`;

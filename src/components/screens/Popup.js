import React from "react";
import Sliderr from "./Sliderr";
import styled from "styled-components";

function Popup() {
    return (
        <Div>
            <Sliderr />
        </Div>
    );
}

export default Popup;

const Div = styled.div`
    width: 500px;
    height: 500px;
    border: 2px solid #fff;
    background: #4b4b4ba8;
    border-radius: 20px;
`;

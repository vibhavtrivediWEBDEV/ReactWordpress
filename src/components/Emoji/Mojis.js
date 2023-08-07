import React from "react";
import styled from "styled-components";
import Memoji from "./Emoji";


export default function Mojis() {
  return (
    <Wrapper>
      <Memoji />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 400vh;

  > div {
    width: 100vw;
    height: 400vh;

    > div {
      top: 50%;
      left: 0;
      right: 0;
      position: fixed;
      display: flex;
      justify-content: center;
      align-content: center;
      transform: translateY(-50%);
    }
  }
`;

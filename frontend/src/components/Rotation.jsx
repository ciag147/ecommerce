import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: url("../img/pexels-eberhard-grossgasteiger-1421903.jpg");
  background-size: cover;
  overflow: hidden;
`;

const Box = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(0deg);
`;

const BoxSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
  -webkit-box-reflect: below 0px
    linear-gradient(transparent, transparent, #0004);
`;

const BoxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

const Underline = styled.div`
  width: 20%;
  height: 4px;
  background-color: teal;
  position: absolute;
  bottom: -5px;
`;

const Big = styled.div`
  display: flex;
  padding: 20px 0px 0px 20px;
`;

const Rotation = () => {
  const handleMouseMove = (e) => {
    const x = e.clientX / 3;
    boxRef.current.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  };

  const boxRef = React.useRef();

  return (
    <div>
      <Big>
        <Title>
          Impressive Styles
          <Underline />
        </Title>
      </Big>
      <Container onMouseMove={handleMouseMove}>
        <Box ref={boxRef}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <BoxSpan key={i} style={{ "--i": i }}>
              <BoxImage src={`../img/image${i}.jpg`} alt="" />
            </BoxSpan>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Rotation;

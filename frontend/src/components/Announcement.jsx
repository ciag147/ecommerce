import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  /* position: fixed;
  top: 0;
  z-index: 5;
  width: 100%; */

  ${mobile({ height: "20px", fontSize: "10px" })}
`;

const Announcement = () => {
  return (
    <Container>
      Siêu Sale Giảm Đến 50%. Đảm Bảo Chính Hãng. Giá Rẻ Vô Địch.
    </Container>
  );
};

export default Announcement;

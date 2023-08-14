import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Annoucement = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Container = styled.div`
  height: 90px;
  background-color: #e9f5f5;
  position: sticky; // Thêm dòng này
  top: 0; // Để cố định Navbar ở trên top
  left: 0;
  right: 0; // Đảm bảo chiều rộng bằng màn hình
  z-index: 100; // Đảm bảo nằm trên cùng để không bị che phủ

  /* position: fixed;
  top: 40px;
  z-index: 5;
  width: 100%; */

  ${mobile({ height: "80px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;

  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  text-decoration: none;
`;
const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ marginLeft: "10px", fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 35px;
  font-weight: 700;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  margin-left: 25px;
`;

const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  margin-left: 20px;

  ${mobile({ justifyContent: "center", marginLeft: 0 })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout(dispatch);
    // Gọi hàm đăng xuất và xử lý hành động cần thiết sau khi đăng xuất
  };

  return (
    <Container>
      <Annoucement>
        Siêu Sale Giảm Đến 50%. Đảm Bảo Chính Hãng. Giá Rẻ Vô Địch.
      </Annoucement>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>CIAG.COM</Logo>
          </StyledLink>
        </Center>
        <Right>
          {currentUser ? (
            <>
              <Logout>Welcome, {currentUser.username}</Logout>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Link>
              <LogoutBtn onClick={handleLogout}>
                <ExitToAppOutlinedIcon />
              </LogoutBtn>
            </>
          ) : (
            <Sign>
              <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </Sign>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

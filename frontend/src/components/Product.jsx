import {
  Favorite,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    cursor: pointer;
    color: red;
  }
  svg {
    /* Áp dụng transition cho svg (Favorite icon) */
    transition: color 0.3s ease; /* Thêm transition cho thuộc tính color */
  }
`;

const Product = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon onClick={handleFavoriteClick}>
          {isFavorite ? (
            <Favorite style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

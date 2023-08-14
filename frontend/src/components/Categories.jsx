import { styled } from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 0px 20px 20px 20px;

  ${mobile({ padding: "0px", flexDirection: "column" })}
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

const Categories = () => {
  return (
    <div>
      <Big>
        <Title>
          Special Collections
          <Underline />
        </Title>
      </Big>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;

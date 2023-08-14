import {
  Copyright,
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  display: flex;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: teal;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 20px;
  margin-top: 15px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  color: teal;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: teal;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CIAG.COM</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        <Sign>
          <Copyright style={{ marginRight: "10px" }} />
          Powered by Ciag
        </Sign>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          153AB Nam kỳ khởi nghĩa, P.6, Q.3, Tp.HCM
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          028 39.303.753
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          ciagdev@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

import React from "react";
import school_logo from "./school_logo.png";
import styled from "styled-components";
import { pageLinks } from "../data/pageLinks";

const NavbarTwo = () => {
  return (
    <Wrapper>
      <Logo src={school_logo} alt="Logo" />
      <Links>
        {pageLinks.map((pageLink) => (
          <PageLink key={pageLink.id}>{pageLink.name}</PageLink>
        ))}
      </Links>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 120px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
`;
const Logo = styled.img`
  width: 75px;
  height: 75px;
  cursor: pointer;
  object-fit: cover;
`;
const Links = styled.div`
  display: flex;
`;
const PageLink = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  height: 100%;
  padding: 25px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #141414;
  margin-right: 40px;
  transition: all 0.5s linear;
  &:hover {
    opacity: 0.8;
  }
`;
export default NavbarTwo;

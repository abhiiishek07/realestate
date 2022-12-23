import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      Made with ❤️ by {"   "}
      <h3>
        <a
          href="https://www.linkedin.com/in/abhishek-k-96abb6210/"
          target="_blank"
          rel="noreferrer"
        >
          Abhishek
        </a>
      </h3>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b8b6c1;
  margin-top: 2rem;
  a {
    text-decoration: none;
    padding-left: 0.5rem;
  }
`;

export default Footer;

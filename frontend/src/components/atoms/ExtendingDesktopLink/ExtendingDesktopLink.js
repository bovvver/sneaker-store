import React from "react";
import { Wrapper, ExtendButton, LinkWrapper } from "./ExtendingDesktopLink.styles";

const ExtendingDesktopLink = () => {
  return (
    <Wrapper>
      <ExtendButton>test</ExtendButton>
      <LinkWrapper>
        <a href="/test">profile</a>
        <a href="/test">history</a>
      </LinkWrapper>
    </Wrapper>
  );
};

export default ExtendingDesktopLink;

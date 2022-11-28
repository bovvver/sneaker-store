import React from "react";
import { Wrapper, Message } from "./NotFound.styles";

const NotFound = () => {
  return (
    <Wrapper>
      <Message>404 Page Not Found.</Message>
      <Message>Looks like you are lost! 👟</Message>
    </Wrapper>
  );
};

export default NotFound;

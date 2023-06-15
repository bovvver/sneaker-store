import React from 'react'
import { Wrapper } from './LoadingScreen.styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
  return (
    <Wrapper>
    <FontAwesomeIcon icon={faShoePrints} />
    </Wrapper>
  )
}

export default Loading
import React from 'react'
import { Wrapper } from './ErrorPage.styles'
import SiteTtile from '../../components/atoms/SiteTitle/SiteTitle';

const ErrorPage = () => {
  return (
    <Wrapper>
        <h2>Something went wrong...</h2>
        <p>We are sorry. Come back to us later.</p>
        <SiteTtile />
    </Wrapper>
  )
}

export default ErrorPage
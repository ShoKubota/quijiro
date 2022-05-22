import React, { Fragment } from 'react';
import styled from 'styled-components';

//images
import MainLogo from '../images/logo.png';

import { Link } from "react-router-dom";

//components
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  padding-bottom: 30px;
  background-color: #FAFA65; 
  min-height: 100vh;
  text-align: center;
`;

const MainLogoWapper = styled.img`
  margin: 250px 0px 50px 0px;
  width: 40%;
`;

const CenterButton = styled(Button)`
  display: block;
  margin: 0px auto;
  background: #8A77B7;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  width: 200px;
  padding: 10px 30px;
  box-shadow: 0px 2px 2px #C9CACA;
  &:hover {
    background-color: #583F99;
  }
`;

export const StaticPage = () => {
  return(
  <>
    <Wrapper>
      <MainLogoWapper src={MainLogo} alt='mainlogo'/>
      <Link to={`/questions`} style={{ textDecoration: 'none' }}>
        <CenterButton>
          さっそく始める
        </CenterButton>
      </Link>
    </Wrapper>
  </>
  )
}
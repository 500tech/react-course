import React from 'react';
import Spinner from './Spinner';
import styled from 'styled-components';

const withSpinner = (Comp) => (props) => (
  <RelativeContainer>
    <Comp {...props} />
    {props.isLoading && <Spinner />}
  </RelativeContainer>
);

export default withSpinner;

const RelativeContainer = styled.div`
  position: relative;
`;

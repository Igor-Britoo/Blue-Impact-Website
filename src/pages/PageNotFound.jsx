import React from 'react';
import StaticHeader from '../components/StaticHeader';
import { Main, Title, Subtitle, Text } from '../components/styled/PageNotFoundComponents';

const PageNotFound = () => {
  return (
    <>
      <StaticHeader />
      <Main>
        <div>
          <Title>404</Title>
          <Subtitle>Page Not Found</Subtitle>
        </div>
        <Text>Sorry, the page you're looking for doesn't exist.</Text>
      </Main>
    </>
  );
};

export default PageNotFound;
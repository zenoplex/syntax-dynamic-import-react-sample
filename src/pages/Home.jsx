// @flow
import React from 'react';
import AsyncContainerComponent from 'components/AsyncContainerComponent';
import CommonComponent from 'components/CommonComponent';

const Home = () =>
  <div>
    <h1>HOME</h1>

    <CommonComponent />
    <AsyncContainerComponent />
  </div>;

export default Home;

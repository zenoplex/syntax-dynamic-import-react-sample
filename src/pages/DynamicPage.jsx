// @flow
import React from 'react';
import AsyncContainerComponent from 'components/AsyncContainerComponent';
import CommonComponent from 'components/CommonComponent';

const DynamicPage = () =>
  <div>
    <h1>DynamicPage</h1>

    <CommonComponent />
    <AsyncContainerComponent />
  </div>;

export default DynamicPage;

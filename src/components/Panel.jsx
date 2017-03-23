// @flow
import React from 'react';
import { compose, withState } from 'recompose';
import { didMount } from 'highorders/lifecycle';
import R from 'ramda';

type Props = {}
type ComposedProps = { AsyncModule: any } & Props;

const Panel = ({ AsyncModule }: ComposedProps) =>
  <div>
    <div>PANEL</div>

    {AsyncModule &&
      <AsyncModule />
    }
  </div>;

export default compose(
  withState('AsyncModule', 'updateAsyncModule'),
  didMount(({ AsyncModule, updateAsyncModule }) => {
    R.cond([
      [R.isNil, async () => {
        // $FlowFixMe
        const module = await import('components/DynamicComponent');
        updateAsyncModule(() => module.default);
      }],
    ])(AsyncModule);
  }),
)(Panel);

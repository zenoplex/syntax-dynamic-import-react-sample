// @flow
import React from 'react';
import assert from 'power-assert';
import { mount } from 'enzyme';

describe('test', () => {
  it('should pass', () => {
    const wrapper = mount(<div />);
    assert(wrapper.find('div').length > 0);
  });
});

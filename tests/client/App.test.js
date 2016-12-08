import {expect} from 'chai';
import React from 'react';
import App from '../../client/components/App.jsx'
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

describe('<App /> test suite', () => {
  it('asserts that component did mount is called once', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />)
    expect(App.prototype.componentDidMount.calledOnce).to.be.true;
  })
})

// Test initial state
// Shallow render and expect some elements
// Mount with data and check for expected elements on injection of data-toggle
// Simmulate button click and confirm right action is calles

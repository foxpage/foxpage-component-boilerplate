import React from 'react';
import { shallow } from 'enzyme';
import { random } from 'faker';
import assert from 'power-assert';
import HelloWorld from '../src/index';

describe('hello-world', () => {
  it('custom text', () => {
    const words = random.words();
    const el = shallow(<HelloWorld text={words} />);
    assert(el.text().includes(words));
  });
});

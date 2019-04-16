import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import App from './App';

describe('<App />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('is mocking me', () => {
    // on surface mock looks the same as 
    // const mock = () => {}; 
    // this is a mock function

    // there is almost a "secret part of this function"
    // as the below works differently from the above mock function
    // think of it as a totalitarian state
    const mock = jest.fn()


    const result = mock();
    mock();
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();

    // you can get even more detailed
    expect(mock).toHaveBeenCalledTimes(2);
  });

  it('it is mocking me even more', () => {
      const mock = jest.fn(() => 'hello')

      const result = mock('smile');

      expect(result).toBe('hello')
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock).toHaveBeenCalledWith('smile');
  })

  it('update message when speak is clicked', () => {
    const {getByText, queryByText} = render(<App />)

    getByText(/Nothing to say/i)

    expect(queryByText(/you are not mocking me!/i))
    .toBeFalsy();
  })

  it('message is updated when speak is clicked', () => {
    // const mock = jest.fn(() => '')
    const {getByText} = render(<App />)

    const button = getByText(/speak/i)

    fireEvent.click(button)

   getByText(/you are not mocking me!/i);

  })

});

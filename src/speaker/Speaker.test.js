import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import Speaker from './Speaker';

describe('<Speaker />', () => {
    it('should match the snapshot with a message', () => {
        const tree = renderer.create(<Speaker />)

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it.skip('second snapshot message', () => {
        const tree = renderer.create(<Speaker />)

        
    });

    it('should call the speak function on click ', () => {

        const speakMock = jest.fn();

            // get by text
const { getByText } = render(<Speaker speak={speakMock}/>)

const speakButton = getByText(/speak/i)

fireEvent.click(speakButton);

expect(speakMock).toHaveBeenCalled()
    });
});
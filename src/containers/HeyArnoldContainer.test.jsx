import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldContainer from './HeyArnoldContainer';
import { MemoryRouter } from 'react-router-dom';

describe('Hey Arnold List', () => {
    it('should render a list of characters on the page', async () => {
        const component = render(
            <MemoryRouter>
                <HeyArnoldContainer />
            </MemoryRouter>);
        screen.getByAltText('loading spinner');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).not.toBeEmptyDOMElement();
        expect(component).toMatchSnapshot();
    });
});
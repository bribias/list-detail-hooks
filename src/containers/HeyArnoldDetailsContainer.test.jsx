import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldDetailsContainer from './HeyArnoldDetailsContainer';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/:id', (req, res, ctx) => {
        return res(ctx.json());
    })
);

describe('hey arnold detail container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('should render one character', async () => {
        const component = render(
            <MemoryRouter>
                <HeyArnoldDetailsContainer />
            </MemoryRouter>);

        screen.getAllByAltText('loading spinner');
        
        const link = await screen.findByRole('link');
        expect(link).not.toBeEmptyDOMElement();
        expect(component).toMatchSnapshot();
    });
});
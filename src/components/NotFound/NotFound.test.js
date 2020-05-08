import React from 'react'
import NotFound from './NotFound'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<NotFound />', () => {
    let component
    const mockChangeMenu = jest.fn();

    beforeEach(() => {
      component = render(
        <NotFound  
            status={1} 
            selected={'local'} 
            changeMenu={mockChangeMenu}
            />,
      )
    })
  
    afterEach(cleanup)

    it('Displays NewsArticle info correctly', () => {
        expect(component.getByText('Nothing found!')).toBeInTheDocument();
    })
})
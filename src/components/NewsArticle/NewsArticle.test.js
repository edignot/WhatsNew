import React from 'react'
import NewsArticle from './NewsArticle'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<NewsArticle />', () => {
    let component

    beforeEach(() => {
      component = render(
        <NewsArticle  
            description={'description'}
            headline={'headline'}
            />,
      )
    })
  
    afterEach(cleanup)

    it('Displays NewsArticle info correctly', () => {
        expect(component.getByText('description')).toBeInTheDocument();
        expect(component.getByText('headline')).toBeInTheDocument();
        expect(component.getByText('READ MORE')).toBeInTheDocument();
    })
})
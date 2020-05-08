import React from 'react'
import NewsArticle from './NewsArticle'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<NewsArticle />', () => {
    let component

    beforeEach(() => {
      component = render(
        <NewsArticle
            id={1}  
            headline={'headline'}
            img={'img'}
            description={'description'}
            url={'url'}
            />
      )
    })
  
    afterEach(cleanup)

    it('Displays NewsArticle info correctly', () => {
        expect(component.getByText('headline')).toBeInTheDocument()
        expect(component.getByTestId('img')).toBeInTheDocument();
        expect(component.getByText('description')).toBeInTheDocument()
        expect(component.getByText('READ MORE')).toBeInTheDocument()
        expect(component.getByTestId('url')).toBeInTheDocument();
    })
})
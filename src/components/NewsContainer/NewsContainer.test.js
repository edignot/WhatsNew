import React from 'react'
import NewsContainer from './NewsContainer'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<NewsContainer />', () => {
    let component

    beforeEach(() => {
      component = render(
        <NewsContainer  
            news={[{
                id:1, 
                headline:'headline', 
                description: 'description', 
                url: 'url'
            }]}
            status={1}
            />,
      )
    })
  
    afterEach(cleanup)

    it('Displays NewsArticle info correctly inside NewsContainer', () => {
        expect(component.getByText('description')).toBeInTheDocument();
        expect(component.getByText('headline')).toBeInTheDocument();
    })

    it('Returns className container if status is >= 1', () => {
        
    })
})
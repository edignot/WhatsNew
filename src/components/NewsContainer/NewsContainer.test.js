import React from 'react'
import NewsContainer from './NewsContainer'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<NewsContainer />', () => {
    let component

    beforeEach(() => {
      component = render(
        <NewsContainer  
            news={[
                {
                    id:1, 
                    headline:'headline', 
                    description: 'description', 
                    url: 'url'
                },
                {
                    id:2, 
                    headline:'headline2', 
                    description: 'description2', 
                    url: 'url2'
                },
            ]}
            status={2}
            />
      )
    })
  
    afterEach(cleanup)

    it('Should display NewsContainer if there is 1 or more articles displayed', () => {
        expect(component.getByTestId('container')).toBeInTheDocument()
    })

    it('Displays NewsArticle info correctly inside NewsContainer', () => {
        expect(component.getByText('description')).toBeInTheDocument()
        expect(component.getByText('headline')).toBeInTheDocument()
    })
})
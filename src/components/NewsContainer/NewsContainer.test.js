import React from 'react'
import NewsContainer from './NewsContainer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('NewsArticle', () => {
    it('Displays NewsArticle info correctly', () => {
        const { getByText } = render(<NewsContainer  
            news={[{
                id:1, 
                headline:'headline', 
                description: 'description', 
                url: 'url'
            }]}
            />)
        expect(getByText('description')).toBeInTheDocument();
        expect(getByText('headline')).toBeInTheDocument();
    })
})
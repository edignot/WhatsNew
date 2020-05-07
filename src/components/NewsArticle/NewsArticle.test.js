import React from 'react'
import NewsArticle from './NewsArticle'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('NewsArticle', () => {
    it('Displays NewsArticle info correctly', () => {
        const { getByText } = render(<NewsArticle  
            description={'description'}
            headline={'headline'}
            />)
        expect(getByText('description')).toBeInTheDocument();
        expect(getByText('headline')).toBeInTheDocument();
        expect(getByText('READ MORE')).toBeInTheDocument();
    })
})
import React from 'react'
import SearchForm from './SearchForm'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('NewsArticle', () => {
    let component
    const mockSearchNews = jest.fn()

    beforeEach(() => {
      component = render(
        <SearchForm 
            searchNews={mockSearchNews} 
        />
      )
    })
  
    afterEach(cleanup)

    it('Search Input has a placeholder', () => {
        expect(component.getByPlaceholderText('Search for News')).toBeInTheDocument()
    })

    it('Search Input has a placeholder', () => {
        fireEvent.change(component.getByPlaceholderText('Search for News'), {target: {value: 'science'}})
        expect(component.getByPlaceholderText('Search for News').value).toEqual('science')
    })

    it('Should call searchNews with the correct arguments', () => {
      
    })
})
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

    it('Should display correct content', () => {
        expect(component.getByPlaceholderText('Search for News')).toBeInTheDocument()
        expect(component.getByText('SEARCH')).toBeInTheDocument()
        expect(component.getByTestId('search')).toBeInTheDocument();
    })

    it('Should update search value', () => {
        fireEvent.change(component.getByPlaceholderText('Search for News'), {target: {value: 'science'}})
        expect(component.getByPlaceholderText('Search for News').value).toEqual('science')
    })

    it('Should call searchNews with correct arguments', () => {
      fireEvent.change(component.getByPlaceholderText('Search for News'), {target: {value: 'science'}})
      fireEvent.click(component.getByText('SEARCH'))
      expect(component.getByPlaceholderText('Search for News').value).toEqual('');
      expect(mockSearchNews).toHaveBeenCalledWith('science')
    })
})
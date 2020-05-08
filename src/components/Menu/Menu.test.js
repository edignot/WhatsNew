import React from 'react'
import Menu from './Menu'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Menu />', () => {
    let component
    const mockChangeMenu = jest.fn()

    beforeEach(() => {
      component = render(
        <Menu 
            changeMenu={mockChangeMenu}
            selected={'local'} 
            types={['local', 'science', 'technology']} 
            />
      )
    })
  
    afterEach(cleanup)

    it('Should display all categories as Menu options', () => {
        expect(component.getByText('local')).toBeInTheDocument()
        expect(component.getByText('science')).toBeInTheDocument()
        expect(component.getByText('technology')).toBeInTheDocument()
      })

    it('Should display selected category with differenct className', () => {
      expect(component.getByTestId('type-selected')).toBeInTheDocument()
    })

    it('Should call changeMenu with correct argument', () => {
        fireEvent.click(component.getByText('science'))
        expect(mockChangeMenu).toHaveBeenCalledWith('science')
     })
})
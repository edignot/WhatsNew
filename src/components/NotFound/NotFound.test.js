import React from 'react'
import NotFound from './NotFound'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<NotFound />', () => {
    let component
    const mockChangeMenu = jest.fn()

    beforeEach(() => {
      component = render(
        <NotFound  
            status={0} 
            selected={'local'} 
            changeMenu={mockChangeMenu}
            />
      )
    })
  
    afterEach(cleanup)

    it('Should display container only if nothing is found', () => {
      expect(component.getByTestId('not-found')).toBeInTheDocument()
    })

    it('Should display Nothing Found message', () => {
        expect(component.getByText('Nothing found!')).toBeInTheDocument()
    })

    it('Should call changeMenu with correct arguments', () => {
      fireEvent.click(component.getByText('x'));
      expect(mockChangeMenu).toHaveBeenCalledWith('local')
  })
})
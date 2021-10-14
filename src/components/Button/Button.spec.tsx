import Button from './Button'

import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<Button />', () => {
    describe('when mounted', () => {
        it('has inner text', () => {
            const innerText = 'Click me!'
            const { asFragment }: RenderResult = render(<Button>{innerText}</Button>)
            const button: HTMLElement = screen.getByText(innerText)

            expect(button).toBeDefined()
            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('when clicked', () => {
        it('calls handler function', () => {
            const handleClick = jest.fn()
            const innerText = 'Click me!'
            render(<Button onClick={handleClick}>{innerText}</Button>)
            const button: HTMLElement = screen.getByText(innerText)

            userEvent.click(button)
            expect(handleClick).toHaveBeenCalledTimes(1)
        })
    })
})

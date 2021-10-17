import Input from './Input'

import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<Input />', () => {
    describe('when mounted', () => {
        it('has placeholder text', () => {
            const placeholderText = 'Search...'
            const { asFragment }: RenderResult = render(<Input placeholder={placeholderText} />)
            const input: HTMLElement = screen.getByPlaceholderText(placeholderText)

            expect(input).toBeDefined()
            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('with icon', () => {
        it('has icon element', () => {
            const { asFragment }: RenderResult = render(<Input icon={<p>icon</p>} />)
            const input: HTMLElement = screen.getByText(/icon/i)

            expect(input).toBeDefined()
            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('when typing in', () => {
        it('calls handler function', () => {
            const handleClick = jest.fn()
            const placeholderText = 'Search...'
            const inputTyping = 'this is a placeholder text'

            render(<Input placeholder={placeholderText} onChange={handleClick} />)
            const input: HTMLElement = screen.getByPlaceholderText(placeholderText)

            userEvent.type(input, inputTyping)
            expect(handleClick).toHaveBeenCalledTimes(inputTyping.length)
            expect(input).toHaveValue(inputTyping)
        })
    })
})

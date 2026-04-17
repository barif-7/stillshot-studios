import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home screen', () => {
  it('shows the portfolio hero and store link', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: /editorial photography with a calm, cinematic point of view/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /shop prints/i })).toHaveAttribute('href', '/store')
    expect(screen.getAllByRole('link', { name: /start inquiry/i })[0]).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: /store/i })).toHaveAttribute('href', '/store')
  })
})

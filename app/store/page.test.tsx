import { render, screen } from '@testing-library/react'
import StorePage from './page'

describe('Store screen', () => {
  it('shows print listings and purchase links', () => {
    render(<StorePage />)

    expect(screen.getByRole('heading', { name: /the best frames, available as archival prints/i })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.getByRole('heading', { name: /tower geometry/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /buy print/i })[0]).toHaveAttribute('href', expect.stringContaining('StillShot%20Studios%20print%20inquiry'))
    expect(screen.getByRole('link', { name: /back to portfolio/i })).toHaveAttribute('href', '/')
  })
})

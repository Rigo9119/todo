import { render, screen } from '@testing-library/react'
import App from './App'

test('renders headline', () => {
  render(<App />)
  const headline = screen.getByText(/TODO/)
  expect(headline).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

test('renders headline', () => {
  render(<Header title='Well to be honest' addNewTodo={() => {}} />)
  const headingElement = screen.getByRole('heading', { name: 'Well to be honest' })
  expect(headingElement).toBeInTheDocument()
})

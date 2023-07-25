import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

test('should render correct amount of incomplete tasks', () => {
  render(<Footer
    activeTasks={5}
    countTasks={0}
    deleteCompletedTodos={() => {}}
    filterSelected=""
    onFilterChange={() => {}} />)

  const footerElement = screen.getByText('5 tasks left')
  expect(footerElement).toBeInTheDocument()
})

test('should render "tasks" when the number of incomplete tasks is one', () => {
  render(<Footer
    activeTasks={1}
    countTasks={0}
    deleteCompletedTodos={() => {}}
    filterSelected=""
    onFilterChange={() => {}} />)

  const footerElement = screen.getByText('1 task left')
  expect(footerElement).toBeInTheDocument()
})

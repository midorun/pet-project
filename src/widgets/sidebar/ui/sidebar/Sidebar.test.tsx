import { fireEvent, render, screen } from '@testing-library/react'

import ThemeProvider from 'app/providers/ThemeProvider'

import Sidebar, { dataTestId } from 'widgets/sidebar'

import renderWithTranslations from 'shared/lib/tests/renderWithTranslations'

describe('Sidebar', () => {
  test('Test render', () => {
    render(<ThemeProvider>{renderWithTranslations(<Sidebar />)}</ThemeProvider>)
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument()
  })

  test('Test toggle', () => {
    render(<ThemeProvider>{renderWithTranslations(<Sidebar />)}</ThemeProvider>)

    const sidebarToggleButton = screen.getByTestId('sidebar-toggle')
    const sidebar = screen.getByTestId(dataTestId)

    expect(sidebar).toBeInTheDocument()

    fireEvent.click(sidebarToggleButton)

    expect(sidebar).toHaveClass('collapsed')
  })
})

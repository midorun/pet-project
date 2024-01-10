import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import ThemeProvider from 'app/providers/ThemeProvider'

import Sidebar from 'widgets/sidebar'

import I18nextProvider from 'shared/lib/tests/I18nextProvider'

const testId = 'sidebar'

describe('Sidebar', () => {
  test('Test render', () => {
    render(
      <ThemeProvider>
        <I18nextProvider>
          <Sidebar />
        </I18nextProvider>
      </ThemeProvider>,
      { wrapper: BrowserRouter }
    )
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })
})

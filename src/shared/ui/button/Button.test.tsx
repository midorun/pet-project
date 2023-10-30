import { render, screen } from '@testing-library/react'

import { UIVariantEnum } from 'shared/model/types'

import Button from './Button'

const buttonText = 'Test'

describe('Button', () => {
  test('Test render', () => {
    render(<Button>{buttonText}</Button>)
    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  test('Test variant apply', () => {
    render(<Button variant={UIVariantEnum.TERTIARY}>{buttonText}</Button>)
    expect(screen.getByText(buttonText)).toHaveClass(UIVariantEnum.TERTIARY)
    screen.debug()
  })
})

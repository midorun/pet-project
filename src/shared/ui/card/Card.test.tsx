import { render, screen } from '@testing-library/react'

import { UIVariantEnum } from 'shared/model/types'
import Card from 'shared/ui/card/Card'

const buttonText = 'Test'

describe('Button', () => {
  test('Test render', () => {
    render(<Card>{buttonText}</Card>)
    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })
})

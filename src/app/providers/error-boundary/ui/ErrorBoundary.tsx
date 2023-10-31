import { Component, PropsWithChildren, ReactNode } from 'react'

import ErrorBoundaryFallback from 'widgets/error-boundary-fallback'

type ErrorBoundaryProps = PropsWithChildren<{
  fallback?: ReactNode
}>

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: unknown) {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error: unknown, info: { componentStack: unknown }) {
    console.log(error, info.componentStack)
  }

  render() {
    const { fallback, children } = this.props

    if (this.state.hasError) {
      return fallback ?? <ErrorBoundaryFallback />
    }

    return children
  }
}

export default ErrorBoundary

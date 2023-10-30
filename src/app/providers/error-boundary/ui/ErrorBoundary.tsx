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
    // Update state so the next render will show the fallback UI.
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error: unknown, info: { componentStack: unknown }) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
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

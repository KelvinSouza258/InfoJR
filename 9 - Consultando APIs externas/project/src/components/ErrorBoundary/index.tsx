/* eslint-disable */
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../Atoms'
import ErrorPage from './styles'

class ErrorBoundary extends Component {
    state = { hasError: false }

    static getDerivedStateFromError(error: any) {
        return { hasError: true }
    }

    componentDidCatch(error: any, info: any) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorPage>
                    <Heading variant="big">Something went wrong!</Heading>
                    <Link
                        to="/"
                        onClick={() =>
                            setTimeout(() => window.location.reload(), 0)
                        }
                    >
                        Back to Home
                    </Link>
                </ErrorPage>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary

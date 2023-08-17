import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React from "react"
import { withBlitz } from "src/blitz-client"
import "src/styles/globals.css"
import dynamic from "next/dynamic"

require("events").EventEmitter.prototype._maxListeners = 100
//💄❤️🚀💣🍺👁️‍🗨️🎅😎🙃😘💯⚡
const NewPastePage = dynamic(() => import("src/pages/pastes/new"), {
  // Do not import in server side
  ssr: false,
})
function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  }
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundary>
  )
}

export default withBlitz(MyApp)

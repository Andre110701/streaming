import '@/styles/globals.css'
import { theme } from '../components/designSystem/theme'
import { _api } from '@iconify/react'
import fetch from 'cross-fetch'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { ScreenClassProvider } from 'react-grid-system'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  _api.setFetch(fetch)

  return(
    <ThemeProvider theme={theme}>
      <ScreenClassProvider>
          <Component {...pageProps} />
          <GlobalStyles />
      </ScreenClassProvider>
  </ThemeProvider>
  )
}

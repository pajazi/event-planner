import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Theme from '@/theme'
import { ThemeProvider } from '@mui/system'
import { wrapper } from '@/redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, ...props }: AppProps) {
    const {
        store,
        props: { pageProps },
    } = wrapper.useWrappedStore(props)

    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

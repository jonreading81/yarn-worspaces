import App from 'next/app'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <h1>App wrapper</h1>
            <Component {...pageProps} />
        </>
    )

}

export default MyApp;
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Layout from '../components/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import netlifyIdentity from 'netlify-identity-widget'

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })
  // const { Component, pageProps } = props;

  React.useEffect(() => {
    netlifyIdentity.init()
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </PersistGate>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

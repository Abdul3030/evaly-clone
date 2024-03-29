import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import {store} from '../store/store';
import { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from '../components/AuthProvider';

import '../styles/globals.css';
import 'swiper/swiper-bundle.min.css';
import '../styles/customSwiper.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <AuthProvider session={pageProps.session} >
        <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </AuthProvider>
    </Provider>
  )
}

export default MyApp;

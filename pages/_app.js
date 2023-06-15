import '@fortawesome/fontawesome-svg-core/styles.css';
import '../public/assets/css/normalize.css';
import '../public/assets/css/variables.css';
import '../public/assets/css/styles.css';
const App = ({Component, pageProps}) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App;

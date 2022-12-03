import Header from "../components/core/header";
import { Provider } from "../providers/Provider";
import "../styles/index.scss";
function MyApp({ Component, pageProps }) {
	return (
		<Provider>
			<Header />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;

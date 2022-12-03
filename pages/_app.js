import { Provider } from "../providers/Provider";

function MyApp({ Component, pageProps }) {
	return (
		<Provider>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;

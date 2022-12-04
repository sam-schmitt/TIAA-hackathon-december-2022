import Header from "../components/core/header";
import { Provider } from "../providers/Provider";
import "../styles/index.scss";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Provider>
				<Header />
				<Component {...pageProps} />
			</Provider>
		</ChakraProvider>
	);
}

export default MyApp;

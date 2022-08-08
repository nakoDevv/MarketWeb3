import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  return (
	<ThirdwebProvider 
		desiredChainId = {ChainId.Goerli}
		chainRpc={{
			[ChainId.Goerli]:'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
		}}
	>
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	</ThirdwebProvider>
  )
}

export default MyApp

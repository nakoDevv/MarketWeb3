import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  return (
	<ThirdwebProvider 
		desiredChainId = {ChainId.Goerli}
		// chainRpc={{
		// 	[ChainId.Goerli]:'https://2Ctb47Y0dPFdPxKPYtmGiKct5bb:2d09c373cdec81fabf719e07a71ff177@eth2-beacon-goerli.infura.io'
		// }}
	>
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	</ThirdwebProvider>
  )
}

export default MyApp

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
	<ThirdwebProvider 
		desiredChainId = {ChainId.Goerli}
		chainRpc={{
			[ChainId.Goerli]:'https://goerli.infura.io/v3/8c122a0e68b348f191d13e2fa46bb883'
		}}
	>
		<Component {...pageProps} />
	</ThirdwebProvider>
  )
}

export default MyApp

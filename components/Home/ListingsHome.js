import { useState,  useEffect } from 'react'
import Link from 'next/link'
import { useMarketplace, ThirdwebNftMedia, useNFTCollection } from '@thirdweb-dev/react'
import NFTCard  from './NFTCard'
import NFTCard2  from './NFTCard2'
const styles = {
	wrapper: `mx-auto mt-10 grid max-w-fit flex-1 grid-cols-1 gap-8 p-10
	pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4
	2xl:grid-cols-5`
}

const Listings = () => {

	const [listings, setListings] = useState({})
	const [nfts, setNfts] = useState({})
	const marketplace = useMarketplace("0x2e7f84B5C6d72Bd487532F42dF64B7d11c00838D")
	const nftCollection = useNFTCollection("0xB1709c0Cd6452562F0f13b75FE49c6912b3C2059")

	useEffect(() => {
		getListings()
		getNFTs()
	}, [])

	const getNFTs = async () => {
		try {
			const nfts = await nftCollection.getAll()
			setNfts(nfts)
		} catch (e) {
			console.log(e)
		}

	}

	const getListings = async () => {
		try {
			const list = await marketplace.getActiveListings()
			console.log(list)
			console.log(list.reservePrice)
			setListings(list)
		} catch(e) {
			console.log(e)
		}
	}

	return (
		<>
			<div className={styles.wrapper}>
			{listings.length > 0 ? (
				<>
					{listings?.map((listing, index) => (
						<Link
							href={`collection/CryptoApes`}
							key={index}
						>
							<a>
								<NFTCard listing={listing} />
							</a>
						</Link>
					))}
				</>
				) : (
					<div>Loading</div>
			)}

		</div>
		<div className={styles.wrapper}>
			{nfts.length > 0 ? (
				<>
					{nfts.slice(0,4)?.map((nft, index) => (
						<Link
							href={`collection/CryptoApes`}
							key={index}
						>
							<a>
								<NFTCard2 nfts={nft} />
							</a>
						</Link>
					))}
				</>
				) : (
					<div>Loading</div>
			)}

		</div>
		</>
		
	)
}

export default Listings
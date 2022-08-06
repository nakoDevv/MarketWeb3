import { useState,  useEffect } from 'react'
import Link from 'next/link'
import { useMarketplace, ThirdwebNftMedia, useNFTCollection } from '@thirdweb-dev/react'
import NFTCard  from './NFTCard'

const styles = {
	wrapper: `mx-auto mt-10 grid max-w-fit flex-1 grid-cols-1 gap-8 p-10
	pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4
	2xl:grid-cols-5`
}

const Listings = () => {

	const [listings, setListings] = useState({})
	const marketplace = useMarketplace("0x2e7f84B5C6d72Bd487532F42dF64B7d11c00838D")
	const nftCollection = useNFTCollection("0x08d7c0242953446436f34b4c78fe9da38c73668d")
	console.log(nftCollection)
	
	useEffect(() => {
		getListings()
		getNFTs()
	}, [])

	const getNFTs = async () => {
		try {
			const nfts = await nftCollection.getAll()
			console.log(nfts)
		} catch (e) {
			console.log(e)
		}

	}

	const getListings = async () => {
		try {
			const list = await marketplace.getActiveListings()
			setListings(list)
		} catch(e) {
			console.log(e)
		}
	}

	return (
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

			{/* {nftCollection ? (
					<ThirdwebNftMedia metadata={nftCollection.metadata} />
				) : (
					<p>Loading...</p>
				)}  */}
		</div>
	)
}

export default Listings
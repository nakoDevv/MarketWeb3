import { useState,  useEffect } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'
import NFTCard  from './NFTCard'

const styles = {
	wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10
	pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4
	2xl:grid-cols-5`
}

const Listings = () => {

	const [listings, setListings] = useState({})
	const marketplace = useMarketplace("0x2e7f84B5C6d72Bd487532F42dF64B7d11c00838D")
	useEffect(() => {
		getListings()
	}, [])

	const getListings = async () => {
		try {
			const list = await marketplace.getAll()
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
						href={`${listing.assetContractAddress}/${listing.id}`}
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
	)
}

export default Listings
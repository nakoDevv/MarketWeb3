import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'

import NFTImage from '../../../components/NFT/NFTImage'
import TopNavbarLayout from '../../../layouts/TopNavbarLayout'

const style = {

}


const NFT = () => {

	const [loading, setLoading] = useState(false)
	const [listings, setListings] = useState({})
	const router = useRouter()
	const { tokenID } = router.query
	const marketplace = useMarketplace("0x2e7f84B5C6d72Bd487532F42dF64B7d11c00838D")
	const address = useAddress()
	
	useEffect(() => {
		getListings()
	}, [])
	
	useEffect(() => {
		if(!address){
			router.replace('/')
		}	
	},[address])

	const getListings = async () => {
		try {
			setLoading(true)
			const listing = await marketplace.getListing(BigNumber.from(tokenID))

			setListings(listing)
			setLoading(false)
		} catch(e) {
			console.log(e)
		}
	}

	return (
		<TopNavbarLayout>
			<div className={style.wrapper}>
				{loading ? (
					<div>Loading...</div>
				) : (
					<div className={style.nftContainer}>
						<div className={style.leftContainer}>
							<div className={style.leftElement}>
								<NFTImage image={listings?.asset?.image} listing={listings} />
							</div>
							<div className={style.leftElement}>
								{/* {<NFTDetails />} */}
							</div>
						</div>
						<div className={style.rightContainer}>
							{/* {<NFTBasicInfo />} */}
							<div className={style.buyoutContainer}>
								{/* {<NFTSalesInfo />} */}
							</div>
						</div>
					</div>
				)}
			</div>
		</TopNavbarLayout>
	)
}

export default NFT
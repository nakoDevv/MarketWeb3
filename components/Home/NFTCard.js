import Image from 'next/image'
import img from '../../assets/Golden Egg.png'

const style = {
	wrapper: `relative flex h-[450px] cursor-pointer 
	flex-col rounded-lg bg-white shadow-lg transition-all duration-300
	hover:shadow-2x1 dark:bg-[white]`,
	imageContainer: `overflow-hidden`,
	nftImage: `rounded-t-lg object-cover`,
	lowerContainer: `flex h-1/4 flex-col justify-between p-4`,
	infoContainer: `flex justify-between`,
	collectionTitle: `text-xs text-gray-500 dark:text-gray-400`,
	nftTitle: `text-sm`,
	priceContainer: `flex flex-col justify-center space-y-1`,
	priceTitle: `text-xs font-light`,
	wethImageContainer: `flex item-center space-x-2`,
	likesContainer: `flex items-center justify-between space-y-4`,
	button: `rounded-lg border border-black px-4 py-2 hover:bg-black hover:text-white bg-white text-sm`,
}

const NFTcard = ({listing}) => {


	return (
		<div className={style.wrapper}>
			<div className={style.imageContainer}>
				<Image
					className={style.nftImage}
					// {listing.asset.image}
					src={img}
					height={340}
					width={340}
					alt = 'nft'
				/>
			</div>
			<div className={style.lowerContainer}>
				<div className={style.infoContainer}>
					<div>
						{/* {listing.asset.collection && ( */}
							<div className={style.collectionTitle}>
								{/* {listing.asset?.collection?.name} */}
								PATH TO ALANGO
							</div>
						{/* )} */}

						<div className={style.nftTitle}>
							{/* {listing.asset.name} */}
							REDISCOVERING ALANGO
						</div>
					</div>
				</div>
				<div className = {style.likesContainer}>
					<div className={style.priceContainer}>
						<div className={style.collectionTitle}>FLOOR PRICE</div>
						<div className={style.wethImageContainer}>
							{/* <Image 
								height={16}
								width={16}
								src = '/weth-logo.svg'
								alt='weth'
							/> */}
							<div className={style.priceValue}>
								{/* {listing.reservePriceCurrencyValuePerToken?.displayValue} */}
								0.18 ETH
							</div>

						</div>
					</div>
					<div className={style.likeCounter}>
						{/* {listing?.asset?.stats?.favorites ?? 0} */}
						<button className={style.button}>BID NOW</button>
					</div>
				</div>

				
			</div>
			
		</div>
	)
}

export default NFTcard
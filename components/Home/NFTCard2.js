import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'


const style = {
	wrapper: `relative flex h-[450px] w-[340px] cursor-pointer 
	flex-col rounded-lg bg-white shadow-lg transition-all duration-300
	hover:shadow-2x1 dark:bg-[#333333]`,
	imageContainer: `h-3/4 overflow-hidden`,
	nftImage: `rounded-t-lg object-cover`,
	lowerContainer: `flex h-1/4 flex-col justify-between p-4`,
	infoContainer: `flex justify-between`,
	collectionTitle: `text-sm text-gray-500 dark:text-gray-400`,
	priceContainer: `flex flex-col items-end justify-center space-y-1`,
	priceTitle: `text-xs font-light`,
	wethImageContainer: `flex item-center justify-end space-x-2`,
	likesContainer: `flex items-center justify-end space-x-2`,
	heartIcon: `h-3 w-3 text-gray-500 dark:text-gray-400`,
	likesCounter: `text-xs text-gray-500 dark:text-gray-400`,
}

const NFTcard2 = ({nfts}) => {

	return (
		<div className={style.wrapper}>
			<div className={style.imageContainer}>
				<Image
					className={style.nftImage}
					src={nfts.metadata.image}
					height={340}
					width={340}
					alt = 'nft'
				/>
			</div>
			{/* <div className={style.lowerContainer}>
				<div className={style.infoContainer}>
					<div>
						{nfts.asset.collection && (
							<div className={style.collectionTitle}>
								{nfts.asset?.collection?.name}
							</div>
						)}

						<div className={style.nftTitle}>
							{nfts.asset.name}
						</div>
					</div>
					<div className={style.priceContainer}>
						<div className={style.priceTitle}>Buy at</div>
						<div className={style.wethImageContainer}>
							<Image 
								height={16}
								width={16}
								src = '/weth-logo.svg'
								alt='weth'
							/>
							<div className={style.priceValue}>
								{nfts.buyoutCurrencyValuePerToken?.displayValue}
							</div>

						</div>
					</div>
				</div>
				<div className = {style.likesContainer}>
					<AiOutlineHeart className= {style.heartIcon} ></AiOutlineHeart>
					<div className={style.likeCounter}>
							{nfts?.asset?.stats?.favorites ?? 0}
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default NFTcard2
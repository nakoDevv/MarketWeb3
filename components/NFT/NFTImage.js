import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { useMarketplace } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useState } from "react";

const style = {
	wrapper: `rounded -lg border dark:border-transparent dark:bg-[#313339]`,
	nftHeader: `flex items-center justify-between p-4`,
	likesContainer: `flex items-center justify-end space-x-2`,
	heartIcon: `h-5 w-5 text-gray-500 dark:text-gray-400`,
	likesCount: `text-sm font-semibold text-gray-500 dark:text-gray-400`
}

const NFTImage = ({ image, listing }) => {
	const router = useRouter();
	const { tokenID } = router.query
	// Store the bid amount the user entered into the bidding textbox
	const [bidAmount, setBidAmount] = useState("")
	const [bidState, setBidState] = useState("")
	// Storing this listing in a state variable so we can use it in the UI once it's fetched.
	// Initialize the marketplace contract
	const marketplace = useMarketplace("0x2e7f84B5C6d72Bd487532F42dF64B7d11c00838D");

	async function createBidOrOffer() {
		try {
			await marketplace?.auction.makeBid(tokenID, bidAmount)
			const winning = await marketplace?.auction.getWinningBid(tokenID)
			setBidState(winning.currencyValue.displayValue)
		  	alert(`Bid created successfully!`)
		} catch (error) {
		  console.error(error);
		  alert(error);
		}
	}

	return (
		<div className={style.wrapper}>
			<div className={style.nftHeader}>
				<Image 
					height={20}
					width={20}
					src='/eth-logo.svg'
					alt='eth'
				/> 
				<div className={style.likesContainer}>
					<AiOutlineHeart className={style.heartIcon}/>
					<div className={style.likesCount}>200</div>
				</div>
			</div>
			<div>
				{image && <Image 
				src={image} 
				alt="nft"
				height={450}
				width={450}
				/>}
			</div>
			<div>
			<div className={style.likesContainer}>
					<div className={style.likesCount}>{bidState ? bidState : listing.reservePriceCurrencyValuePerToken?.displayValue}</div>
				</div>
					<input
					type="text"
					name="bidAmount"
					onChange={(e) => setBidAmount(e.target.value)}
					placeholder="Enter bid amount"
					/>
					<button onClick={createBidOrOffer}>Make Bid</button>
				
				</div>
		</div>
	)
}

export default NFTImage
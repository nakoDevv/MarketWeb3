import Image from 'next/image'
import TopNavbarLayout from '../../layouts/TopNavbarLayout'
import Listings from '../../components/Home/Listings'
import imgBlack from '../../assets/Golden Egg.png'
import BannerEth from '../../components/Home/BannerEth'

const style = {
	container: `flex h-[550px] bg-[#D9D9D9] flex-row mt-20`,
	button: `inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-black text-sm font-medium text-white hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 cursor-pointer`,
	collectionInfoWrapper: `top-2/3 h-2/3 w-1/2 -translate-y-16 flex m-auto justify-start items-center`,
	collectionInfoWrapperImg: `top-2/3 h-2/3 w-1/2 -translate-y-16 flex m-auto justify-center`,
	collectionInfoContainer: `flex flex-col items-start w-1/2 space-y-4`,
	collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-gray-100`,
	collectionLogo: `rounded-full object-cover`,
	collectionImg: `rounded-full object-cover h-full w-full`,
	collectionImgCon: `h-1/2 w-1/2`,
	collectionInfo: `flex flex-col items-center space-y-6`,
	title: `text-5xl font-400`,
	creatorInfoContainer: `flex items-center space-x-1`,
	creator: `text-sm font-medium text-gray-500`,
	creatorName: `cursor-pointer text-blue-500`,
	verified: `h-5 w-5 text-blue-500`,
	descriptionContainer: `max-w-3xl py-2 text-start text-gray-500`,
	priceContainer:`flex flex-row py-6`,
	nftImage: `rounded-t-lg object-cover`,
	floorPrice: `text-sm text-gray-500`,
	priceFlex: `flex flex-row mt-2 mr-8`,
	priceValue: `text-3xl ml-5 text-black-300`,
	dateContainer: `text-3xl text-black-300`,
	placeBid: `inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-white hover:bg-gray-50 hover:text-black `
}

export default function Marketplace() {
  return (
    <div>
      <TopNavbarLayout>
       
		<div className={style.container}>
			<div className={style.collectionInfoWrapperImg}>
				<div className={style.collectionImgCon}>
				<Image
					className={style.collectionImg}
					src={imgBlack}
					alt='logo'
				/>
				</div>
				
			</div>
			<div className={style.collectionInfoWrapper}>
				<div className={style.collectionInfoContainer}>
					<div className={style.collectionInfo}>
						<div className={style.title}>NFTNAME NFT NAME NFT</div>
					</div>
					<div className={style.descriptionContainer}>
					PATHS TO ALANGO - BALI, INDONESIA
					</div>

					<div className={style.priceContainer}>
						<div className={style.leftContainer}>
							<div className={style.floorPrice}>
								FLOOR PRICE
							</div>
							<div className={style.priceFlex}>
								<Image 
									height={20}
									width={20}
									src = '/weth-logo.svg'
									alt='weth'
								/>
								<div className={style.priceValue}>
									2.00
								</div>
							</div>
						</div>
						<div className={style.rightContainer}>
							<div className={style.floorPrice}>
								ENDING IN
							</div>
							<div className={style.priceFlex}>
								<div className={style.dateContainer}>
									20H 32M 45S
								</div>
							</div>
						</div>
					</div>

					<input placeholder="ENTER A BID OF AT LEAST 2.00 ETH" className={style.placeBid}></input>
					<a href="/etherium/marketplace" className={style.button}>PLACE BID</a>
				</div>
			</div>
		</div>

		<BannerEth />	
        <Listings />
      </TopNavbarLayout>
    </div>
  )
}

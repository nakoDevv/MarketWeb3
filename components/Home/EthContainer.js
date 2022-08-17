import imgBlack from '../../assets/Golden Egg.png'
import Image from 'next/image'

const style = {
	container: `flex h-[650px] flex-row`,
	button: `inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 cursor-pointer`,
	collectionInfoWrapper: `top-2/3 h-2/3 w-1/2 -translate-y-16 flex m-auto justify-start items-center`,
	collectionInfoWrapperImg: `top-2/3 h-2/3 w-1/2 -translate-y-16 flex m-auto justify-center`,
	collectionInfoContainer: `flex flex-col items-center space-y-4`,
	collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-gray-100`,
	collectionLogo: `rounded-full object-cover`,
	collectionImg: `rounded-full object-cover h-full w-full`,
	collectionImgCon: `h-1/2 w-1/2`,
	collectionInfo: `flex flex-col items-center space-y-6`,
	title: `text-5xl font-bold`,
	creatorInfoContainer: `flex items-center space-x-1`,
	creator: `text-sm font-medium text-gray-500`,
	creatorName: `cursor-pointer text-blue-500`,
	verified: `h-5 w-5 text-blue-500`,
	descriptionContainer: `max-w-3xl py-2 px-10 text-center text-gray-500`,
}

const EthContainer = () => {
  return (
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
						<div className={style.title}>ETH Marketplace</div>
					</div>

					<a href="/ethereum/marketplace" className={style.button}>Explore ETH</a>
				</div>
			</div>
		</div>
  )
}

export default EthContainer

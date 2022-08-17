import Image from 'next/image'

const style = {
	container: `flex flex-row mt-10 mb-20 justify-between`,
	ethContainer: `flex items-center`,
	ethTitle: `ml-4 text-5xl text-gray-500`
}
const BannerEth = () => {
	return (
		<div className={style.container}>
			<div className={style.ethContainer}>
				<Image 
					height={50}
					width={50}
					src = '/weth-logo.svg'
					alt='weth'
				/>
				<div className={style.ethTitle}>
					ETHEREUM
				</div>
			</div>
			<div className={style.ethContainer}>
				<Image 
					height={50}
					width={50}
					src = '/weth-logo.svg'
					alt='weth'
				/>
				<div className={style.ethTitle}>
					ETHEREUM
				</div>
			</div>
			<div className={style.ethContainer}>
				<Image 
					height={50}
					width={50}
					src = '/weth-logo.svg'
					alt='weth'
				/>
				<div className={style.ethTitle}>
					ETHEREUM
				</div>
			</div>
			<div className={style.ethContainer}>
				<Image 
					height={50}
					width={50}
					src = '/weth-logo.svg'
					alt='weth'
				/>
				<div className={style.ethTitle}>
					ETHEREUM
				</div>
			</div>
		</div>
	)
}

export default BannerEth
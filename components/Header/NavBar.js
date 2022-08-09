import Logo from './Logo'
import {
  SearchIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import NavMenus from './NavMenus'
import Link from 'next/link'
import { useAddress, useMetamask, useDisconnect, useCoinbaseWallet, useWalletConnect } from "@thirdweb-dev/react"
import Dropdown from './DropDown'
import DropDownConnect from './DropDownConnect'

const Navbar = () => {

  const connectMetamask = useMetamask()
  const disconnectWallet = useDisconnect()
  const walletConnect = useWalletConnect()
  const connectCoinbase = useCoinbaseWallet()
  const address = useAddress()


  const menus = [
	{
		name: 'ABOUT',
		href: '#',
	  },
    {
      name: 'MEMBERSHIP',
      href: '#',
    },
    {
      name: 'DROPS',
      href: '#',
    },
	{
	name: 'EXPLORE',
	href: '#',
  	},
  ]

  const style = {
    themeSwitcher: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300`,
    wrapper: `sticky top-0 z-50 px-4 py-2 bg-[#D9D9D9] flex items-center justify-between space-x-6`,
    logoContainer: `xl:pr-40`,
    searchContainer: `ml-8 hidden flex-1 sm:block`,
    menusContainer: `hidden pr-6 lg:block xl:pl-8,`,
    iconsContainer: `flex items-center space-x-6`,
    icons: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white`,
    desktopIcons: `hidden lg:block`,
    mobileIcons: `sm:hidden`,
    tabletIcons: `lg:hidden`,
	wrapperButton:`items-center justify-center`,
	connectButton: `rounded-lg border border-black px-7 py-2 hover:bg-black hover:text-white bg-black`
  }

  return (
    <header className={style.wrapper}>
      <div className={style.logoContainer}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <div className={style.searchContainer}>
        {/* <SearchInput /> */}
      </div>

      <div className={style.menusContainer}>
        <NavMenus menus={menus} />
      </div>

      <div className={style.iconsContainer}>
		{address ? (
			<>
				<Dropdown address={address} disconnectWallet={disconnectWallet}/>
			</>
		) : (
			<div className={style.wrapperButton}>
			<DropDownConnect connectMetamask={connectMetamask} walletConnect={walletConnect} connectCoinbase={connectCoinbase}/>
			</div> 
		)}
        <SearchIcon className={`${style.icons} ${style.mobileIcons}`} />
        <MenuIcon className={`${style.icons} ${style.tabletIcons}`} />
      </div>
    </header>
  )
}

export default Navbar

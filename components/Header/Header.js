import { useState, useEffect } from 'react'
import Logo from './Logo'
import {
  SearchIcon,
  MenuIcon,
  CreditCardIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
import SearchInput from './SearchInput'
import NavMenus from './NavMenus'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useAddress, useMetamask, useDisconnect, useCoinbaseWallet, useWalletConnect } from "@thirdweb-dev/react"
import Dropdown from './DropDown'
import DropDownConnect from './DropDownConnect'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const connectMetamask = useMetamask()
  const disconnectWallet = useDisconnect()
  const walletConnect = useWalletConnect()
  const connectCoinbase = useCoinbaseWallet()
  const address = useAddress()
  const { systemTheme, theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <MoonIcon
          className={style.themeSwitcher}
          role='button'
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <SunIcon
          className={style.themeSwitcher}
          role='button'
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  const menus = [
    {
      name: 'Explore',
      href: '#',
    },
    {
      name: 'Stats',
      href: '#',
    },
    {
      name: 'Resources',
      href: '#',
    },
  ]

  const style = {
    themeSwitcher: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300`,
    wrapper: `sticky top-0 z-50 bg-white px-4 py-2 shadow-md dark:bg-gray-900 flex items-center justify-between space-x-6`,
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
        <SearchInput />
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
        {renderThemeChanger()}
        <SearchIcon className={`${style.icons} ${style.mobileIcons}`} />
        <MenuIcon className={`${style.icons} ${style.tabletIcons}`} />
      </div>
    </header>
  )
}

export default Navbar

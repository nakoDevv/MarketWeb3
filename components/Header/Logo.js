import Image from 'next/image'

const style = {
  wrapper: `flex cursor-pointer items-center justify-center pl-10 pr-7`,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src='/eth-logo.svg' width={40} height={40} />
    </div>
  )
}

export default Logo

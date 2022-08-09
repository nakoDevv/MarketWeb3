import Image from 'next/image'

const style = {
  wrapper: `flex cursor-pointer items-center justify-center pl-10 pr-7 `,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src='/QT.png' width={65} height={65} />
    </div>
  )
}

export default Logo

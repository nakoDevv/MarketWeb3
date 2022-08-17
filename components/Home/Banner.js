import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAddress } from '@thirdweb-dev/react'
import { MdVerified } from 'react-icons/md'
import CollectionStats from '../../components/Home/CollectionStats'
import { collectionData } from '../../static/collections'
import Listings from '../../components/Home/Listings'

const style = {
  wrapper: `flex flex-col bg-[#D9D9D9] relative flex flex-col`,
  container: `relative flex h-[650px] flex-col`,
  bannerContainer: `absolute h-1/2 w-full`,
  banner: `rounded-t-lg object-cover`,
  collectionInfoWrapper: `absolute inset-0 top-2/3 z-10 h-2/3 -translate-y-16`,
  collectionInfoContainer: `flex flex-col items-center`,
  collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-black-100`,
  collectionLogo: `rounded-full object-cover`,
  collectionInfo: `flex flex-col items-center space-y-6`,
  title: `text-6xl font-bold`,
  creatorInfoContainer: `flex items-center space-x-1`,
  creator: `text-sm font-medium text-black-500`,
  creatorName: `cursor-pointer text-blue-500`,
  verified: `h-5 w-5 text-blue-500`,
  descriptionContainer: `max-w-3xl py-2 px-10 text-center text-black-500`,
}

export default function Banner() {
  const address = useAddress()
  const [collection] = useState(collectionData)
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (!slug) return
    ;(async () => {
      const collectionData = await getCollection()

      setCollection(collectionData)
    })()
  }, [slug])

  return (
    <div>
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.bannerContainer}>
              <Image
                className={style.banner}
                src={collection?.banner_image_url}
                layout='fill'
                alt='banner'
              />
            </div>

            <div className={style.collectionInfoWrapper}>
              <div className={style.collectionInfoContainer}>
              

                <div className={style.collectionInfo}>
                  <div className={style.title}>{collection?.name}</div>

                  <div className={style.creatorInfoContainer}>
                    <div className={style.creator}>
                      <span className={style.creatorName}>
                        {collection?.creator}
                      </span>
                    </div>
                  </div>
                </div>


                <div className={style.descriptionContainer}>
                  {collection?.description}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

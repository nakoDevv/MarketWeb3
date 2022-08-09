import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAddress } from '@thirdweb-dev/react'
import TopNavbarLayout from '../../layouts/TopNavbarLayout'
import { collectionData } from '../../static/collections'
import FeaturedCollection from './FeaturedCollection'
import Banner from './Banner'
import NFTDrop from './NFTDrop'
import EthContainer from './EthContainer'
import AlgoContainer from './AlgoContainer'
import Contact from './Contact'

const style = {
  wrapper: `flex flex-col bg-[#D9D9D9] relative flex flex-col`,
}

export default function Home() {
  const address = useAddress()
  const [collection] = useState(collectionData)
  const router = useRouter()
  const { slug } = router.query
  
  useEffect(() => {
    if (!address) router.replace('/')
  }, [address])

  useEffect(() => {
    if (!slug) return
    ;(async () => {
      const collectionData = await getCollection()

      setCollection(collectionData)
    })()
  }, [slug])

  return (
    <div>
      <TopNavbarLayout>
        <div className={style.wrapper}>
          	<Banner />
			<NFTDrop />
			<EthContainer />
			<AlgoContainer />
          	<FeaturedCollection collection={collection}/>
			<Contact />
        </div>
      </TopNavbarLayout>
    </div>
  )
}

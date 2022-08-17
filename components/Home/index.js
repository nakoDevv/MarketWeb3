import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAddress } from '@thirdweb-dev/react'
import TopNavbarLayout from '../../layouts/TopNavbarLayout'
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
  return (
    <div>
      <TopNavbarLayout>
        <div className={style.wrapper}>
			<Banner />
			<EthContainer />
			<AlgoContainer />
			<NFTDrop />
          	<FeaturedCollection/>
			<Contact />
        </div>
      </TopNavbarLayout>
    </div>
  )
}

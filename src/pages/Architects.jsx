import React from 'react'
import ArchitectsBanner from '../components/architectComponent/architectsBanner'
import PartnerSupport from '../components/architectComponent/PartnerSupport'
import CasewellPartner from '../components/architectComponent/CasewellPartner'
import Conversation from '../components/architectComponent/Conversation'
import WhyPartner from '../components/homeComponents/WhyPartner'

const Architects = () => {


  return (
    <>
      <div className='w-full h-full bg-[#F2F0EA]'>

        <ArchitectsBanner />
        <PartnerSupport />
        <CasewellPartner />
        <Conversation />
        <WhyPartner />
      </div>
    </>
  )
}

export default Architects
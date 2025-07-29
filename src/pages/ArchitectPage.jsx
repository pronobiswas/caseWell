import React from 'react'
import ArchitectsBanner from '../components/architectComponent/architectsBanner'
import PartnerSupport from '../components/architectComponent/PartnerSupport'
import CasewellPartner from '../components/architectComponent/CasewellPartner'
import Conversation from '../components/architectComponent/Conversation'
import WhyPartner from '../components/homeComponents/WhyPartner'

const ArchitectPage = () => {


  return (
    <>
        <ArchitectsBanner />
        <PartnerSupport />
        <CasewellPartner />
        <Conversation />
        <WhyPartner />
    </>
  )
}

export default ArchitectPage
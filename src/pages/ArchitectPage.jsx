import React from 'react'
import ArchitectsBanner from '../components/architectComponent/ArchitectsBanner'
import PartnerSupport from '../components/architectComponent/PartnerSupport'
import CasewellPartner from '../components/architectComponent/CasewellPartner'
import Conversation from '../components/architectComponent/Conversation'
import WhyPartner from '../components/homeComponents/WhyPartner'
import { useTranslation } from 'react-i18next'


const ArchitectPage = () => {
  const { t } = useTranslation();
  return (
    <>
        <ArchitectsBanner />
        <PartnerSupport />
        <Conversation />
        <CasewellPartner />
    </>
  )
}

export default ArchitectPage
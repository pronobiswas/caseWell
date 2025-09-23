import React from 'react';
import ServiceBanner from '../../components/aboutUsComponent/secviceComponent/ServiceBanner';
import ServiceTab from '../../components/aboutUsComponent/secviceComponent/ServiceTab';
import { useTranslation } from "react-i18next";
// i18n.language

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <div className='w-full bg-bgOne'>
        <ServiceBanner/>
        <ServiceTab/>
    </div>
    </>
  )
}

export default ServicesPage
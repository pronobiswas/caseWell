import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import CareNmaintaince from './CareNmaintaince';
import Delivery from './Delivery';
import FAQ from './FAQ';
import Guarantee from './Guarantee';
import OrderProcess from './OrderProcess';
import PaymentProcess from './PaymentProcess';
import ProductsNmaterials from './ProductsNmaterials';
import TechnicalSiteRequirement from './TechnicalSiteRequirement';
import MeasurementDesignApprovals from './MeasurementDesignApprovals';
import PaymentInvoicing from './PaymentInvoicing';
import LeadTimesScheduling from './LeadTimesScheduling';


const ServiceTab = () => {
    const [activeTab, setActiveTab] = useState("ServiceBanner");
    const contentRef = useRef(null);
    const tabs = [
        { key: "OrderProcess", label: "Order process", component: <OrderProcess /> },
        { key: "Delivery", label: "Delivery", component: <Delivery /> },
        { key: "Guarantee", label: "Guarantee", component: <Guarantee /> },
        { key: "PaymentProcess", label: "Payment Process", component: <PaymentProcess /> },
        { key: "CareMaintaince", label: "Care & Maintaince", component: <CareNmaintaince /> },
        { key: "ProductsNmaterials", label: "Products & Materials", component: <ProductsNmaterials /> },
        { key: "TechnicalSiteRequirement", label: "Technical & Site Requirement", component: <TechnicalSiteRequirement /> },
        { key: "MeasurementDesignApprovals", label: "Measurement, Design & Approvals", component: <MeasurementDesignApprovals /> },
        { key: "PaymentInvoicing", label: "Payment & Invoicing", component: <PaymentInvoicing /> },
        { key: "LeadTimesScheduling", label: "Lead Times & Scheduling", component: <LeadTimesScheduling /> },
        { key: "FAQ", label: "FAQ", component: <FAQ /> },
    ];
    useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [activeTab]);
    return (
        <>
            <section id="serviceTab">
                <div className="wrapper w-full h-auto p-5 md:p-10 lg:p-14">
                    

                    <div className="navTab w-full  flex justify-center gap-5 flex-wrap [&>button]:px-5 [&>button]:py-2 [&>button]:border [&>button]:border-black [&>button]:rounded-full [&>button]:text-xl [&>button]:hover:text-xl hover:[&>button]:bg-colorOne hover:[&>button]:text-bgOne">
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                >
                                    {tab.label}
                                </button>
                            ))
                        }
                    </div>
                    <div ref={contentRef} className="mt-4">
                        {tabs.find((tab) => tab.key === activeTab)?.component}
                    </div>

                </div>
            </section>
        </>
    )
}

export default ServiceTab
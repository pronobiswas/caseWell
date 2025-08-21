import React, { useRef, useState } from 'react'
import ProductsNmaterials from './ProductsNmaterials';
import TechnicalSiteRequirement from './TechnicalSiteRequirement';
import MeasurementDesignApprovals from './MeasurementDesignApprovals';
import PaymentInvoicing from './PaymentInvoicing';
import LeadTimesScheduling from './LeadTimesScheduling';
import DeliveryAndInstallation from './DeliveryAndInstallation';
import WarrantyAftercare from './WarrantyAftercare';
import OrderReturnsSupports from './OrderReturnsSupports';

const FAQ = () => {
    const [activeTab, setActiveTab] = useState("ProductsNmaterials");
    const contentRef = useRef(null);
    const tabs = [
        { key: "ProductsNmaterials", label: "Products & Materials", component: <ProductsNmaterials /> },
        { key: "TechnicalSiteRequirement", label: "Technical & Site Requirement", component: <TechnicalSiteRequirement /> },
        { key: "MeasurementDesignApprovals", label: "Measurement, Design & Approvals", component: <MeasurementDesignApprovals /> },
        { key: "PaymentInvoicing", label: "Payment & Invoicing", component: <PaymentInvoicing /> },
        { key: "LeadTimesScheduling", label: "Lead Times & Scheduling", component: <LeadTimesScheduling /> },
        { key: "DeliveryAndInstallation", label: "Delivery & Installation", component: <DeliveryAndInstallation /> },
        { key: "WarrantyAftercare", label: "Warranty & Aftercare ", component: <WarrantyAftercare /> },
        { key: "OrderReturnsSupports", label: "Orders, Returns & Support", component: <OrderReturnsSupports /> },
    ];
    return (
        <section id="serviceTab">
            <div className="wrapper w-full h-auto pt-10 flex gap-5 lg:gap-10  ">


                <div className="navTab w-1/3 lg:w-1/4 pt-6 flex flex-col gap-5 [&>button]:w-fit [&>button]:text-xl [&>button]:border-b [&>button]:border-b-slate-500 [&>button]:text-left lg:[&>button]:text-2xl">
                    {
                        tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                 className={`${activeTab === tab.key ? "text-green-500 font-semibold border-b-black" : "text-colorOne border-b-slate-500"}`}
                            >
                                {tab.label}
                            </button>
                        ))
                    }
                </div>

                <div ref={contentRef} className="w-2/3 lg:w-3/4">
                    {tabs.find((tab) => tab.key === activeTab)?.component}
                </div>

            </div>
        </section>
    )
}

export default FAQ
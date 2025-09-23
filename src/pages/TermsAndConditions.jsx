import React from "react";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="termsAndCondition" className="w-full h-full bg-myColorTwo">
        <div className="tremsWrapper w-full h-full py-20 px-5 lg:px-12">
          <div className="container text-DarkText text-base font-Poppins [&_h2]:text-4xl [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-5  [&_ul]:p-5">
            <div className="w-full h-full max-w-5xl mx-auto">
              {/* -------heading------ */}
              <div className="w-full pb-8 pt-8">
                <h2 className="text-5xl font-Montserrat text-DarkText pb-5">
                  {t("TermsAndConditions.heading.title")}
                </h2>
                <p className="text-base">
                  {t("TermsAndConditions.heading.desc")}
                </p>
              </div>
              {/* ======article one===1===== */}
              <div className="articel1 w-full flex flex-col">
                <h2 className="mb-3">{t("TermsAndConditions.Definitions.title")} </h2>
                {/* ----1.1--- */}
                <div className="articel [&>h3]:text-2xl [&>h3]:py-2">
                  <h3>{t("TermsAndConditions.Definitions.ZebranoStudio.title")}</h3>
                  <p className="pl-5">
                    {t("TermsAndConditions.Definitions.ZebranoStudio.desc")}
                  </p>
                </div>
                {/* -----1.2---- */}
                <div className="articel [&>h3]:text-2xl [&>h3]:py-2">
                  <h3>{t("TermsAndConditions.Definitions.Customer.title")}</h3>
                  <p className="pl-5">
                    {t("TermsAndConditions.Definitions.Customer.desc")}
                  </p>
                  {/* ---1.2.1--- */}
                  <div className="articel [&>h3]:text-2xl [&>h3]:py-2">
                    <h3>{t("TermsAndConditions.Definitions.BusinessCustomer.title")}</h3>
                    <p className="pl-5">
                      {t("TermsAndConditions.Definitions.BusinessCustomer.desc")}
                    </p>
                  </div>
                  {/* ---1.2.2--- */}
                  <div className="articel [&>h3]:text-2xl [&>h3]:py-2">
                    <h3>{t("TermsAndConditions.Definitions.Consumer.title")}</h3>
                    <p className="pl-5 ">
                      {t("TermsAndConditions.Definitions.Consumer.desc")}
                    </p>
                  </div>
                </div>
                {/* ------1.3------ */}
                <div className="article [&>h3]:text-2xl [&>h3]:py-2">
                  <h3>{t("TermsAndConditions.Definitions.CustomMadeGoods.title")}</h3>
                  <p className="pl-5">
                    {t("TermsAndConditions.Definitions.CustomMadeGoods.desc")}
                  </p>
                </div>
              </div>
              {/* =========article2====== */}
              <article className="mt-5">
                <h2>{t("TermsAndConditions.Applicability.title")} </h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.Applicability.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Applicability.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Applicability.text3")}
                  </li>
                </ul>
              </article>
              {/* ====article3==== */}
              <article>
                <h2> {t("TermsAndConditions.OfferQuotation.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.OfferQuotation.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.OfferQuotation.text2")}
                  </li>
                </ul>
              </article>
              {/* ====article4==== */}
              <article>
                <h2>{t("TermsAndConditions.TheAgreement.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.TheAgreement.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TheAgreement.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TheAgreement.text3")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TheAgreement.text4")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TheAgreement.text5")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TheAgreement.text6")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TheAgreement.text7")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TheAgreement.text8")}
                  </li>
                </ul>
              </article>
              {/* ====article5==== */}
              <article>
                <h2>{t("TermsAndConditions.RightOfWithdrawal.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.RightOfWithdrawal.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.RightOfWithdrawal.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.RightOfWithdrawal.text3")}
                  </li>
                  <li>
                    {t("TermsAndConditions.RightOfWithdrawal.text4")}
                  </li>
                </ul>
              </article>
              {/* =====article6====== */}
              <article className="pb-7">
                <h2>{t("TermsAndConditions.IntellectualProperty.title")}</h2>
                <p className="pl-5">
                  {t("TermsAndConditions.IntellectualProperty.text1")}
                </p>
              </article>
              {/* =====article7====== */}
              <article>
                <h2>{t("TermsAndConditions.DeliveryTime.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.DeliveryTime.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.DeliveryTime.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.DeliveryTime.text3")}
                  </li>
                  <li>
                    {t("TermsAndConditions.DeliveryTime.text4")}
                  </li>
                  <li>
                    {t("TermsAndConditions.DeliveryTime.text5")}
                  </li>
                </ul>
              </article>
              {/* =====article8====== */}
              <article>
                <h2>{t("TermsAndConditions.TransportAndDamage.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.TransportAndDamage.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TransportAndDamage.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.TransportAndDamage.text3")}
                  </li>
                </ul>
              </article>
              {/* =====article9====== */}
              <article>
                <h2>{t("TermsAndConditions.Delivery.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.Delivery.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Delivery.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Delivery.text3")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Delivery.text4")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Delivery.text5")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Delivery.text6")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Delivery.text7")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Delivery.text8")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Delivery.text9")}
                  </li>
                </ul>
              </article>
              {/* =====article10===== */}
              <article>
                <h2>{t("TermsAndConditions.StorageOfProducts.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.StorageOfProducts.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.StorageOfProducts.text2")}
                  </li>
                </ul>
              </article>
              {/* =====article11===== */}
              <article>
                <h2>{t("TermsAndConditions.Payment.title")} </h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.Payment.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Payment.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Payment.text3")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Payment.text4")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Payment.text5")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Payment.text6")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Payment.text7")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Payment.text8")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Payment.text9")}
                  </li>
                </ul>
              </article>
              {/* =====article12===== */}
              <article>
                <h2>{t("TermsAndConditions.Warranty.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.Warranty.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Warranty.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Warranty.text3")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Warranty.text4")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Warranty.text5")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Warranty.text6")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Warranty.text7")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Warranty.text8")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Warranty.text9")}
                  </li>
                </ul>
              </article>
              {/* =====article13===== */}
              <article>
                <h2> {t("TermsAndConditions.Liability.title")} </h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.Liability.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Liability.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Liability.text3")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Liability.text4")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Liability.text5")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Liability.text6")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Liability.text7")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Liability.text8")}
                  </li>
                </ul>
              </article>
              {/* =====article14===== */}
              <article>
                <h2>{t("TermsAndConditions.Complaints.title")}</h2>
                <ul>
                  <li>
                    {t("TermsAndConditions.Complaints.text1")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Complaints.text2")}
                  </li>
                  <li>
                    {t("TermsAndConditions.Complaints.text3")}
                  </li>
                </ul>
              </article>
              {/* =====article15===== */}
              <article>
                <h2>{t("TermsAndConditions.ApplicableLaw.title")}</h2>
                <p>
                  {t("TermsAndConditions.ApplicableLaw.text")}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;

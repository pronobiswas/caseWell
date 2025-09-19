import React from "react";
import { useTranslation } from "react-i18next";

// i18n.language

const PrivecyPolicy = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
      <section
        id="privecyPolicy"
        className="w-full h-full bg-bgOne pt-32 pb-20"
      >
        <div className="container">
          <div className=" priecyPolicyWrapper w-full max-w-5xl mx-auto p-5 xl:p-10">
            <div className="w-full flex flex-col gap-5">
              <h2 className="text-5xl">
                {t("privecyPolicy.header.heading")}
              </h2>
              <p>
                <b>{t("privecyPolicy.header.EffectiveDate")}</b>
                {t("privecyPolicy.header.date")}
              </p>
              <p>
                {t("privecyPolicy.header.desc")}
              </p>
            </div>
            {/* ====1 who we are==== */}
            <div className="w-full flex flex-col gap-2 py-5">
              <h2 className="text-3xl font-Montserrat ">
                Who We Are (Data Controller)
              </h2>
              <p className="ml-5">
                As the data controller, Zebrano Studio is responsible for the
                processing of your personal data.
              </p>
              <address className="ml-8">
                <p className="text-xl">
                  <b>Zebrano Studio</b>
                </p>
                <p>Herikebrink 37 7544ER Enschede</p>
                <p>The Netherlands</p>
                <p>Info@zebranostudio.com</p>
                <p>+31 6 42 99 70 18</p>
              </address>
            </div>
            {/* ====2 Types of Personal Data We Collect==== */}
            <h2 className="text-4xl lg:mt-10 font-MontSerrat">
              {t("privecyPolicy.TypesOfPersonalData.title")}
            </h2>
            <div className="w-full md:pl-10 p-5">
              <p className="">
                {t("privecyPolicy.TypesOfPersonalData.desc")}
              </p>
              <div className="">
                <ul className="flex flex-col gap-5 [&>li]:flex [&>li]:flex-col md:[&>li]:flex-row [&>li]:gap-2 md:[&>li]:gap-5">
                  <li>
                    <p className="text-nowrap ">
                      <b>{t("privecyPolicy.TypesOfPersonalData.row1.text1")}</b>
                    </p>
                    <p>
                      {t("privecyPolicy.TypesOfPersonalData.row1.text2")}
                    </p>
                  </li>
                  <li>
                    <p className="text-nowrap ">
                      <b>{t("privecyPolicy.TypesOfPersonalData.row2.text1")}</b>
                    </p>
                    <p>
                      {t("privecyPolicy.TypesOfPersonalData.row2.text2")}
                    </p>
                  </li>
                  <li>
                    <p className="text-nowrap ">
                      <b>{t("privecyPolicy.TypesOfPersonalData.row3.text1")}</b>
                    </p>
                    <p>
                      {t("privecyPolicy.TypesOfPersonalData.row3.text2")}
                    </p>
                  </li>
                  <li>
                    <p className="text-nowrap ">
                      <b>{t("privecyPolicy.TypesOfPersonalData.row4.text1")}</b>
                    </p>
                    <p>
                      {t("privecyPolicy.TypesOfPersonalData.row4.text2")}
                    </p>
                  </li>
                  <li>
                    <p className="text-nowrap ">
                      <b>{t("privecyPolicy.TypesOfPersonalData.row5.text1")}</b>
                    </p>
                    <p>
                      {t("privecyPolicy.TypesOfPersonalData.row5.text2")}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* ====3. How We Collect Your Personal Data===== */}
            <h2 className="text-4xl mt-5 lg:mt-10 ">
              {t("privecyPolicy.HowWeCollect.title")}
            </h2>
            <div className="w-full flex flex-col gap-2 p-5">
              <p>{t("privecyPolicy.HowWeCollect.desc")}</p>
              <ul>
                <li>
                  <p>
                    <b>{t("privecyPolicy.HowWeCollect.row1.text1")}</b> 
                    {t("privecyPolicy.HowWeCollect.row1.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>{t("privecyPolicy.HowWeCollect.row2.text1")} </b> {t("privecyPolicy.HowWeCollect.row2.text2")}
                  </p>
                </li>
              </ul>
            </div>
            {/* ====4. Purposes and Legal Basis for Processing Your Personal Data=== */}
            <div className="w-full flex flex-col gap-2 py-5 lg:py-10">
              <h2 className="text-4xl ">
                {t("privecyPolicy.Purposes.heading")}
              </h2>
              <p>
                {t("privecyPolicy.Purposes.desc")}
              </p>
              <div className="p-5">
                {/* --------- */}
                <h4 className="text-2xl  ">
                  {t("privecyPolicy.Purposes.ToProvide.title")}
                </h4>
                <div className="pl-5 p-2">
                  <p>{t("privecyPolicy.Purposes.ToProvide.text1")}</p>
                  <p>{t("privecyPolicy.Purposes.ToProvide.text2")}</p>
                  <p>{t("privecyPolicy.Purposes.ToProvide.text3")}</p>
                  <p>{t("privecyPolicy.Purposes.ToProvide.text4")}</p>
                  <p>{t("privecyPolicy.Purposes.ToProvide.text5")}</p>
                </div>
                {/* ------------ */}
                <h4 className="text-2xl ">{t("privecyPolicy.Purposes.ToCommunicate.title")}</h4>
                <div className="pl-5 p-2">
                  <p>{t("privecyPolicy.Purposes.ToCommunicate.text1")}</p>
                  <p>{t("privecyPolicy.Purposes.ToCommunicate.text2")}</p>
                  <p>{t("privecyPolicy.Purposes.ToCommunicate.text3")}</p>
                </div>
                {/* ----------- */}
                <h4 className="text-2xl ">{t("privecyPolicy.Purposes.ForMarketing.title")}</h4>
                <div className="pl-5 p-2">
                  <p>
                    {t("privecyPolicy.Purposes.ForMarketing.text1")}
                  </p>
                  <p>
                    {t("privecyPolicy.Purposes.ForMarketing.text2")}
                  </p>
                </div>
                {/* ----------------- */}
                <h4 className="text-2xl ">
                  {t("privecyPolicy.Purposes.ToImprove.title")}
                </h4>
                <div className="pl-5 p-2">
                  <p>{t("privecyPolicy.Purposes.ToImprove.text1")}</p>
                  <p>{t("privecyPolicy.Purposes.ToImprove.text2")}</p>
                  <p>{t("privecyPolicy.Purposes.ToImprove.text3")}</p>
                </div>
                {/* -------------------- */}
                <h3 className="text-2xl ">
                  {t("privecyPolicy.Purposes.ForLegal.title")}
                </h3>
                <div className="pl-5 p-2">
                  <p>{t("privecyPolicy.Purposes.ForLegal.text1")}</p>
                  <p>{t("privecyPolicy.Purposes.ForLegal.text2")}</p>
                  <p>{t("privecyPolicy.Purposes.ForLegal.text3")}</p>
                  <p>{t("privecyPolicy.Purposes.ForLegal.text4")}</p>
                </div>
              </div>
            </div>
            {/* =====5. Cookies and Similar Technologies====== */}
            <div>
              <p className="font-Poppins">
                {t("privecyPolicy.Purposes.CookiePolicy")}
              </p>
            </div>
            {/* ==========6. Sharing Your Personal Data======== */}
            <div className="py-8 lg:py-10">
              <h4 className="text-3xl  mb-2">{t("privecyPolicy.Sharing.title")}</h4>
              <p>
                {t("privecyPolicy.Sharing.desc")}
              </p>
              <ul className="pl-5 mt-2">
                <li>
                  <p>
                    <b>{t("privecyPolicy.Sharing.row1.text1")}</b>
                    {t("privecyPolicy.Sharing.row1.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>{t("privecyPolicy.Sharing.row2.text1")}</b>
                    {t("privecyPolicy.Sharing.row2.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>{t("privecyPolicy.Sharing.row3.text1")}</b>
                    {t("privecyPolicy.Sharing.row3.text2")}
                    transaction.
                  </p>
                </li>
              </ul>
            </div>
            {/* ======7. International Data Transfers====== */}
            <div className="py-8">
              <h2 className="text-3xl mb-2">{t("privecyPolicy.International.title")}</h2>
              <p>
               {t("privecyPolicy.International.desc")}
              </p>
            </div>
            {/* =======8. Data Retention====== */}
            <div>
              <h3 className="text-3xl mb-2">{t("privecyPolicy.DataRetention.title")}</h3>
              <p>
                {t("privecyPolicy.DataRetention.desc")}
              </p>
            </div>
            {/* =======9. Data Security====== */}
            <div className="py-8 lg:py-10">
              <h3 className="text-3xl ">{t("privecyPolicy.DataSecurity.title")}</h3>
              <p>
                {t("privecyPolicy.DataSecurity.desc")}
              </p>
            </div>
            {/* =====10. Your Data Protection Rights (GDPR)====== */}
            <div className="w-full">
              <h2 className="text-3xl  mb-2">
                {t("privecyPolicy.GDPR.title")}
              </h2>
              <p>
                {t("privecyPolicy.GDPR.desc")}
              </p>
              <ul className="p-5">
                <li>
                  <p>
                    <b>{t("privecyPolicy.GDPR.row1.text1")}</b> 
                    {t("privecyPolicy.GDPR.row1.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>{t("privecyPolicy.GDPR.row2.text1")}</b> 
                    {t("privecyPolicy.GDPR.row2.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      {t("privecyPolicy.GDPR.row3.text1")}
                    </b>
                    {t("privecyPolicy.GDPR.row3.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>{t("privecyPolicy.GDPR.row4.text1")}</b>
                    {t("privecyPolicy.GDPR.row4.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>{t("privecyPolicy.GDPR.row5.text1")}</b>
                    {t("privecyPolicy.GDPR.row5.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>{t("privecyPolicy.GDPR.row6.text1")}</b>
                    {t("privecyPolicy.GDPR.row6.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      {t("privecyPolicy.GDPR.row7.text1")}
                    </b>{" "}
                    {t("privecyPolicy.GDPR.row7.text2")}
                  </p>
                </li>
                <li>
                  <p>
                    <b>{t("privecyPolicy.GDPR.row8.text1")}</b>
                    {t("privecyPolicy.GDPR.row8.text2")}
                  </p>
                </li>
              </ul>
              <p>
                {t("privecyPolicy.GDPR.ToExercise")}
              </p>
            </div>
            {/* =====11. Children's Privacy======= */}
            <div className="py-8 lg:py-10">
              <h2 className="text-3xl  mb-2">{t("privecyPolicy.ChildrenPrivacy.title")}</h2>
              <p>
                {t("privecyPolicy.ChildrenPrivacy.desc")}
              </p>
            </div>
            {/* =====12. Changes to This Privacy Policy===== */}
            <div>
              <h2 className="text-3xl  mb-2">{t("privecyPolicy.ChangesTo.title")}</h2>
              <p>
                {t("privecyPolicy.ChangesTo.desc")}
              </p>
            </div>
            {/* =====13. Contact Us======= */}
            <div className="py-8 lg:py-10">
              <h2 className="text-3xl  mb-2">{t("privecyPolicy.ContactUs.title")}</h2>
              <p>
                {t("privecyPolicy.ContactUs.desc")}
              </p>
              <p className="hidden">
                Zebrano Studio Herikebrink 37 7544ER Enschede, The Netherlands
                Info@zebranostudio.com +31 6 42 99 70 18
              </p>
            </div>
            {/* ======14. Right to Lodge a Complaint======= */}
            <div>
              <h2 className="text-3xl mb-2">{t("privecyPolicy.RightToLodge.title")}</h2>
              <p>
                {t("privecyPolicy.RightToLodge.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivecyPolicy;

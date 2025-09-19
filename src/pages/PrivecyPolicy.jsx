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
                <h4 className="text-2xl ">To Communicate with You:</h4>
                <div className="pl-5 p-2">
                  <p>Responding to your questions and requests.</p>
                  <p>
                    Sending important service-related updates (e.g., order
                    status).
                  </p>
                  <p>
                    Legal Basis: Performance of a contract (Art. 6(1)(b)) or
                    legitimate interest (Art. 6(1)(f)) in effective
                    communication.
                  </p>
                </div>
                {/* ----------- */}
                <h4 className="text-2xl ">For Marketing Purposes:</h4>
                <div className="pl-5 p-2">
                  <p>
                    Sending you newsletters, promotions, and information about
                    our products and services that may be of interest to you,
                    where you have opted in.
                  </p>
                  <p>
                    Legal Basis: Your consent (GDPR Art. 6(1)(a)). You can
                    withdraw your consent at any time.
                  </p>
                </div>
                {/* ----------------- */}
                <h4 className="text-2xl ">
                  To Improve Our Website and Services:
                </h4>
                <div className="pl-5 p-2">
                  <p>
                    Analyzing website usage to understand user behavior and
                    improve website functionality and user experience.
                  </p>
                  <p>Developing new products and services.</p>
                  <p>
                    Legal Basis: Legitimate interest (GDPR Art. 6(1)(f)) in
                    improving our business and offerings.
                  </p>
                </div>
                {/* -------------------- */}
                <h3 className="text-2xl ">
                  For Legal Compliance and Protection:
                </h3>
                <div className="pl-5 p-2">
                  <p>
                    Complying with legal obligations (e.g., tax, accounting).
                  </p>
                  <p>
                    Protecting our rights, property, or safety, and that of our
                    customers or others.
                  </p>
                  <p>Preventing fraud and ensuring security.</p>
                  <p>
                    Legal Basis: Legal obligation (GDPR Art. 6(1)(c)) or
                    legitimate interest (Art. 6(1)(f)) in protecting our
                    business.
                  </p>
                </div>
              </div>
            </div>
            {/* =====5. Cookies and Similar Technologies====== */}
            <div>
              <p className="font-Poppins">
                Our website uses cookies and similar technologies to enhance
                your browsing experience, analyze site traffic, and for
                marketing purposes. You can manage your cookie preferences
                through your browser settings. For more detailed information,
                please refer to our separate Cookie Policy [Link to your Cookie
                Policy, if you have one].
              </p>
            </div>
            {/* ==========6. Sharing Your Personal Data======== */}
            <div className="py-8 lg:py-10">
              <h4 className="text-3xl  mb-2">Sharing Your Personal Data</h4>
              <p>
                We will not sell, rent, or lease your personal data to third
                parties. We may share your personal data with:
              </p>
              <ul className="pl-5 mt-2">
                <li>
                  <p>
                    <b>Service Providers:</b> Third-party companies that perform
                    services on our behalf, such as payment processing, website
                    hosting, analytics, marketing, and delivery services. These
                    providers are contractually obligated to protect your data
                    and only use it for the purposes for which it was provided.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Legal Requirements:</b>If required to do so by law or in
                    response to valid requests by public authorities (e.g., a
                    court order or government agency).
                  </p>
                </li>
                <li>
                  <p>
                    <b>Business Transfers:</b> In connection with a merger,
                    acquisition, or sale of all or a portion of our assets, your
                    personal data may be transferred as part of that
                    transaction.
                  </p>
                </li>
              </ul>
            </div>
            {/* ======7. International Data Transfers====== */}
            <div className="py-8">
              <h2 className="text-3xl mb-2">International Data Transfers</h2>
              <p>
                As Zebrano Studio operates within the EU, your personal data
                will primarily be processed within the European Economic Area
                (EEA). If we transfer personal data to countries outside the
                EEA, we will ensure that appropriate safeguards are in place
                (e.g., Standard Contractual Clauses) to protect your data in
                accordance with GDPR.
              </p>
            </div>
            {/* =======8. Data Retention====== */}
            <div>
              <h3 className="text-3xl mb-2">Data Retention</h3>
              <p>
                We retain your personal data only for as long as necessary to
                fulfill the purposes for which it was collected, including for
                the purposes of satisfying any legal, accounting, or reporting
                requirements. The retention period depends on the type of data
                and the purpose for which it was collected.
              </p>
            </div>
            {/* =======9. Data Security====== */}
            <div className="py-8 lg:py-10">
              <h3 className="text-3xl ">Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. These measures include
                data encryption, access controls, and regular security
                assessments.
              </p>
            </div>
            {/* =====10. Your Data Protection Rights (GDPR)====== */}
            <div className="w-full">
              <h2 className="text-3xl  mb-2">
                10. Your Data Protection Rights (GDPR)
              </h2>
              <p>
                Under the GDPR, you have the following rights regarding your
                personal data:
              </p>
              <ul className="p-5">
                <li>
                  <p>
                    <b>Right to Access (Art. 15 GDPR):</b> You have the right to
                    request a copy of the personal data we hold about you.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Right to Rectification (Art. 16 GDPR): </b> You have the
                    right to request that we correct any inaccurate or
                    incomplete personal data.
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      Right to Erasure ("Right to Be Forgotten") (Art. 17 GDPR):
                    </b>{" "}
                    You have the right to request the deletion of your personal
                    data under certain circumstances.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Right to Restriction of Processing (Art. 18 GDPR):</b>{" "}
                    You have the right to request that we restrict the
                    processing of your personal data under certain conditions.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Right to Data Portability (Art. 20 GDPR): </b>You have
                    the right to receive your personal data in a structured,
                    commonly used, and machine-readable format and to transmit
                    it to another controller.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Right to Object (Art. 21 GDPR):</b>You have the right to
                    object to the processing of your personal data in certain
                    situations, particularly when processing is based on
                    legitimate interests or for direct marketing.
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      Rights in Relation to Automated Decision-Making and
                      Profiling (Art. 22 GDPR):{" "}
                    </b>{" "}
                    You have the right not to be subject to a decision based
                    solely on automated processing, including profiling, which
                    produces legal effects concerning you or similarly
                    significantly affects you.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Right to Withdraw Consent:</b> If we are processing your
                    personal data based on your consent, you have the right to
                    withdraw that consent at any time. This will not affect the
                    lawfulness of processing based on consent before its
                    withdrawal.
                  </p>
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                contact details provided in Section 1. We will respond to your
                request within one month.
              </p>
            </div>
            {/* =====11. Children's Privacy======= */}
            <div className="py-8 lg:py-10">
              <h2 className="text-3xl  mb-2"> Children's Privacy</h2>
              <p>
                Our website and services are not directed at individuals under
                the age of 16. We do not knowingly collect personal data from
                children under 16. If we become aware that we have inadvertently
                collected personal data from a child under 16, we will take
                steps to delete such information as soon as possible.
              </p>
            </div>
            {/* =====12. Changes to This Privacy Policy===== */}
            <div>
              <h2 className="text-3xl  mb-2">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any significant
                changes by posting the new Privacy Policy on our website with a
                revised "Effective Date." We encourage you to review this
                Privacy Policy periodically.
              </p>
            </div>
            {/* =====13. Contact Us======= */}
            <div className="py-8 lg:py-10">
              <h2 className="text-3xl  mb-2">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, or if you wish to exercise any of your rights, please
                contact us at:
              </p>
              <p>
                Zebrano Studio Herikebrink 37 7544ER Enschede, The Netherlands
                Info@zebranostudio.com +31 6 42 99 70 18
              </p>
            </div>
            {/* ======14. Right to Lodge a Complaint======= */}
            <div>
              <h2 className="text-3xl mb-2">Right to Lodge a Complaint</h2>
              <p>
                If you believe that your data protection rights have been
                violated, you have the right to lodge a complaint with the Dutch
                Data Protection Authority (Autoriteit Persoonsgegevens - AP):
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivecyPolicy;

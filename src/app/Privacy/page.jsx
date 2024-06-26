import React from "react";
import "../../style/content.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Privacy() {
    const navArray = [
        {
          label: "Home",
          url: "/",
          target:""
        },
        {
          label: "Privacy",
          url: "/Privacy",
          target:"_blank"
        },
        {
          label: "Cookies",
          url: "/Cookies",
          target:"_blank"
        },
      ];

  return (
    <section className="">
                <div className="px-5 sm:px-16 2xl:px-16 bg-main">
                <Navbar theme="dark" data={navArray} />
                </div>

      <div className="contentPage content mx-auto max-w-7xl px-5 sm:px-10 py-10 text-main flex flex-col gap-5">
        <h1>Privacy Policy</h1>
        <hr className="my-5" />
        <h2>Last Updated: 10-Nov-2022</h2>
        <p>
          This Privacy Notice must be read by all Users with consideration and
          agreement in conjunction with Our other Policies and Terms &
          Conditions, which will provide context and definitions.
        </p>
        <h2>Introduction</h2>
        <p>
          This Privacy Notice applies to The Apply Group {"Ltd's"} Website(s) as
          defined on the Company Terms & Conditions, connecting existing
          university students (Mentors/Tutors) with potential applicants
          (Students/Applicants) and their representatives (inc. parents, legal
          guardians, schools) as well as potential employers. When we mention ”
          TAG” or refer to, “we, us or our” in this Privacy Notice then we are
          referring to:
        </p>
        <p>
          <b>The Apply Group Ltd.</b> {"('TAG')"} with CRN: 12938105 has its
          registered office at: Suite 209, Mayfair Point, 34 South Molton
          Street, London W1K 5RG, United Kingdom.
        </p>
        <p>
          This Privacy Policy sets out the types of Personal Information we
          collect about Users; the data subject when you use our platform, as
          well as details on how we use and store that Personal Information, who
          we share it with, and what rights you may have in respect of that
          Personal Information.We respect your privacy and are committed to
          protecting your personal data.
        </p>
        <ul>
          <li>IMPORTANT INFORMATION AND WHO WE ARE</li>
          <li>THE DATA WE COLLECT ABOUT YOU</li>
          <li>HOW IS YOUR PERSONAL DATA COLLECTED</li>
          <li>OUR LEGAL BASIS FOR USING YOUR PERSONAL DATA</li>
          <li>HOW WE USE YOUR PERSONAL DATA</li>
          <li>DISCLOSURES OF YOUR PERSONAL DATA</li>
          <li>INTERNATIONAL TRANSFERS</li>
          <li>DATA SECURITY</li>
          <li>DATA RETENTION</li>
          <li>YOUR LEGAL RIGHTS</li>
        </ul>
        <h2>1. Important information and who we are</h2>
        <p>
          This Privacy Notice aims to give you clear and detailed information
          about:
        </p>
        <ul>
          <li>
            {" "}
            how we collect and process your personal data• the legal grounds
            allowing us to do so
          </li>
          <li>how we look after your personal data• your privacy rights</li>
          <li>how the law protects you.</li>
        </ul>
        <p>Controller</p>
        <p>
          Under data protection law the controller of your personal data decides
          how and why your personal data will be processed and takes
          responsibility for looking after your personal data. The controller of
          your personal data will be specifically Us, The Apply Group Ltd.
        </p>
        <h2>Data Subject</h2>
        <p>
          In this privacy notice we refer to the data subject as {"'you the user'"}.
          A data subject is an identified or identifiable living individual to
          whom personal data relates.
        </p>
        <h2>Data Protection Compliance Manager</h2>
        <p>
          We have appointed an external trained and experienced data protection
          compliance manager (DPCM) who is responsible for overseeing questions
          in relation to this Privacy Notice. If you have any questions about
          this Privacy Notice, including any requests to exercise your legal
          rights, please contact the DPCM using the details set out below.
        </p>
        <h2>Main Company Contact details</h2>
        <p>
          Full name of legal entity: The Apply Group Ltd. ICO Registration
          Number: <span className="text-sec">00019876788</span> Email address:
          contact(at)theapplygroup(dot)com
          <br />
          Postal address: Suite 209, Mayfair Point 34 South Molton Street,
          London, England, W1K 5RG
        </p>
        <h2>
          Changes to the Privacy Notice and your duty to inform Us of changes
        </h2>
        <p>
          It is important that the personal data we hold about you is accurate
          and current. Please keep us informed if your personal data changes
          during your relationship with us.When we issue a new version of this
          privacy notice we will post a message on our websites advising of
          this.
        </p>
        <h2>Third-party links</h2>
        <p>
          This website may include links to third-party websites, plug-ins and
          applications. Clicking on those links or enabling those connections
          may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their
          privacy statements. When you leave our website, we encourage you to
          read the privacy notice of every website you visit. The websites of
          any of our subsidiary businesses are subject to this privacy policy.
        </p>
        <ul>
          <li>
            Identity Data includes first name, last name, username, student ID
            number, marital status, title, date of birth, gender, photograph,
            immigration status, right to work, visa status, curriculum vitae
            (CV), covering letter, academic record, employment history and
            references, DBS information and experience relevant to assisting,
            mentoring and tutoring previous Tutees/Mentes.
          </li>
          <li>
            Special Category Data includes details about your race or ethnicity,
            religious beliefs, information about your health, genetic and
            biometric data (we have in place safeguards for processing such data
            including confidentiality agreements and restrictions on access to
            such data). Criminal Conviction Data includes details about any
            unspent criminal convictions and offences (where not covered by
            Section 1 (1) of the Rehabilitation of Offenders Act 1974) (we have
            in place an appropriate policy document and safeguards which we are
            required by law to maintain when processing such data).
          </li>
          <li>
            Contact Data includes your home address, email address and telephone
            numbers, next of kin and emergency contact information. Financial
            Data includes bank account and payment card details.
          </li>
          <li>
            Transaction Data includes details about payments to and from you and
            other details of services you have purchased from us or other Users.
          </li>
          <li>
            Technical Data includes internet protocol (IP) address, your login
            data, browser type and version, time zone setting and location,
            browser plug-in types and versions, operating system and platform
            and other technology on the devices you use when accessing Our
            Websites.
          </li>
          <li>
            Profile Data includes your username and password, purchases or
            orders made by you, your interests, preferences, feedback and survey
            responses.
          </li>
          <li>
            Usage Data includes information about how you use our websites and
            services.
          </li>
          <li>
            Marketing and Communications Data includes your preferences in
            receiving marketing from us and our third parties and your
            communication preferences.
          </li>
          <li>
            Aggregated Data includes statistical or demographic data which we
            may collect, use and share for any purpose. Where Aggregated Data
            can directly or indirectly identify you we will use it in accordance
            with this Privacy Notice.
          </li>
        </ul>
        <p>
          If you do not provide us with personal data, where we need to collect
          personal data by law, or under the terms of a contract we have with
          you and you fail to provide that data when requested, we may not be
          able to perform the contract we have or are trying to enter into with
          you. In this case, we may have to cancel a service you have with us
          but we will notify you if this is the case at the time. When
          communicating with your Mentor/Tutor or Applicant/Student please do
          not share personal information that You have not already shared with
          Us.
        </p>
        <p>
          We cannot monitor, protect or control or take any responsibility for
          the data You decide to share during Your meeting sessions or in any
          direct messaging function.
        </p>
        <p>
          It is in Your best interests to only share personal data that is
          important for purposes of providing/receiving booked Services.
        </p>
        <p>
          If You choose to disclose personal information that has not been
          collected by Us to a Mentor/Tutor or Student/Applicant you do this at
          your own risk, we will not be able to monitor, take any responsibility
          for or protect this data on Your behalf.
        </p>
        <h2>3. How is your personal data collected?</h2>
        <p>
          We use different methods to collect data from and about you including
          through:Direct interactions. You may give us your Identity Data,
          Special Category Data, Contact Data and Financial Data by filling in
          application forms, by sending us your CV and covering letter or by
          corresponding with us by post, phone, email or otherwise. This
          includes personal data you provide when/if You:
        </p>
        <ul>
          <li>Create an account on our website</li>
          <li>Requested marketing information is sent to you</li>
          <li>Apply for a job</li>
          <li>Apply to be a Mentor/Tutor</li>
          <li>Communicate between Mentor/Tutor and Student/Applicant</li>
          <li>Complete a survey</li>
          <li>Give us some feedback.</li>
        </ul>
        <p>
          We may receive personal data about you from various third parties and
          public sources such as those set out below:
        </p>
        <ul>
          <li>Named Referees - Identity Data and Contact Data</li>
          <li>Recruitment agencies - Identity Data and Contact Data</li>
          <li>Disclosure and Barring Service - Criminal Conviction Data</li>
          <li>Providers of technical, payment and delivery services</li>
          <li>Contact, Financial and Transaction Data</li>
          <li>
            Technical Data from the following parties:
            <ul>
              <li>(a) analytics providers</li>
              <li>(b) advertising networks</li>
              <li>(c) search information providers</li>
            </ul>
          </li>
        </ul>

        <p>
          Automated technologies or interactions. As you interact with our
          website, we may automatically collect Technical Data about your
          equipment, browsing actions and patterns. We collect this personal
          data by using cookies, server logs and other similar technologies. We
          may also receive Technical Data about you if you visit other websites
          employing our cookies. Please see our separate Cookies Policy for
          further details.
        </p>
        <h2>4. Our legal basis for using your personal data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul>
          <li>
            Where it is necessary for us to perform a contract entered into with
            you or is necessary for us to take steps (at your request) prior to
            us entering into a contract (CONTRACT).
          </li>
          <li>
            Where we have a legitimate organisational interest and use your
            personal data in a way that you would reasonably expect, and which
            has a minimal impact on your privacy (LEGITIMATE INTERESTS).
          </li>
          <li>
            Where we need to comply with a legal or regulatory obligation (LEGAL
            OBLIGATION).
          </li>
          <li>
            Where you have given us your consent to process your personal data
            (CONSENT).
          </li>
          <li>
            Where there is an emergency situation, for example, if you needed
            emergency medical treatment (VITAL INTERESTS).
          </li>
        </ul>
        <p>
          Generally, we do not rely on consent as a legal basis for processing
          your personal data other than in relation to the processing of Special
          Category Data or when sending third party direct marketing
          communications to you via email or text message.
        </p>
        <p>
          Note that we may process your personal data for more than one lawful
          ground depending on the specific purpose for which we are using your
          data.
        </p>
        <p>
          Please contact us if you need details about the specific legal ground
          we are relying on to process your personal data where more than one
          ground has been set out at <b>Table 1</b> shown at the foot of this
          notice.
        </p>
        <p>
          You have the right to withdraw your consent at any time by contacting
          Us.
        </p>
        <p>
          <b>Marketing</b>
        </p>
        <p>
          We strive to provide you with choices regarding certain personal data
          uses, particularly around marketing and advertising.
        </p>
        <p>
          You will receive marketing communications from us if you have
          requested information from us or purchased services from us or if you
          provided us with your details when you entered a competition or
          registered for a promotion and, in each case, you have not opted out
          of receiving that marketing.
        </p>
        <h2>Third-party marketing</h2>
        <p>
          We will get your express opt-in consent before we share your personal
          data with any company outside Our subsidiaries for marketing purposes.
        </p>
        <h2>Opting out</h2>
        <p>
          You can ask us or third parties to stop sending you marketing messages
          at any time by following the opt-out links on any marketing message
          sent to you or by contacting us at any time.
        </p>
        <p>
          When you opt-out of receiving these marketing messages, this will not
          apply to personal data provided to us as a result of purchasing a
          service or other transaction.
        </p>
        <h2>Change of purpose</h2>
        <p>
          We will only use your personal data for the purposes for which we
          collected it, unless we reasonably consider that we need to use it for
          another reason and that reason is compatible with the original
          purpose. If you wish to get an explanation as to how the processing
          for the new purpose is compatible with the original purpose, please
          contact us.
        </p>
        <p>
          If we need to use your personal data for an unrelated purpose, we will
          notify you and we will explain the legal basis which allows us to do
          so.
        </p>
        <p>
          Please note that we may process your personal data without your
          knowledge or consent, in compliance with the above rules, where this
          is required or permitted by law.
        </p>
        <h2>6. Disclosures of your personal data</h2>
        <p>
          We may have to share your personal data with the parties set out below
          for the purposes set out in the table in paragraph 5 above.
        </p>
        <h2>Internal Third Parties</h2>
        <p>
          Our Companies acting as joint controllers or processors and who are
          based in the UK,
        </p>
        <p>
          provide (i) process customer orders, (ii) issue or complaint
          resolution.
        </p>
        <h2>External Third Parties</h2>
        <ul>
          <li> Insurance providers</li>
          <li>
            Medical or Public Health authorities (and where an emergency
            situation to any other organisations/individuals deemed necessary as
            assessed at the time)
          </li>
          <li> Appointment/Scheduling and payment systems (inc, APIs)</li>
          <li> Employment/internship/work-placement/experience platforms</li>
          <li>
            Local councils/authorities• HM Revenue & Customs, regulators and
            other authorities acting as processors• Service providers worldwide
            acting as processors
          </li>
          <li> Cloud-hosted providers</li>
          <li>
            Professional advisers worldwide acting as processors or joint
            controllers
          </li>
          <li> Local authorities</li>
          <li>
            Third parties to whom we may choose to sell, transfer, or merge
            parts of our business or our assets.
          </li>
        </ul>
        <p>
          Alternatively, we may seek to acquire other businesses or merge with
          them. If a change happens to our business, then the new owners may use
          your personal data in the same way as set out in this privacy notice.
        </p>
        <p>
          We require all third parties to respect the security of your personal
          data and to treat it in accordance with the law. We do not allow our
          third-party service providers to use your personal data for their own
          purposes and only permit them to process your personal data for
          specified purposes and in accordance with our instructions.
        </p>
        <h2>7. International transfers</h2>
        <p>
          We share your personal data within Our company. This may involve in
          some cases transferring your data outside the European Economic Area
          (EEA).
        </p>
        <p>
          Some of our external third parties are based outside the EEA so their
          processing of your personal data will involve a transfer of data
          outside the EEA.
        </p>
        <p>
          Whenever we transfer your personal data out of the EEA, we ensure a
          similar degree of protection is afforded to it by ensuring at least
          one of the following safeguards is implemented:
        </p>
        <ul>
          <li>
            We will only transfer your personal data to countries that have been
            deemed to provide an adequate level of protection for personal data
            by the European Commission (as at the date of this Privacy Notice
            this applies to Andorra, Argentina, Canada (commercial
            organisations), Faroe Islands, Guernsey, Israel, Isle of Man, Japan,
            Jersey, New Zealand, Switzerland, Uruguay and UK).
          </li>
          <li>
            Where we use certain service providers, we may use specific
            contracts approved by the European Commission which give personal
            data the same protection it has in Europe.
          </li>
          <li>
            Where we use providers based in the US, we may transfer data to them
            if they are part of the Privacy Shield which requires them to
            provide similar protection to personal data shared between Europe
            and the US, or we may use specific contracts approved by the
            European Commission which give personal data the same protection it
            has in Europe, with standard contractual clauses. Please contact us
            if you want further information on the specific mechanism used by us
            when transferring your personal data out of the EEA.
          </li>
        </ul>
        <h2>8. Data security</h2>
        <p>The personal data that we collect from you will be stored:</p>
        <ul>
          <li>in secure data centres located in the EU; and</li>
          <li>
            in the secure data centre of our IT and system administration
            service provider
          </li>
        </ul>
        <p>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorised way, altered or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors and
          other third parties who have a business need to know. They will only
          process your personal data on our instructions and they are subject to
          a duty of confidentiality.
        </p>
        <p>
          We have put in place procedures to deal with any suspected personal
          data breach and will notify you and any applicable regulator of a
          breach where we are legally required to do so.
        </p>
        <h2>9. Data retention</h2>
        <p>How long will you use my personal data for?</p>
        <p>
          We will keep your Personal Information while you have an account with
          us. Thereafter, we will keep your Personal Information for as long as
          is necessary to respond to any questions, complaints or claims made by
          you or on your behalf, to show that we treated you fairly, and to keep
          records required by law.
        </p>
        <p>
          We will not retain your Personal Information for longer than necessary
          for the purposes set out in this policy. When it is no longer
          necessary to retain your Personal Information we will securely destroy
          it in accordance with applicable laws and regulations. In some
          circumstances we will anonymise your personal data (so that it can no
          longer be associated with you) for research or statistical purposes,
          in which case we may use this information indefinitely without further
          notice to you.
        </p>
        <p>
          Please see <b>Table 2</b> at the foot of this notice to view details
          of retention periods for different aspects of your personal data.
        </p>
        <p>
          In some circumstances you can ask us to delete your data: see {"'Request Erasure'"} in Section 10 Your legal rights for further information.
        </p>
        <p>
          In some circumstances, we may anonymise your personal data (so that it
          can no longer be associated with you) for research or statistical
          purposes in which case we may use this information indefinitely
          without further notice to you.
        </p>
        <h2>10. Your legal rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data:
        </p>
        <p>
          Request access to your personal data - (commonly known as a “data
          subject access request”). This enables you to receive a copy of the
          personal data we hold about you and to check that we are lawfully
          processing it.
        </p>
        <p>
          Request correction of your personal data - This enables you to have
          any incomplete or inaccurate data we hold about you corrected, though
          we may need to verify the accuracy of the new data you provide to us.
        </p>

        <ul>
          <li>
            Request erasure of your personal data - (commonly known as the
            “right to be forgotten”). This enables you to ask us to delete or
            remove personal data where there is no good reason for us continuing
            to process it. You also have the right to ask us to delete or remove
            your personal data where you have successfully exercised your right
            to object to processing (see below), where we may have processed
            your information unlawfully or where we are required to erase your
            personal data to comply with local law. Note, however, that we may
            not always be able to comply with your request of erasure for
            specific legal reasons which will be notified to you, if applicable,
            at the time of your request.
          </li>
          <li>
            Object to processing of your personal data - where we are relying on
            a legitimate interest (or those of a third party) and there is
            something about your particular situation which makes you want to
            object to processing on this ground as you feel it impacts on your
            fundamental rights and freedoms. You also have the right to object
            where we are processing your personal data for direct marketing
            purposes. In some cases, we may demonstrate that we have compelling
            legitimate grounds to process your information which override your
            rights and freedoms.
          </li>
          <li>
            Request restriction of processing your personal data - This enables
            you to ask us to suspend the processing of your personal data in the
            following scenarios:
          </li>
          <ul>
            <li>(a) if you want us to establish the {"data's"} accuracy;</li>
            <li>
              (b) where our use of the data is unlawful but you do not want us
              to erase it;
            </li>
            <li>
              (c) where you need us to hold the data even if we no longer
              require it as you need it to establish, exercise or defend legal
              claims; or
            </li>
            <li>
              (d) you have objected to our use of your data but we need to
              verify whether we have overriding legitimate grounds to use it.
            </li>
          </ul>
          <li>
            Request transfer of your personal data - (also known as the “right
            to data portability”) We will provide to you, or a third party you
            have chosen, your personal data in a structured, commonly used,
            machine-readable format. Note that this right only applies to
            automated information which you initially provided consent for us to
            use or where we used the information to perform a contract with you.
          </li>
          <li>
            Right to withdraw consent - However, this will not affect the
            lawfulness of any processing carried out before you withdraw your
            consent. If you withdraw your consent, we may not be able to provide
            certain products or services to you. We will advise you if this is
            the case at the time you withdraw your consent.
          </li>
        </ul>
        <p>
          If you wish to exercise any of the rights set out above, please
          contact our Data Protection Compliance Manager, in writing with full
          details of your request by emailing directly on:
        </p>
        <p>Data Protection Compliance contact.at.theapplygroup.com</p>
        <p>No fee usually required.</p>
        <p>
          You will not have to pay a fee to access your personal data (or to
          exercise any of the other rights). However, we may charge a reasonable
          fee if your request is clearly unfounded, repetitive or excessive.
          Alternatively, we may refuse to comply with your request in these
          circumstances.
        </p>
        <h2>What we may need from you</h2>
        <p>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</p>
        <h2>Time limit to respond</h2>
        <p>We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</p>
        <h2>Complaints</h2>
        <p>You have the right to make a complaint at any time to the Information {"Commissioner's"} Office (ICO), the UK supervisory authority for data protection issues <span className="text-sec">(www.ico.org.uk)</span>. We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact Us in the first instance.</p>
      </div>
      <Footer></Footer>
    </section>
  );
}

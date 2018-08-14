import React from 'react';
import { classes } from '../styles';
import { css } from 'emotion';

const containerStyle = css`
  max-width: 1200px;
  padding: 16px;
  margin: auto;
  h1 {
    ${classes.typography.h1};
  }
  h2 {
    ${classes.typography.h2};
  }
  h3 {
    ${classes.typography.h3};
  }
  h4 {
    ${classes.typography.h4};
  }
  p,
  li {
    ${classes.typography.base};
  }
`;

const Legal = () => {
  return (
    <div className={containerStyle}>
      <div style={{ gridArea: 'content' }}>
        <h1>Privacy Policy</h1>

        <p>
          <i>Effective: August 14, 2018</i>{' '}
        </p>

        <p>
          This section informs you of our policies regarding the collection,
          use, and disclosure of personal data and the choices you have
          associated with that data.
        </p>

        <h2>Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <h3>Types of Data Collected</h3>

        <h4>Personal Data</h4>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </p>

        <ul>
          <li>Email address</li>
          <li>Planned trips</li>
          <li>Trip prefernces</li>
        </ul>

        <h4>Usage Data</h4>

        <p>
          We may also collect information how the Service is accessed and used
          ("Usage Data"). This Usage Data may include information such as your
          computer's Internet Protocol address (e.g. IP address), browser type,
          browser version, the pages of our Service that you visit, the time and
          date of your visit, the time spent on those pages, unique device
          identifiers and other diagnostic data.
        </p>

        <h4>Tracking & Tokens</h4>
        <p>
          We use tokens and similar tracking technologies to track the activity
          on our Service and we hold certain information.
        </p>
        <p>
          Tokens are objects with a small amount of data which may include an
          anonymous unique identifier. Tokens are sent to your browser from a
          website and stored on your device. Other tracking technologies are
          also used such as beacons, tags and scripts to collect and track
          information and to improve and analyse our Service.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Service.
        </p>

        <h2>Use of Data</h2>

        <ul>
          <li>
            <p>
              <strong>Email/Login Data</strong>
            </p>
            <p>
              We use this information to identify you as owner of an account, to
              restrict access and to inform you about important events. The data
              is retained until you delete your account.
            </p>
          </li>
          <li>
            <p>
              <strong>Planned trips / Trip Preferences</strong>
            </p>
            <p>
              We use this information to find matching flight deals. The data
              will be anonymized when you delete your account but will be kept
              in our database unless you explicitly require the deletion.
            </p>
          </li>
        </ul>

        <h2>Transfer Of Data</h2>
        <p>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country or other governmental jurisdiction where the data protection
          laws may differ than those from your jurisdiction.
        </p>
        <p>
          If you are located outside Germany and choose to provide information
          to us, please note that we transfer the data, including Personal Data,
          to Germany and process it there.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of
          such information represents your agreement to that transfer.
        </p>
        <p>
          flystr will take all steps reasonably necessary to ensure that your
          data is treated securely and in accordance with this Privacy Policy
          and no transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of your data and other personal information.
        </p>

        <h2>Disclosure Of Data</h2>

        <h3>Legal Requirements</h3>
        <p>
          flystr may disclose your Personal Data in the good faith belief that
          such action is necessary to:
        </p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of flystr</li>
          <li>
            To prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            To protect the personal safety of users of the Service or the public
          </li>
          <li>To protect against legal liability</li>
        </ul>

        <h2>Security of Data</h2>
        <p>
          The security of your data is important to us but remember that no
          method of transmission over the Internet or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </p>

        <h2>Service Providers</h2>
        <p>
          We may employ third party companies and individuals to facilitate our
          Service ("Service Providers"), to provide the Service on our behalf,
          to perform Service-related services or to assist us in analyzing how
          our Service is used.
        </p>
        <p>
          These third parties have access to your Personal Data only to perform
          these tasks on our behalf and are obligated not to disclose or use it
          for any other purpose.
        </p>

        <h3>Analytics</h3>
        <p>
          We may use third-party Service Providers to monitor and analyze the
          use of our Service.
        </p>
        <ul>
          <li>
            <p>
              <strong>Google Analytics</strong>
            </p>
            <p>
              Google Analytics is a web analytics service. You can visit their
              Privacy Policy page here:{' '}
              <a href="https://www.google.com/policies/privacy/partners/">
                https://www.google.com/policies/privacy/partners/
              </a>
            </p>
          </li>
        </ul>

        <h2>Links to Other Sites</h2>
        <p>
          Our Service may contain links to other sites that are not operated by
          us. If you click a third party link, you will be directed to that
          third party's site. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 18 ("Children").
        </p>
        <p>
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Child has provided us with Personal Data, please
          contact us. If we become aware that we have collected Personal Data
          from children without verification of parental consent, we take steps
          to remove that information from our servers.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          We will let you know via email and/or a prominent notice on our
          Service, prior to the change becoming effective and update the
          "effective date" at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul>
          <li>By email: privacy@flystr.com</li>
        </ul>
        <hr />
        <h1>Terms and Conditions ("Terms")</h1>

        <p>Last updated: August 14, 2018</p>

        <p>
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using the https://flystr.com website
          (the "Service") operated by flystr ("us", "we", or "our").
        </p>

        <p>
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who access or use the Service.
        </p>

        <p>
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you may not
          access the Service. This Terms and Conditions agreement for flystr is{' '}
          <a href="https://termsfeed.com/terms-conditions/generator/">
            generated by TermsFeed
          </a>
          .
        </p>

        <h2>Accounts</h2>

        <p>
          When you create an account with us, you must provide us information
          that is accurate, complete, and current at all times. Failure to do so
          constitutes a breach of the Terms, which may result in immediate
          termination of your account on our Service.
        </p>

        <p>
          You are responsible for safeguarding the password that you use to
          access the Service and for any activities or actions under your
          password, whether your password is with our Service or a third-party
          service.
        </p>

        <p>
          You agree not to disclose your password to any third party. You must
          notify us immediately upon becoming aware of any breach of security or
          unauthorized use of your account.
        </p>

        <h2>Links To Other Web Sites</h2>

        <p>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by flystr.
        </p>

        <p>
          flystr has no control over, and assumes no responsibility for, the
          content, privacy policies, or practices of any third party web sites
          or services. You further acknowledge and agree that flystr shall not
          be responsible or liable, directly or indirectly, for any damage or
          loss caused or alleged to be caused by or in connection with use of or
          reliance on any such content, goods or services available on or
          through any such web sites or services.
        </p>

        <p>
          We strongly advise you to read the terms and conditions and privacy
          policies of any third-party web sites or services that you visit.
        </p>

        <h2>Termination</h2>

        <p>
          We may terminate or suspend access to our Service immediately, without
          prior notice or liability, for any reason whatsoever, including
          without limitation if you breach the Terms.
        </p>

        <p>
          All provisions of the Terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity and limitations
          of liability.
        </p>

        <p>
          We may terminate or suspend your account immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach the Terms.
        </p>

        <p>
          Upon termination, your right to use the Service will immediately
          cease. If you wish to terminate your account, you may simply
          discontinue using the Service.
        </p>

        <p>
          All provisions of the Terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity and limitations
          of liability.
        </p>

        <h2>Governing Law</h2>

        <p>
          These Terms shall be governed and construed in accordance with the
          laws of North Rhine-Westphalia, Germany, without regard to its
          conflict of law provisions.
        </p>

        <p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have between us
          regarding the Service.
        </p>

        <h2>Changes</h2>

        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least 30 days notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion.
        </p>

        <p>
          By continuing to access or use our Service after those revisions
          become effective, you agree to be bound by the revised terms. If you
          do not agree to the new terms, please stop using the Service.
        </p>

        <h2>Contact Us</h2>

        <p>If you have any questions about these Terms, please contact us.</p>
      </div>
    </div>
  );
};

export default Legal;

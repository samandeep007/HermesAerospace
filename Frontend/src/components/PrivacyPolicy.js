import React from "react";
import Navbar from './StoreNavbar'
import Navbar2 from './storeNavbar2'
import Footer from './StoreFooter'

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              Hermes Corporation is committed to protecting the privacy of its
              customers and ensuring that their personal information is kept
              confidential and secure. This privacy policy sets out how we
              collect, use, and protect the personal information that we
              collect from you when you visit our website or make a purchase
              from our online store.
            </p>
            <h3 className="text-lg font-semibold mb-2">Collection of Personal Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may collect certain personal
              information from you, such as your name, email address, mailing
              address, phone number, and credit card information. We may also
              collect information about your use of our website, such as the
              pages you visit and the links you click on.
            </p>
            <h3 className="text-lg font-semibold mb-2">Use of Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We use your personal information to process your orders, to
              communicate with you about your orders and our products and
              services, and to improve your shopping experience on our website.
              We may also use your personal information for marketing purposes,
              such as to send you promotional offers and newsletters.
            </p>
            <h3 className="text-lg font-semibold mb-2">Protection of Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We take the security of your personal information very seriously
              and take all reasonable measures to protect it from unauthorized
              access, use, or disclosure. We use industry-standard security
              measures, such as encryption and firewalls, to protect your
              personal information.
            </p>
            <h3 className="text-lg font-semibold mb-2">Cookies and Other Tracking Technologies</h3>
            <p className="text-gray-700 mb-4">
              We may use cookies and other tracking technologies to collect
              information about your use of our website. Cookies are small files
              that are placed on your computer or mobile device when you visit a
              website. They allow us to remember your preferences and to track
              your browsing behavior on our website.
            </p>
            <h3 className="text-lg font-semibold mb-2">Third-Party Links</h3>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. These
              websites have their own privacy policies, which you should review
              before using them. We are not responsible for the privacy
              practices or content of these websites.
            </p>
            <h3 className="text-lg font-semibold mb-2">Children's Privacy</h3>
            <p className="text-gray-700 mb-4">
              Our website is not intended for use by children under the age of
              13. We do not knowingly

collect personal information from children under the age of 13. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete the information as soon as possible.

css
Copy code
        </p>
        <h3 className="text-lg font-semibold mb-2">Changes to Privacy Policy</h3>
        <p className="text-gray-700 mb-4">
          We may update this privacy policy from time to time to reflect
          changes in our business practices or to comply with legal
          requirements. We will post any changes to our website, and the
          revised policy will be effective immediately upon posting.
        </p>
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about our privacy policy,
          please contact us at privacy@hermescorp.com.
        </p>
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
);
};

export default PrivacyPolicy;
import { Fragment } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex } from 'react-icons/fa';

const getBrandIcon = (brand) => {
  const brandIcon = {
    visa: <FaCcVisa size={36} />,
    mastercard: <FaCcMastercard size={36} />,
    discover: <FaCcDiscover size={36} />,
    amex: <FaCcAmex size={36} />,
  }[brand];

  return brandIcon || <FaCcVisa size={36} />;
};

const DebitCard = ({ cardNumber,cardHolder, expiryMonth, expiryYear, brand }) => {
  const cardNumberDigits = cardNumber;
  const brandIcon = getBrandIcon(brand);

  return (
    <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white w-full h-48 rounded-lg shadow-md overflow-hidden">
      <div style={{marginRight: "5px", paddingTop: "3px"}} className="flex justify-end">
        {brandIcon}
      </div>
      <div className="flex justify-between pt-4 px-4">
        <div className="text-gray-400 text-sm font-medium">CARD NUMBER</div>
        <div className="text-gray-400 text-sm font-medium">EXPIRY DATE</div>
      </div>
      <div className="flex justify-between px-4">
        <div className="text-gray-700 text-lg font-bold">{`**** **** **** ${cardNumberDigits}`}</div>
        <div className="text-gray-700 text-lg font-bold">{`${expiryMonth}/${expiryYear}`}</div>
      </div>
      <div className="w-full h-16 mt-4 flex items-center px-4 rounded-b-lg" style={{ background: 'linear-gradient(90deg, rgba(244, 245, 247, 1) 0%, rgba(229, 231, 235, 1) 50%, rgba(244, 245, 247, 1) 100%)' }}>
        <div className="text-gray-400 text-sm font-medium">CARDHOLDER NAME</div>
        <div className="text-gray-700 text-lg font-bold ml-2">{cardHolder}</div>
      </div>
    </div>
  );
};

export default DebitCard;

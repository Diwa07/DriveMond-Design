import basic from '../../images/drivemond-pricing-basic-icon.webp'
import combo from '../../images/drivemond-pricing-combo-icon-1.webp'
import agency from '../../images/drivemond-pricing-agency-icon-1.webp'
const Lifetimeprices = [
  {
    image: basic,
    type: "Basic",
    price: '$266',
    discountedPrice: '$159',
    icon: "Basic Icon",
    saving: "40% Savings ",

    features: [
      "1 License",
      " Lifetime Update",
      "Landing Page",
      "DirveMond Admin Panel",
      "DriveMond User App",
    ],
  },
  {  image: combo,
    type: "Combo",
    price: '$399',
    discountedPrice: '$239',
    icon: "Combo Icon",
    saving: "40% Savings ",
    popular: true,

    features: [
      "1 License",
      " Lifetime Update",
      "Landing Page",
      "DirveMond Admin Panel",
      "DriveMond User App",
      "DriveMond Driver App",
    ],

 
  },
  {
    image: agency,
    type: "Agency",
    price: '$1995',
    discountedPrice: '$399',
    icon: "Agency Icon",
    saving: "80% Savings ",
    recommended: true,

    features: [
      "5 License",
      " Lifetime Update",
      "Landing Page",
      "DirveMond Admin Panel",
      "DriveMond User App",
      "DriveMond Driver App",
    ],
  },
];
export default Lifetimeprices;

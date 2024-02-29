 import basic from '../../images/drivemond-pricing-basic-icon.webp'
 import combo from '../../images/drivemond-pricing-combo-icon-1.webp'
 import agency from '../../images/drivemond-pricing-agency-icon-1.webp'
const Annualprices = [
  {
    image: basic,
    type: "Basic",
    price: "$133",
    discountedPrice: "$79",
    icon: "Drivemond Pricing Basic Icon",
    saving: "40% Savings",

    features: [
      "1 License",
      "1 Year Update",
      "Landing Page",
      "DirveMond Admin Panel",
      "DriveMond User App",
    ],
  },
  {
    image:combo,
    type: "Combo",
    price: "$186",
    discountedPrice: "$111",
    icon: "Drivemond Pricing Combo Icon",
    saving: "40% Savings",
    recommended: true,

    features: [
      "5 License",
      "1 Year Update",
      "Landing Page",
      "DirveMond Admin Panel",
      "DriveMond User App",
      "DriveMond Driver App",
    ],
  },
  {
    image: agency,
    type: "Agency",
    price: "$930",
    discountedPrice: "$239",
    icon: "Drivemond Pricing Agency Icon",
    mostPopular: true,
    saving: "74% Savings",

    features: [
      "5 License",
      "1 Year Update",
      "Landing Page",
      "DirveMond Admin Panel",
      "DriveMond User App",
      "DriveMond Driver App",
    ],
  },
];

export default Annualprices;

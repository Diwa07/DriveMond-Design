import a from '../../images/a.webp';
import b from '../../images/a.webp'; // This seems like a mistake. I assume you meant b here.
import c from '../../images/c.webp';
import d from '../../images/d.webp';
import e from '../../images/e.webp';
import f from '../../images/f.webp';
import g from '../../images/g.webp';
import h from '../../images/h.webp';

const Sections = [
  {
    id: 1,
    title: "Set Up Business",
    content: "Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.",
    image: a,
    subSections: [
      "Pages & media setup",
      "SMS & payment configuration",
      "Language & Translation"
    ]
  },
  {
    id: 2,
    title: "Add New Drivers",
    content: "Add drivers for your system and set up driver levels to enable loyalty points. So drivers can fulfil their daily target and win incentives directly to their wallets from the driver app.",
    image: b,
    subSections: [
      "Driver loyalty programs",
      "Define withdrawal methods",
      "Review withdraw requests"
    ]
  },
  {
    id: 3,
    title: "Enable Bidding System",
    content: "Allow drivers to bid for a user fare and let customers choose from the convenient offer. This feature is controlled by the admin and used by the users such as drivers and customers.",
    image: c,
    subSections: [
      "Customers can set custom fare",
      "Drivers can bid with their offer",
      "Customers can accept one offer"
    ]
  },
  {
    id: 4,
    title: "Add Vehicle with Attributes",
    content: "Set vehicle attributes such as brand, model, and category. After that, add a new vehicle and connect drivers to that vehicle. The vehicle will not be added if you don’t add any driver.",
    image: d,
    subSections: [
      "Enable/disable a vehicle",
      "Add driver to a new vehicle",
      "View category-wise list"
    ]
  },
  {
    id: 5,
    title: "Set Ride Fare",
    content: "Define fares for different rides according to different zones. For example, choose types of rides such as bike & car for zone 1 and only bike for zone 2. You can add different fares for each zone-wise vehicle.",
    image: e,
    subSections: [
      "Vehicle-wise fare",
      "Zone-wise fare",
      "Fare per km"
    ]
  },
  {
    id: 6,
    title: "Manage Parcel Module",
    content: "Set parcel categories & weights from the parcel management section. Then, set parcel delivery fares according to different business zones. You can also set parcel categories for each zone.",
    image: f,
    subSections: [
      "Category-wise fare",
      "Zone-wise fare",
      "Unlimited categories"
    ]
  },
  {
    id: 7,
    title: "Create Promotions",
    content: "Boost your booking frequencies by creating promotions such as banners, discount coupons, and loyalty programs. You can also enable/disable any promotions as necessary.",
    image: g,
    subSections: [
      "Coupon overview & analytics",
      "Banner redirect link & image",
      "Gamification reward system"
    ]
  },
  {
    id: 8,
    title: "Monitor Trip Log",
    content: "View real-time trip activities from all users and detailed fares from the trip management section. This feature allows you to keep track of all rides and fares, including real-time ride updates.",
    image: h,
    subSections: [
      "Status-wise trip history",
      "View trip activity summary",
      "Download trip logs"
    ]
  },
];

export default Sections;

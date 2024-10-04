// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #2C2C2C 0%, #3B3B3B 100%)", // Darker background
      boxShadow: "0px 10px 20px 0px rgba(255, 255, 255, 0.1)", // Lighter shadow
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #3B3B3B 0%, #FF4C4C 100%)", // Darker background
      boxShadow: "0px 10px 20px 0px rgba(255, 255, 255, 0.1)", // Lighter shadow
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #3B3B3B 0%, #FFC107 100%)", // Darker background
      boxShadow: "0px 10px 20px 0px rgba(255, 255, 255, 0.1)", // Lighter shadow
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Image imports
import img1 from './img1.png';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

// Styles for dark theme (in your CSS)
const darkThemeStyles = {
  backgroundColor: '#121212', // Dark background for containers
  color: '#ffffff', // Light text color
};

// Example usage in your components:
// <div style={{ ...darkThemeStyles }}>...</div>

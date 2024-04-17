import { FaShippingFast } from "react-icons/fa";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { CgSupport } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";

console.log(FaRegMoneyBill1);

export const OffersData = [
  {
    Icon: FaShippingFast,
    title: "Free Shipping",
    heading: "Free Shipping for orders",
  },
  {
    Icon: FaRegMoneyBill1,
    title: "Money Guarantee",
    heading: "Within 30 days",
  },
  {
    Icon: CgSupport,
    title: "Online Support",
    heading: "24 hours a day, 7 days a week",
  },
  {
    Icon: MdOutlinePayment,
    title: "Flexible Payment",
    heading: "Pay with Multiple Credit Cards",
  },
];

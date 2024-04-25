import health from "../assets/images/health-app.jpg";
import tracker from "../assets/images/activity-app.jpg";
import ecommerce from "../assets/images/e-commerce-app.jpg";
import crypto from "../assets/images/crypto-exchange-app.jpg";

const portfolioItems = [
  {
    name: "Health App",
    description: `Designed to address specific health needs. It helps users take
	  prescription medications on time, ensures medications are
	  effective, and contributes to overall well-being1. Such apps
	  can be tailored to individual health goals and preferences,
	  making them a valuable tool for both patients and healthcare
	  providers.`,
    img: health,
  },
  {
    name: "Tracking App",
    description: `Streamlines package monitoring and logistics. It enables users
	  to track shipments, receive real-time alerts, and view
	  progress on maps. Tailored to specific needs, it enhances
	  package management efficiency.`,
    img: tracker,
  },
  {
    name: "E-Commerce App",
    description: `An app that simplifies online shopping experiences. Users can
	  browse products, add items to their cart, securely check out,
	  and track orders, all while boosting customer engagement and
	  sales.`,
    img: ecommerce,
  },
  {
    name: "Crypto Exchange App",
    description: `An app designed for seamless trading experiences. Users can
	  buy, sell, and manage various cryptocurrencies securely.
	  Tailored to specific business requirements, it enhances
	  liquidity, transparency, and user engagement in the crypto
	  market.`,
    img: crypto,
  },
];

export default portfolioItems;

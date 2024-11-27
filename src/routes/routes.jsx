import { lazy } from "react";
import Layout from "../components/Global/Layout";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const AboutPage = lazy(() => import("../pages/about/AboutPage"));
const ContactPage = lazy(() => import("../pages/contact/ContactPage"));
const ProductsPage = lazy(() => import("../pages/products/ProductsPage"));
const CareersPage = lazy(() => import("../pages/careers/CareersPage"));
const IndustriesPage = lazy(() =>
  import("../pages/industriesServed/IndustriesServed")
);
const ThankYouPage = lazy(() => import("../pages/thankyou/ThankYouPage"));

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Layout pages={<HomePage />} />,
  },
  {
    title: "About Page",
    url: "/about-us",
    page: <Layout pages={<AboutPage />} />,
  },
  {
    title: "Services Page",
    url: "/products",
    page: <Layout pages={<ProductsPage />} />,
  },
  {
    title: "Industries Served Page",
    url: "/industries-served",
    page: <Layout pages={<IndustriesPage />} />,
  },
  {
    title: "Services Page",
    url: "/careers",
    page: <Layout pages={<CareersPage />} />,
  },
  {
    title: "Contact Page",
    url: "/contact-us",
    page: <Layout pages={<ContactPage />} />,
  },
  {
    title: "Thank you Page",
    url: "/thank-you",
    page: <Layout pages={<ThankYouPage />} />,
  },
];

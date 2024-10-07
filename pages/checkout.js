import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CheckoutForm from "../components/Shop/CheckoutForm";

export default function Checkout() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Checkout"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Checkout"
        bgImg="/images/page-title-bg2.jpg"
      />

      <CheckoutForm />

      <Footer />
    </>
  );
}

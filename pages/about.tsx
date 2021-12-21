import {AboutUsContainer} from "../components/AboutUsContainer";
import React from "react";
import {AboutUs} from "../data/dataStructure";
import {Layout} from "../components/Layout";

const aboutUs = require('../data/aboutUs.json') as AboutUs;

export default function AboutPage() {
  return (
    <Layout className="about-page">
      <AboutUsContainer aboutUs={ aboutUs } />
    </Layout>
  )
}
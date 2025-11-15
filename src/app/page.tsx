"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HardwareAlternatives } from "@/components/hardware-alternatives";
//import { Testimonials } from "@/components/testimonials";
import { Stack } from "@/components/stack";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

import { Header } from "@/components/header";

import "./page.css";
//import { Arch } from "@/components/arch";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
      </div>
      <Features />
      {
        //<Arch />
      }
      <HardwareAlternatives />
      <Stack />
      <Newsletter />
      <Footer />
    </>
  );
}

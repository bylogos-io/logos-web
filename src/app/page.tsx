"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HardwareAlternatives } from "@/components/hardware-alternatives";
//import { Testimonials } from "@/components/testimonials";
import { Stack } from "@/components/stack";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useRef } from "react";

import "./page.css";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div ref={heroRef}>
        <Header />
        <Hero heroRef={heroRef} />
      </div>
      <Features />
      <HardwareAlternatives />
      <Stack />
      <Newsletter />
      <Footer />
    </>
  );
}

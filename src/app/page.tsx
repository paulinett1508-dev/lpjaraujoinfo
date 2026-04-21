import { Hero } from "@/components/sections/Hero";
import { CreditStrip } from "@/components/sections/CreditStrip";
import { Problem } from "@/components/sections/Problem";
import { Products } from "@/components/sections/Products";
import { Personas } from "@/components/sections/Personas";
import { Gallery } from "@/components/sections/Gallery";
import { Diffs } from "@/components/sections/Diffs";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CreditStrip />
      <Problem />
      <Products />
      <Personas />
      <Gallery />
      <Diffs />
      <FAQ />
      <CTAFinal />
    </>
  );
}

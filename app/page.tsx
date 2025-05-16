// app/page.tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Mockups } from "@/components/Mockups";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Mockups />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

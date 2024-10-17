import Image from "next/image";
import Hero from "./Components/hero";
import Brand from "./Components/brand";
import NewArrivals from "./Components/newArrivals";
import Sale from "./Components/sale";

import MobilleApp from "./Components/app";
import Favourite from "./Components/favourite";
import Comunity from "./Components/comunity";
import Footer from "./Components/footer";
export default function Home() {
  return (
   <div>
    <Hero />
    <Brand />
    <NewArrivals />
    <Sale />
    < Favourite />
    <MobilleApp />
    <Comunity/>
    < Footer />
   </div>
  );
}

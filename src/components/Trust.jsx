import React from "react";
import { SiDell, SiHp, SiNasa, SiSamsung } from "react-icons/si";

function Trust() {
  return (
    <section className="flex flex-col items-center py-12">
      <h2 className="text-center text-lg font-semibold mb-6">
        Trusted by Leading Brands
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 grayscale  transition">
        <img src="/compaq.svg" alt="Compaq" className="h-10" />
        <img src="/ibm.svg" alt="IBM" className="h-8" />
        <img src="/LCRA.svg" alt="LCRA" className="h-5" />
        <SiNasa size={40} />
        <SiSamsung size={40} />
        <SiDell size={40} />
        <img src="/engine.svg" alt="Engie" className="h-7" />
        <img src="/ercot.svg" alt="ERCOT" className="h-8" />
        <SiHp size={40} />
        <img src="/usa.svg" alt="US Department of State" className="h-8" />
        <img src="/version.svg" alt="Verizon" className="h-6" />
      </div>
    </section>
  );
}

export default Trust;

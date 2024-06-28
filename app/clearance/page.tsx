"use client";
import React from "react";
import Container from "../../components/container/page";

function page() {
  return (
    <div>
      <Container>
        <p className="flex gap-[20px] mt-[20px]">
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Bosh sahifa
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Smartfonlar
          </span>  
          <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
            Xaridni rasmiylashtirish
          </span>
        </p>
      </Container>

      <div className="mt-[28px]">
        <Container>
            <div className="flex justify-between">
                <div className="w-[900px] h-[660px] bg-[white] p-[44px] rounded-md">

                </div>
                <div></div>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default page;

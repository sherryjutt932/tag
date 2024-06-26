import React from "react";
import LinkEffect from "../LinkEffect";
import Button from "../Button";
import Link from "next/link";

export default function FooterContent() {
  return (
    <div className="flex flex-col gap-10" id="contactSec">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-5">
        <div className="flex gap-2 items-center">
          <a href="/">
          <img className="h-10 sm:h-16" src="./tag-logo.png" alt="" />
          </a>
          <p className="text-lg sm:text-2xl font-normal">
            Stop Searching<span className="text-sec">.</span> Get Found
            <span className="text-sec">.</span>
          </p>
        </div>
        <div className="flex gap-10 sm:gap-24">
          <div className="text-xl font-medium flex flex-col sm:items-end sm:gap-4">
            <a href="https://www.linkedin.com/company/theapplygroup/" target="_blank">
              <LinkEffect text={"LinkedIn"} big={false} />
            </a>
            <a href="https://www.tiktok.com/@tagtheapplygroup" target="_blank">
              <LinkEffect text={"Tiktok"} big={false} />
            </a>
          </div>

          <div className="text-xl font-medium flex flex-col sm:items-end sm:gap-4">
            <Link href="/Privacy" target="_blank">
              <LinkEffect text={"Privacy"} big={false} />
            </Link>
            <Link href="Cookies" target="_blank">
              <LinkEffect text={"Cookies"} big={false} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="pb-2 text-xl">Reach Us</p>
          <div className="flex gap-4">
            <a href="https://api.whatsapp.com/send/?phone=447361901027&text&type=phone_number&app_absent=0" target="_blank">
              <img className="h-8" src="./whatsapp.png" alt="" />
            </a>
            <a href="/">
              <img className="h-8" src="./uk.png" alt="" />
            </a>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-5 items-start sm:items-center">
        <a href="https://applypool.ai/" target="_blank">
        <Button theme={"light"}>Join for free</Button>
        </a>

        <div className="flex gap-2 items-center ml-auto sm:ml-0">
          <p className="text-base font-normal text-gray-400">
          ©2024 The Apply Group Ltd.
          </p>
          <a href="/">
          <img className="w-10" src="./a.png" alt="" />
          </a>
        </div>

      </div>
    </div>
  );
}

'use client'
import { sidebarLinks } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          // pathname.includes(link.route) is checking if the current URL path (pathname) includes the route of the link (link.route).
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link href={link.route} className={`bottombar_link  ${isActive && "bg-primary-500"}`}>
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className=" text-subtle-medium text-light-1 max-sm:hidden"  >{link.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;

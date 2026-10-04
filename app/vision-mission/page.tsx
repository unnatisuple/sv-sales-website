import React from "react";
import type { Metadata } from "next";
import { VisionMission } from "@/sections/VisionMission";

export const metadata: Metadata = {
  title: "Vision & Mission | S V Sales – Bath & Sanitary Solutions",
  description:
    "Our vision is to be the leading provider of innovative, sustainable, and premium bath fitting and sanitary solutions in Central India.",
};

export default function VisionMissionPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <VisionMission />
    </div>
  );
}

import React from "react";
import { notFound } from "next/navigation";
import PortfolioDetailDesign from "../../page/portfolio-detail-design";
import { DataArray, SiteConfig } from "@/app/data";

function getProjectIndex(id) {
  const index = Number(id);
  return Number.isInteger(index) && index >= 0 && index < DataArray.length
    ? index
    : null;
}

export function generateStaticParams() {
  return DataArray.map((_, index) => ({ id: String(index) }));
}

export function generateMetadata({ params }) {
  const index = getProjectIndex(params.id);
  if (index === null) return {};
  return {
    title: `${DataArray[index].name} | ${SiteConfig.name}`,
    description: DataArray[index].des,
  };
}

export default function Portfolio({ params }) {
  const index = getProjectIndex(params.id);
  if (index === null) notFound();

  return (
    <PortfolioDetailDesign
      data={DataArray[index]}
      id={index}
      DataArray={DataArray}
    />
  );
}

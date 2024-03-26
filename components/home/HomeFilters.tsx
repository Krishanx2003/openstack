"use client"
import { HomePageFilters } from "@/constants/filters";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const HomeFilters = () => {
  // Assuming you have some state for the filters
  const [selectedFilter, setSelectedFilter] = useState("");

  // Assuming you have some items for the filters
  const filters = HomePageFilters;

  // Assuming you have a router for navigation
  const router = useRouter();

  // Assuming you're using search params
  const searchParams = useSearchParams();

  const handleFilterClick = (item) => {
    setSelectedFilter(item.value);
    // Perform any action you need, such as navigating or updating search params
    // Example:
    // router.push(`/?filter=${item.value}`);
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {filters.map((item) => (
        <Button
          key={item.value}
          onClick={() => handleFilterClick(item)}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            selectedFilter === item.value ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;

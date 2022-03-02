import React, { useEffect, useState } from "react";
import { FiltersList } from "./FiltersList";

export const FiltersPanel = () => {
  const [filters, setFilters] = useState([]);

  async function getFilters() {
    try {
      const data = await fetch(`${process.env.REACT_APP_BASE_URL}/filters`);
      const result = await data.json();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  useEffect(() => {
    getFilters().then((f) => setFilters(f));
  }, []);

  console.log(filters);
  return (
    <div>
      <h5>Location</h5>
      <FiltersList filters={filters.location} />
    </div>
  );
};

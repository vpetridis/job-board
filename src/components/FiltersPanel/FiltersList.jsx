import React from "react";

export const FiltersList = ({ filters = [] }) => {
  console.log(filters)

  return filters.length > 0 ? (
    filters.map((filter) => (
      <div class=" d-flex justify-content-start align-items-center mx-2">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          name="London"
          aria-label="Checkbox for following text input"
        />{" "}
        <span>{filter.title}</span>
      </div>
    ))
  ) : (
    <div>Loading</div>
  );
};

import { User } from "../types";
import Select from "react-select";
import ValueType from "react-select";

import React from "react";
type PermissionOption = {
  value: string;
  label: string;
};

const options: PermissionOption[] = [
  { value: "CREATE", label: "CREATE" },
  { value: "UPDATE", label: "UPDATE" },
  { value: "DELETE", label: "DELETE" },
  { value: "READ", label: "READ" },
];

function UpdateRole() {
  const [selectedOption, setSelectedOption] = React.useState<
    PermissionOption[]
  >([]);

  const handlePermissionChange = (
    selectedOption: ValueType<PermissionOption, true>
  ) => {
    if (selectedOption) {
      setSelectedOption(selectedOption as PermissionOption[]);
    } else {
      setSelectedOption([]);
    }
  };

  return (
    <div className="flex flex-col h-screen ">
      {" "}
      <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        Update Role{" "}
      </h2>
      <form className="mt-10" method="POST">
        <label
          htmlFor="name"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Name{" "}
        </label>
        <input
          id="name"
          type="text"
          name="text"
          placeholder="name"
          autoComplete="current-password"
          className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
        <label
          htmlFor="name"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Description{" "}
        </label>
        <textarea
          id="name"
          name="role"
          placeholder="description"
          autoComplete="current-field"
          className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
        <label
          htmlFor="name"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Assign Permision{" "}
        </label>

        <Select
          id="permissions"
          name="permissions"
          options={options}
          isMulti
          onChange={handlePermissionChange}
          value={selectedOption}
        />
        <button
          type="submit"
          className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default UpdateRole;

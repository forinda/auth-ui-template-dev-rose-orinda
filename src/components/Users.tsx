import React from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { sampleData } from "../data/data";
import { User } from "../types";
import SingleUser from "./SingleUser";

function Users() {
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  if (selectedUser) {
    return <SingleUser user={selectedUser} />;
  }
  return (
    <div className="container mx-auto p-6">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-gray-400  text-sm">
            <thead className="">
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3 ">Email</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">PhoneNumber</th>

                <th className="px-4 py-3 text-left">Username</th>

                <th className="px-4 py-3 text-left">Field</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {sampleData.map((data, index) => (
                <tr
                  className="bg-gray-4s00"
                  key={index}
                  onClick={() => handleUserClick(data)}
                >
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="ml-3">
                        <div className="text-gray-500">{data.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border">{data.name}</td>
                  <td className="px-4 py-3 border">{data.phonenumber}</td>
                  <td className="px-4 py-3 border">{data.username}</td>
                  <td className="px-4 py-3 border">{data.field}</td>
                  <td className="px-4 py-3 border font-bold">{data.role}</td>
                  <td className="px-4 py-3 border flex items-center">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-100  mx-2"
                    >
                      <div className="material-icons-outlined text-base">
                        <MdOutlineEdit />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-100  ml-2"
                    >
                      <div className="material-icons-round text-base">
                        <MdOutlineDeleteOutline />
                      </div>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;

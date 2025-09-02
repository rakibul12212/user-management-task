"use client";
import React, { useState } from "react";
import Table from "../../Table/Table";

const UserManagement = () => {
  const [searchInput, setSearchInput] = useState(""); 
  const [searchUser, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(searchInput); 
  };

  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-6">
      <p className="text-2xl md:text-3xl font-semibold">User Management</p>

      <div className="pt-8">
        <div className="flex">
          <input
            type="search"
            placeholder="Search by name or email"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      <div className="pt-4">
        <Table search={searchUser} />
      </div>
    </div>
  );
};

export default UserManagement;

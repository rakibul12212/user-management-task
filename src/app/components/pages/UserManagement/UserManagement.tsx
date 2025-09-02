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
            className="w-full px-4 py-2 rounded-xl bg-white/10  border border-gray-100  backdrop-blur-md shadow-lg shadow-black/10  text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300 hover:bg-white/20"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-8 py-2 rounded-xl bg-blue-500/70 border border-white/30 backdrop-blur-md shadow-lg shadow-black/20  text-white font-medium hover:bg-blue-500/90 hover:shadow-xl  active:shadow-inner transition-all duration-300"
          >
            Search
          </button>
        </div>
      </div>

      <div className="pt-8">
        <Table search={searchUser} />
      </div>
    </div>
  );
};

export default UserManagement;

"use client";
import React, { useState } from "react";
import Table from "../../Table/Table";
import { motion } from "framer-motion";

const UserManagement = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchUser, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-6">
      <p className="text-2xl md:text-3xl font-semibold">User Management</p>

      <div className="pt-8 ">
        <div className="flex flex-col md:flex-row gap-4">
          <motion.div
            className="relative w-full"
            whileHover={{ scale: 1.01, rotateX: -5 }}
            whileTap={{ scale: 0.98, rotateX: 0, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-white/10 blur-xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />
            <input
              type="search"
              placeholder="Search by name or email"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="relative w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-100 backdrop-blur-md shadow-lg shadow-black/10 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300 hover:bg-white/20"
            />
          </motion.div>

          <motion.button
            className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600  text-white font-bold rounded-2xl shadow-lg overflow-hidden border-2 border-white/20"
            onClick={handleSearch}
            whileHover={{
              scale: 1,
              rotateX: -2,
              rotateY: 5,
            }}
            whileTap={{
              scale: 0.95,
              rotateX: 0,
              rotateY: 0,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <motion.span
              className="absolute inset-0 bg-white/10 blur-xl shadow-md rounded-2xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            />
            <span className="relative flex items-center gap-2 z-10">
              Search
            </span>
          </motion.button>
        </div>
      </div>

      <div className="pt-8">
        <Table search={searchUser} />
      </div>
    </div>
  );
};

export default UserManagement;

"use client";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../lib/api";
import { useRouter } from "next/navigation";
import { User } from "../type/Type";
import { motion } from "framer-motion";
import Loading from "@/app/loading";

interface TableProps {
  search: string;
}

const Table: React.FC<TableProps> = ({ search }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const router = useRouter();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const rowVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div style={{ overflowX: "auto" }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 backdrop-blur-md shadow-sm shadow-black/10 rounded-lg text-gray-400 text-sm">
                <th className="text-left p-3">NAME</th>
                <th className="text-left p-3">EMAIL</th>
                <th className="text-left p-3">PHONE</th>
                <th className="text-left p-3">COMPANY</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <motion.tr
                    key={user.username}
                    className="hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                    onClick={() => router.push(`/user/${user.username}`)}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.td className="p-3" variants={cellVariants}>
                      <div>
                        <div>{user.name}</div>
                        <div className="text-gray-500">@{user.username}</div>
                      </div>
                    </motion.td>
                    <motion.td className="p-3" variants={cellVariants}>
                      {user.email}
                    </motion.td>
                    <motion.td className="p-3" variants={cellVariants}>
                      {user.phone}
                    </motion.td>
                    <motion.td className="p-3" variants={cellVariants}>
                      {user.company.name}
                    </motion.td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-3 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {filteredUsers.length > 0 && (
            <div className="flex items-center mt-4 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border border-gray-300 shadow-md bg-white/10 backdrop-blur-md black hover:bg-white/20 transition-all duration-300 disabled:opacity-40"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded border border-gray-300 shadow-md bg-white/10 backdrop-blur-md black hover:bg-white/20 transition-all duration-300 ${
                      page === currentPage ? "bg-white/20 font-bold" : ""
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border border-gray-300 shadow-md bg-white/10 backdrop-blur-md black hover:bg-white/20 transition-all duration-300 disabled:opacity-40"
              >
                Next
              </button>

              <p className="ps-5 hidden md:block">
                showing{" "}
                {filteredUsers.length === 0
                  ? 0
                  : `${indexOfFirstUser + 1}-${
                      indexOfFirstUser + currentUsers.length
                    }`}{" "}
                of {filteredUsers.length} users
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Table;

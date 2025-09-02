"use client";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../lib/api";
import { useRouter } from "next/navigation";
import { User } from "../type/Type";

interface TableProps {
  search: string; 
}

const Table: React.FC<TableProps> = ({ search }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ overflowX: "auto" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#fafbfc" }}>
              <th style={{ textAlign: "left", padding: "12px" }}>NAME</th>
              <th style={{ textAlign: "left", padding: "12px" }}>EMAIL</th>
              <th style={{ textAlign: "left", padding: "12px" }}>PHONE</th>
              <th style={{ textAlign: "left", padding: "12px" }}>COMPANY</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.username}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => router.push(`/user/${user.username}`)}
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <td style={{ padding: "12px" }}>
                    <div>
                      <div>{user.name}</div>
                      <div style={{ color: "#888" }}>@{user.username}</div>
                    </div>
                  </td>
                  <td style={{ padding: "12px" }}>{user.email}</td>
                  <td style={{ padding: "12px" }}>{user.phone}</td>
                  <td style={{ padding: "12px" }}>{ user.company.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  style={{ padding: "12px", textAlign: "center" }}
                >
                  No  users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;

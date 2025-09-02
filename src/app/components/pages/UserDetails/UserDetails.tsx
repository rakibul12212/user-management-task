"use client";
import { User } from "@/app/components/type/Type";
import Link from "next/link";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

type Props = { user?: User };

export default function UserDetails({ user }: Props) {
  if (!user) return <div className="text-center mt-10">User not found.</div>;

  return (
    <div className="p-4 md:p-8 space-y-6 bg-white rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          <HiOutlineArrowLongLeft className="w-5 h-5" />
          Back to Users
        </Link>
        <h1 className="text-2xl md:text-3xl font-semibold">User Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-3">
            <div>
              <p className="text-md text-gray-600">Name</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.name}
              </span>
            </div>
            <div>
              <p className="text-md text-gray-600">Username</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.username}
              </span>
            </div>
            <div>
              <p className="text-md text-gray-600">Email</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.email}
              </span>
            </div>
            <div>
              <p className="text-md text-gray-600">Phone</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.phone}
              </span>
            </div>
            <div>
              <p className="text-md text-gray-600">Website</p>
              <Link
                href={`https://${user.website}`}
                className="font-medium text-blue-600 hover:underline break-words"
                target="_blank"
              >
                {user.website}
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <div className="space-y-3">
            <div>
              <p className="text-md text-gray-600">Street</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.address.street}
              </span>
            </div>
            <div>
              <p className="text-md text-gray-600">Suite</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.address.suite}
              </span>
            </div>
            <div>
              <p className="text-md text-gray-600">City</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.address.city}
              </span>
            </div>
            <div>
              <p className="text-md text-gray-600">Zipcode</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.address.zipcode}
              </span>
            </div>
            <div>
              <p className="text-md text-gray-600">Geo Location</p>
              <span className="text-lg text-gray-600 font-semibold">
                {user.address.geo.lat}, {user.address.geo.lng}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Company</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <p className="text-md text-gray-600">Company Name</p>
            <span className="text-lg text-gray-600 font-semibold">
              {user.company.name}
            </span>
          </div>
          <div>
            <p className="text-md text-gray-600">Catch Phrase</p>
            <span className="text-lg text-gray-600 font-semibold">
              {user.company.catchPhrase}
            </span>
          </div>
          <div>
            <p className="text-md text-gray-600">Business</p>
            <span className="text-lg text-gray-600 font-semibold">
              {user.company.bs}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

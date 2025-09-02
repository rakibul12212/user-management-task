"use client";
import { User } from "@/app/components/type/Type";
import Link from "next/link";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { motion } from "framer-motion";

type Props = { user?: User };

export default function UserDetails({ user }: Props) {
  if (!user) return <div className="text-center mt-10">User not found.</div>;

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.9 },
    }),
  };

  return (
    <div className="p-4 md:p-8 space-y-6 bg-white rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
          whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ perspective: 1000 }}
          className="inline-block"
        >
          
          <motion.div
            className="absolute inset-0 rounded-lg bg-white/10 blur-xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          />

          <Link
            href="/"
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-400 backdrop-blur-md shadow-lg shadow-black/20 text-white hover:bg-gray-500 transition-all duration-300 z-10"
          >
            <HiOutlineArrowLongLeft className="w-5 h-5" />
            Back to Users
          </Link>
        </motion.div>
        <h1 className="text-2xl md:text-3xl font-semibold">User Details</h1>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-gray-50 backdrop-blur-md border border-white/30 rounded-xl p-5 shadow-md shadow-black/20"
          custom={0}
          variants={slideInLeft}
        >
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
        </motion.div>

        <motion.div
          className="bg-gray-50 backdrop-blur-md border border-white/30 rounded-xl p-5 shadow-md shadow-black/20"
          custom={1}
          variants={slideInLeft}
        >
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
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-gray-50 backdrop-blur-md border border-white/30 rounded-xl p-5 shadow-md shadow-black/20"
        custom={2}
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
    </div>
  );
}

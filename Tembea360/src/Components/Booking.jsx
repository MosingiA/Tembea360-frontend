import React from "react";
import { useForm } from "react-hook-form";

const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Booking Data:", data);
    alert("Booking submitted successfully!");
    reset();
    // Later: send this data to your backend (API + Cloudinary image)
  };

  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Book Your Next Adventure
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Destination */}
        <div>
          <label className="block text-gray-700 mb-2">Destination</label>
          <input
            {...register("destination", {
              required: "Destination is required",
            })}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your destination"
          />
          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">
              {errors.destination.message}
            </p>
          )}
        </div>

        {/* Travel Date & Travelers */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Travel Date</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.date.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Number of Travelers
            </label>
            <input
              type="number"
              {...register("travelers", {
                required: "Enter number of travelers",
              })}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="e.g. 2"
            />
            {errors.travelers && (
              <p className="text-red-500 text-sm mt-1">
                {errors.travelers.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition w-full"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
};

export default Booking;

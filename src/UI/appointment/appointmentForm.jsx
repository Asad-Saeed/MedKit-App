import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "../appointment/invoice";
import { appointmentSchema } from "../../utils/schema";
const AppointmentForm = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });

  const onSubmit = (data) => {
    // alert("Form submitted successfully!");
    window.confirm("Are you sure you want to submit the form?");
    console.log("Form Data:", data);
  };

  const formData = watch();

  return (
    <div className="max-w-5xl mx-auto my-5 md:my-10 p-6 bg-white shadow-md rounded-lg text-black">
      <h1 className="text-3xl font-normal mb-4">
        Book a Medical Examination Appointment
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Location Section */}
        <div>
          <h2 className="font-normal text-2xl my-10">Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">Country</label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full border rounded p-2">
                    <option value="">Select your country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="UAE">UAE</option>
                  </select>
                )}
              />
              <p className="text-red-500 text-sm">{errors.country?.message}</p>
            </div>
            <div>
              <label className="block mb-1">City</label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border rounded p-2"
                    placeholder="Enter your city"
                  />
                )}
              />
              <p className="text-red-500 text-sm">{errors.city?.message}</p>
            </div>
            <div>
              <label className="block mb-1">Country Traveling To</label>
              <Controller
                name="gccCountry"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full border rounded p-2">
                    <option value="">Select GCC Country</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                  </select>
                )}
              />
              <p className="text-red-500 text-sm">
                {errors.gccCountry?.message}
              </p>
            </div>
          </div>
        </div>

        {/* Candidate's Information */}
        <div>
          <h2 className="font-normal text-2xl my-10">
            Candidate's Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">First Name</label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border rounded p-2"
                    placeholder="Enter your first name"
                  />
                )}
              />
              <p className="text-red-500 text-sm">
                {errors.firstName?.message}
              </p>
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border rounded p-2"
                    placeholder="Enter your last name"
                  />
                )}
              />
              <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
            </div>
            <div>
              <label className="block mb-1">Date of Birth</label>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    {...field}
                    className="w-full border rounded p-2"
                  />
                )}
              />
              <p className="text-red-500 text-sm">
                {errors.dateOfBirth?.message}
              </p>
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="email"
                    {...field}
                    className="w-full border rounded p-2"
                    placeholder="Enter your email"
                  />
                )}
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border rounded p-2"
                    placeholder="Enter your phone number"
                  />
                )}
              />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>
            <div>
              <label className="block mb-1">Nationality</label>
              <Controller
                name="nationality"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border rounded p-2"
                    placeholder="Enter your nationality"
                  />
                )}
              />
              <p className="text-red-500 text-sm">
                {errors.nationality?.message}
              </p>
            </div>
            <div>
              <label className="block mb-1">Gender</label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full border rounded p-2">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                )}
              />
              <p className="text-red-500 text-sm">{errors.gender?.message}</p>
            </div>
            <div>
              <label className="block mb-1">Marital Status</label>
              <Controller
                name="maritalStatus"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full border rounded p-2">
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                )}
              />
              <p className="text-red-500 text-sm">
                {errors.maritalStatus?.message}
              </p>
            </div>
            <div>
              <label className="block mb-1">Passport Number</label>
              <Controller
                name="passportNumber"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border rounded p-2"
                    placeholder="Enter your passport number"
                  />
                )}
              />
              <p className="text-red-500 text-sm">
                {errors.passportNumber?.message}
              </p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between pt-4 md:pt-6 gap-4">
          <button
            type="submit"
            className="bg-black text-white md:px-4 md:py-2 p-2 rounded-md hover:bg-purple-600"
          >
            Save and Continue
          </button>
          <PDFDownloadLink
            document={<InvoicePDF data={formData} />}
            fileName="appointment_invoice.pdf"
            className="md:px-4 md:py-2 p-2 bg-green-500 text-white rounded-md hover:bg-purple-600"
          >
            {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
          </PDFDownloadLink>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;

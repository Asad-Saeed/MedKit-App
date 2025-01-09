import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "../appointment/invoice";

const schema = yup.object().shape({
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  gccCountry: yup.string().required("GCC Country is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  dateOfBirth: yup.date().required("Date of Birth is required"),
  nationality: yup.string().required("Nationality is required"),
  gender: yup.string().required("Gender is required"),
  maritalStatus: yup.string().required("Marital Status is required"),
  passportNumber: yup.string().required("Passport Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});

const AppointmentForm = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const formData = watch(); // Watches form data to pass to the PDF

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">
        Book a Medical Examination Appointment
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Location Section */}
        <div>
          <h2 className="font-semibold">Location</h2>
          <div className="grid grid-cols-3 gap-4">
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
          <h2 className="font-semibold">Candidate's Information</h2>
          <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save and Continue
          </button>
          <PDFDownloadLink
            document={<InvoicePDF data={formData} />}
            fileName="appointment_invoice.pdf"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            {({ loading }) =>
              loading ? "Generating PDF..." : "Download Invoice"
            }
          </PDFDownloadLink>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;

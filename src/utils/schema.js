import * as yup from "yup";

export const appointmentSchema = yup.object().shape({
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

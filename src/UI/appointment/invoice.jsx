import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../assets/image/asad.jpg";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 5,
    alignSelf: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  companyDetails: {
    fontSize: 10,
    color: "gray",
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottom: "1px solid black",
    paddingBottom: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 10,
    color: "gray",
  },
});

const InvoicePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.companyName}>Company Name</Text>
        <Text style={styles.companyDetails}>
          123 Main Street, City, Country | +1 123 456 7890 | contact@company.com
        </Text>
      </View>

      {/* Invoice Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Invoice Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Invoice Number:</Text>
          {/* <Text>#{data.invoiceNumber}</Text> */}
          <Text>#{Math.floor(Math.random() * 1000)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>
          <Text>{new Date(Date.now()).toISOString().split("T")[0]}</Text>
        </View>
      </View>

      {/* Customer Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Customer Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text>{`${data.firstName} ${data.lastName}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text>{data.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text>{data.phone}</Text>
        </View>
      </View>

      {/* Appointment Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Appointment Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Country:</Text>
          <Text>{data.country}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>City:</Text>
          <Text>{data.city}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Country Traveling To:</Text>
          <Text>{data.gccCountry}</Text>
        </View>
      </View>

      {/* Passport Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Passport Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Passport Number:</Text>
          <Text>{data.passportNumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nationality:</Text>
          <Text>{data.nationality}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text>{data.gender}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text>{data.dateOfBirth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Marital Status:</Text>
          <Text>{data.maritalStatus}</Text>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text>
          © 2025 Company Name. All rights reserved. Thank you for booking your
          appointment.
        </Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;

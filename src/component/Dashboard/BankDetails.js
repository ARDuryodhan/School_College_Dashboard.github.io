import React, { useEffect, useState } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Container, Form, Button, Table } from "react-bootstrap";

import { isLoggedIn } from "../../auth";
import { Link, Navigate } from "react-router-dom";
import { MyAxios } from "../../Services/helper";
import axios from "axios";

function BankDetails() {
  const [bankDetailItems, setBankDetailItems] = useState([]);
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
  });

  const [userAuthenticated, setUserAuthenticated] = useState(isLoggedIn());
  const [formError, setFormError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedBankDetails, setSelectedBankDetails] = useState(null);

  useEffect(() => {
    setUserAuthenticated(isLoggedIn());
    loadBankDetails();
  }, []);

  const loadBankDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8080/bank/getAllBank");
      setBankDetailItems(response.data);
    } catch (error) {
      console.error("Error loading bank details list:", error);
    }
  };

  const handleEditClick = (bankDetailsItem) => {
    setShowForm(true);
    setSelectedBankDetails(bankDetailsItem);

    setBankDetails({
      bankName: bankDetailsItem.bankName,
      accountHolderName: bankDetailsItem.accountHolderName,
      accountNumber: bankDetailsItem.accountNumber,
      ifscCode: bankDetailsItem.ifscCode,
      upiId: bankDetailsItem.upiId,
    });
  };

  const handleUpdateBankDetails = async () => {
    console.log("Updating Bank Details:", selectedBankDetails);
    try {
      if (bankDetails) {
        const response = await MyAxios.put(
          `http://localhost:8080/bank/updateBank/${selectedBankDetails.id}`,
          bankDetails,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
          );


        setBankDetailItems((prevItems) =>
          prevItems.map((item) =>
            item.id === selectedBankDetails.id ? response.data : item
          )
        );
        setShowForm(false);
        console.log("Bank details updated successfully:", response.data);
      }
    } catch (error) {
      console.error("Error updating bank details:", error);
      setFormError("Failed to update bank details. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBankDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await MyAxios.post(
        "http://localhost:8080/bank/addBank",
        bankDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Bank details added successfully:", response.data);
      setShowForm(false);
      loadBankDetails();
    } catch (error) {
      console.error("Error adding bank details:", error);
      setFormError("Failed to add bank details. Please try again.");
    }
  };

  if (!userAuthenticated) {
    return <Navigate to="/loginForm" />;
  }

  return (
    <div className="bankDetails_container">
      <DashboardHeader />
      <div className="d-flex">
        <div>
          <DashboardSidebar />
        </div>
        <main className="bankDetailsMain_container">
          <Container>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h5>Bank Details</h5>
              <button
                onClick={() => setShowForm(!showForm)}
                className="addBankBtn"
              >
                {showForm ? <i className="fa-solid fa-xmark"></i> : "Add Bank"}
              </button>
            </div>
            <hr />
            <div className="bankDetailsTable">
              <Table bordered hover onSubmit={handleFormSubmit}>
                <thead>
                  <tr className="reviewTable-heading">
                    <th>Bank Name</th>
                    <th>Account Holder Name </th>
                    <th>Account Number</th>
                    <th>IFSC Code</th>
                    <th>UPI Id</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {bankDetailItems.map((bankDetailsItem, index) => (
                    <tr key={bankDetailsItem.id}>
                      <td className=" text-uppercase">
                        {bankDetailsItem.bankName}
                      </td>
                      <td className=" text-uppercase">
                        {bankDetailsItem.accountHolderName}
                      </td>
                      <td className="text-center">
                        {bankDetailsItem.accountNumber}
                      </td>
                      <td className="text-center">
                        {bankDetailsItem.ifscCode}
                      </td>
                      <td className="text-center">{bankDetailsItem.upiId}</td>
                      <td className="text-center">
                        <Link onClick={() => handleEditClick(bankDetailsItem)}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
          <Container>
            {showForm && (
              <div className="bankDetails-form">
                <Form>
                  <Form.Group controlId="bankName">
                    <Form.Label>Enter Bank Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="bankName"
                      value={bankDetails.bankName}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="accountHolderName">
                    <Form.Label>Enter Account Holder Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="accountHolderName"
                      value={bankDetails.accountHolderName}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="accountNumber">
                    <Form.Label>Enter Bank Account No.*</Form.Label>
                    <Form.Control
                      type="text"
                      name="accountNumber"
                      value={bankDetails.accountNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="ifscCode">
                    <Form.Label>Enter IFSC Code*</Form.Label>
                    <Form.Control
                      type="text"
                      name="ifscCode"
                      value={bankDetails.ifscCode}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="upiId">
                    <Form.Label>Enter UPI ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="upiId"
                      value={bankDetails.upiId}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  {formError && <p className="text-danger">{formError}</p>}

                  <div className="bankDetailBtn">
                    <Button variant="primary" onClick={handleUpdateBankDetails}>
                      Update Bank Details
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </Container>
        </main>
        <br />
      </div>
    </div>
  );
}

export default BankDetails;

import React, { useState } from "react";
import { calculateAge } from './age'; // Import the calculateAge function
const PatientAdmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    DOB: "",
    motherFatherGuardianName: "",
    nationality: "",
    maritalStatus: "",
    motherTongue: "",
    otherLanguages: "",
    education: "",
    occupation: "",
    contactNo: "",
    email: "",
    contactPerson: "",
    address: {
      houseNo: "",
      street: "",
      city: "",
      district: "",
      pinCode: "",
    },
    admissionDate: "",
    admissionTime: "",
    medicoLegalCaseNo: "",
    typeOfAdmission: "",
    patientType: "",
    referredBy: "",
    consultants: ["", ""],
    ward: "",
    unit: "",
    roomNo: "",
    bedNo: "",
    valuables: false,
    attendantSignature: "",
    attendantName: "",
    attendantRelation: "",
    acknowledgment: false,
    generalGuidelines: false,
    patientRights: false,
    billingPolicy: false,
    dischargePolicy: false,
    languagelocality:false,
    otherPatientType: "",
    Admissionthrough: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: updatedValue,
        },
      }));
    } else if (name === "consultants") {
      const consultants = value.split(",").map((item) => item.trim());
      setFormData((prevData) => ({ ...prevData, consultants }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: updatedValue,
      }));

      // Calculate age if DOB is changed
      if (name === "DOB") {
        const age = calculateAge(updatedValue);
        setFormData((prevData) => ({
          ...prevData,
          age, // Set the calculated age
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This will show the form data in the console
    // Add any additional submission logic here (e.g., API calls)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto">Personal Information</legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-birthday-cake"></i>
                </span>
                <input
                  type="date"
                  name="DOB"
                  placeholder="Date Of Birth"
                  className="form-control"
                  value={formData.DOB}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-venus-mars"></i>
                </span>
                <select
                  name="gender"
                  className="form-control"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-calendar-alt"></i>
                </span>
                <input
                  type="number"
                  name="age"
                  className="form-control"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  readOnly
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-user-plus"></i>
                </span>
                <input
                  type="text"
                  name="motherFatherGuardianName"
                  className="form-control"
                  placeholder="Name of Mother/Father or a Guardian "
                  value={formData.motherFatherGuardianName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-flag"></i>
                </span>
                <input
                  type="text"
                  name="nationality"
                  className="form-control"
                  placeholder="Nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-ring"></i>
                </span>
                <select
                  name="maritalStatus"
                  className="form-control"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-comments"></i>
                </span>
                <input
                  type="text"
                  name="otherLanguages"
                  className="form-control"
                  placeholder="Other Languages"
                  value={formData.otherLanguages}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-language"></i>
                </span>
                <input
                  type="text"
                  name="motherTongue"
                  className="form-control"
                  placeholder="Mother Tongue"
                  value={formData.motherTongue}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-graduation-cap"></i>
                </span>
                <input
                  type="text"
                  name="education"
                  className="form-control"
                  placeholder="Education"
                  value={formData.education}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-briefcase"></i>
                </span>
                <input
                  type="text"
                  name="occupation"
                  className="form-control"
                  placeholder="Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-phone"></i>
                </span>
                <input
                  type="text"
                  name="contactNo"
                  className="form-control"
                  placeholder="Contact No"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-address-book"></i>
                </span>
                <input
                  type="text"
                  name="contactPerson"
                  className="form-control"
                  placeholder="Contact Person"
                  value={formData.contactPerson}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Address Section */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto">Address</legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-home"></i>
                </span>
                <input
                  type="text"
                  name="address.houseNo"
                  className="form-control"
                  placeholder="House No"
                  value={formData.address.houseNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-road"></i>
                </span>
                <input
                  type="text"
                  name="address.street"
                  className="form-control"
                  placeholder="Street"
                  value={formData.address.street}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-city"></i>
                </span>
                <input
                  type="text"
                  name="address.city"
                  className="form-control"
                  placeholder="City"
                  value={formData.address.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-map"></i>
                </span>
                <input
                  type="text"
                  name="address.district"
                  className="form-control"
                  placeholder="District"
                  value={formData.address.district}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-code"></i>
                </span>
                <input
                  type="text"
                  name="address.pinCode"
                  className="form-control"
                  placeholder="Pin Code"
                  value={formData.address.pinCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Admission Information Section */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto">Admission Information</legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-calendar"></i>
                </span>
                <input
                  type="date"
                  name="admissionDate"
                  className="form-control"
                  value={formData.admissionDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-clock"></i>
                </span>
                <input
                  type="time"
                  name="admissionTime"
                  className="form-control"
                  value={formData.admissionTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-file-alt"></i>
                </span>
                <input
                  type="text"
                  name="medicoLegalCaseNo"
                  className="form-control"
                  placeholder="Medico Legal Case No"
                  value={formData.medicoLegalCaseNo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-hospital"></i>
                </span>
                <select
                  name="Admissionthrough"
                  className="form-control"
                  value={formData.Admissionthrough}
                  onChange={handleChange}
                  required
                >
                  <option value="">Admission Through</option>
                  <option value="New">New</option>
                  <option value="Old">Old</option>
                  <option value="Follow-up">Follow-up</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-ambulance"></i>
                </span>
                <select
                  name="typeOfAdmission"
                  className="form-control"
                  value={formData.typeOfAdmission}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type of Admission</option>
                  <option value="Emergency">Emergency</option>
                  <option value="OPD">OPD</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-user-injured"></i>
                </span>
                <select
                  name="patientType"
                  className="form-control"
                  value={formData.patientType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Patient Type</option>
                  <option value="Cash">Cash</option>
                  <option value="Arogyasree">Arogyasree</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Credit">Credit</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.patientType === "Other" && (
                <div className="input-group mt-2">
                  <span className="input-group-text">
                    <i className="fa fa-info-circle"></i>
                  </span>
                  <input
                    type="text"
                    name="otherPatientType"
                    className="form-control"
                    placeholder="Please specify"
                    value={formData.otherPatientType}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-user-md"></i>
                </span>
                <select
                  type="text"
                  name="referredBy"
                  className="form-control"
                  placeholder="Referred By"
                  value={formData.referredBy}
                  onChange={handleChange}
                >
                  <option value="">Referred by</option>
                  <option value="Self">Self</option>
                  <option value="Relative">Friends</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-user-nurse"></i>
                </span>
                <input
                  type="text"
                  name="consultants[0]"
                  className="form-control"
                  placeholder="Consultant 1"
                  value={formData.consultants[0]}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-user-nurse"></i>
                </span>
                <input
                  type="text"
                  name="consultants[1]"
                  className="form-control"
                  placeholder="Consultant 2"
                  value={formData.consultants[1]}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-hospital"></i>
                </span>
                <input
                  type="text"
                  name="ward"
                  className="form-control"
                  placeholder="Ward"
                  value={formData.ward}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  name="unit"
                  className="form-control"
                  placeholder="Unit"
                  value={formData.unit}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-bed"></i>
                </span>
                <input
                  type="text"
                  name="roomNo"
                  className="form-control"
                  placeholder="Room No"
                  value={formData.roomNo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-bed"></i>
                </span>
                <input
                  type="text"
                  name="bedNo"
                  className="form-control"
                  placeholder="Bed No"
                  value={formData.bedNo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-gem"></i>
                </span>
                <input
                  type="checkbox"
                  name="valuables"
                  className="form-check-input"
                  checked={formData.valuables}
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Certified that no Jewellery valuables or money is left on
                  Patient.
                </label>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-signature"></i>
                </span>
                <input
                  type="text"
                  name="attendantSignature"
                  className="form-control"
                  placeholder="Attendant Signature"
                  value={formData.attendantSignature}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-signature"></i>
                </span>
                <input
                  type="text"
                  name="attendantrelation"
                  className="form-control"
                  placeholder="Relation of the attendant"
                  value={formData.attendantRelation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </fieldset>
        {/* Acknowledgment Section */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto">Acknowledgment</legend>

          <div className="mb-3">
          <p>
              Please ensure that the patient understands the following
              guidelines:
            </p>

          </div>
          <div className="form-check">
          <input
              type="checkbox"
              name="languagelocality"
              className="form-check-input"
              checked={formData.languagelocality}
              onChange={handleChange}
              required
            />
            <label>Explained the patient in his/her known language:</label>
        </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="generalGuidelines"
              className="form-check-input"
              checked={formData.generalGuidelines}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">
              General Guidelines of Hospital
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="patientRights"
              className="form-check-input"
              checked={formData.patientRights}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">
              Patient Rights & Responsibilities
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="billingPolicy"
              className="form-check-input"
              checked={formData.billingPolicy}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">Billing Policy</label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="dischargePolicy"
              className="form-check-input"
              checked={formData.dischargePolicy}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">Discharge Policy</label>
          </div>
        </fieldset>
        <div className="text-center mt-4 mb-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientAdmission;

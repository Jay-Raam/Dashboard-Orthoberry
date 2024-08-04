import React, { useState } from "react";
import Card from "./ui/Usercard";
import CardDetail from "./ui/UserLabel";
import { Editdata } from "./ui/Userdata";

const UserCardDatails = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  return (
    <>
      <div className="personal-details flex w-full justify-between items-start flex-col mt-8 pb-7">
        {Editdata && Editdata.length > 0 ? (
          Editdata.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center gap-5 w-full"
              key={index}
            >
              <Card title="Personal Info">
                <div className="flex justify-start items-center w-full">
                  <CardDetail label="Full Name" value={item.name} />
                  <CardDetail label="Gender" value={item.gender} />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail label="DOB" value={item.birthday} />
                  <CardDetail label="Phone" value={item.phone} />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail label="SSN" value={item.ssn} />
                  <CardDetail
                    label="Relationship to subscriber"
                    value={item.Relationship}
                  />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail label="Address" value={item.address} />
                </div>
              </Card>
              <Card title="Insurance Card">
                <div className="flex justify-start items-center w-full">
                  <CardDetail
                    label="Insurance carrier name"
                    value={item.insurancecarriername}
                  />
                  <CardDetail label="Subscriber ID" value={item.subscriberID} />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail
                    label="Patient / member ID"
                    value={item.patient}
                  />
                  <CardDetail
                    label="Group / Employer name"
                    value={item.group}
                  />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail label="Group number" value={item.groupnumber} />
                  <CardDetail
                    label="Patient’s Relationship with Subscriber"
                    value={item.PatientsRelationship}
                  />
                </div>
                <div className="flex justify-start items-center gap-3 w-full">
                  <div className="name flex justify-start items-start gap-3 flex-col w-1/2">
                    <span className="text-[14px] text-text-two-bg">
                      Image uploaded
                    </span>
                    <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
                      <input
                        type="file"
                        accept="image/*"
                        className="w-[200px] md:w-auto"
                        onChange={handleFileChange}
                      />
                      {image && (
                        <div>
                          <img
                            src={image}
                            alt={imageName}
                            style={{ maxWidth: "40px", height: "40px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
              <Card title="Coverage">
                <div className="flex justify-start items-center w-full">
                  <CardDetail label="Eligibility" value={item.Eligibility} />
                  <CardDetail
                    label="Network participation"
                    value={item.Networkparticipation}
                  />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail
                    label="Policy network type"
                    value={item.Policynetworktype}
                  />
                  <CardDetail
                    label="Policy effective date"
                    value={item.Policyeffectivedate}
                  />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail label="Benefit Max" value={item.BenefitMax} />
                  <CardDetail label="Renewal" value={item.Renewal} />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail
                    label="Benefit Remaining"
                    value={item.BenefitRemaining}
                  />
                  <CardDetail
                    label="Coinsurance Percentage"
                    value={item.CoinsurancePercentage}
                  />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail label="Pre-Auth & Pre-D" value={item.PreAuth} />
                  <CardDetail
                    label="Waiting Period"
                    value={item.WaitingPeriod}
                  />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail
                    label="Age Restrictions"
                    value={item.AgeRestrictions}
                  />
                  <CardDetail label="Deductible" value={item.Deductible} />
                </div>
                <div className="flex justify-start items-center w-full">
                  <CardDetail
                    label="Coordination of Benefits"
                    value={item.CoordinationofBenefits}
                  />
                  <CardDetail
                    label="Assignment of Benefits"
                    value={item.AssignmentofBenefits}
                  />
                </div>

                <div className="flex justify-start items-center w-full">
                  <CardDetail
                    label="Medically Necessary Only"
                    value={item.MedicallyNecessaryOnly}
                  />
                </div>
              </Card>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default UserCardDatails;

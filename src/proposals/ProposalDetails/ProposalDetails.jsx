import React from "react";

import DetailsSection from "../DetailsSection";

import "./ProposalDetails.css";

const ProposalDetails = ({ talk }) => {
  const { speaker, description, category } = talk;
  return (
    <div data-testid="proposal-details" className="ProposalDetails">
      <DetailsSection className="ProposalDetails__speaker" name={"speaker"}>
        <span className="ProposalDetails__speaker__value">{speaker}</span>
      </DetailsSection>
      <DetailsSection className="ProposalDetails__category" name={"category"}>
        <span className="ProposalDetails__category__value">{category}</span>
      </DetailsSection>
      <DetailsSection
        className="ProposalDetails__description"
        name={"description"}
      >
        <div className="ProposalDetails__description__value">
          {description.split("/n").map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </DetailsSection>
    </div>
  );
};

export default ProposalDetails;

import React from "react";
import classNames from "classnames";

import "./ProposalRow.css";

const withoutEventDefault = (callback) => (event) => {
  event.preventDefault();
  callback();
};

const ProposalRow = ({ proposal, onStatusUpdate }) => {
  const { id, title, status, category, speaker } = proposal;
  return (
    <div
      data-testid={`proposal-id-${id}`}
      className={classNames(
        "ProposalRow",
        status === "accepted"
          ? "ProposalRow--accepted"
          : "ProposalRow--rejected"
      )}
    >
      <div className="ProposalsRow__status_indicator" />
      <div className="ProposalsRow__title">title: {title}</div>
      <div className="ProposalsRow__speaker">{speaker}</div>
      <div className="ProposalsRow__category">category: {category}</div>
      <div className="ProposalsRow__status">status: {status}</div>
      <button
        disabled={status === "accepted"}
        className="ProposalsRow__accept_button_placeholder"
        onClick={withoutEventDefault(() => {
          onStatusUpdate(id, "accepted");
        })}
      >
        Accept
      </button>
      <button
        disabled={status === "rejected"}
        className="ProposalsRow__reject_button"
        onClick={withoutEventDefault(() => onStatusUpdate(id, "rejected"))}
      >
        Reject
      </button>
    </div>
  );
};

export default ProposalRow;

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PropTypes } from "prop-types";

const CompletionCircle = (props) => {
  const { completePer } = props;
  console.log(completePer);
  return (
    <div>
      <CircularProgressbar value={completePer} />
    </div>
  );
};

CompletionCircle.propTypes = {
  completePer: PropTypes.number.isRequired,
};

export default CompletionCircle;

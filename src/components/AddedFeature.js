import React from "react";

import { connect } from "react-redux";

import { removeFeature } from "../actions/actions.js";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {console.log("props.feature.name", props.feature.name)}
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log("additionalFeature MPTS", state);
  console.log("Added Features", state.car.features);

  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);

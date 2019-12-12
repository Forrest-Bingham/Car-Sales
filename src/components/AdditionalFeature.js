import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/actions.js";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
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

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);

import { connect } from "react-redux";
import SinglePuppy from "./SinglePuppy.js";

const mapStateToProps = (state, ownProps ) => ({
  singlePuppy: state.singlePuppy
});

// const mapDispatchToProps = (dispatch) => ({
//   loadAllPuppies: () => dispatch(getPuppies())
// })

const SinglePuppyContainer = connect(
  mapStateToProps
  // ,mapDispatchToProps
);

export default SinglePuppyContainer(SinglePuppy);

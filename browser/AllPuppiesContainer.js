import { connect } from "react-redux";
import AllPuppies from "./AllPuppies.js";
// import {getPuppies} from "./action-creators.js";


const mapStateToProps = (state, ownProps ) => ({
  allPuppies: state.allPuppies
});

// const mapDispatchToProps = (dispatch) => ({
//   loadAllPuppies: () => dispatch(getPuppies())
// })

const AllPuppiesContainer = connect(
  mapStateToProps
  // ,mapDispatchToProps
);
export default AllPuppiesContainer(AllPuppies);

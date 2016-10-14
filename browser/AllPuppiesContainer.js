import { connect } from "react-redux";
import AllPuppies from "./AllPuppies.js";
import {receivePuppies} from "./action-creators.js";

const hardCodedData = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

const mapStateToProps = (state, ownProps ) => ({
  allPuppies: state.allPuppies
});

const mapDispatchToProps = (dispatch) =>

  ({
    loadAllPuppies: () => dispatch(receivePuppies(hardCodedData))
  })

const AllPuppiesContainer = connect(mapStateToProps, mapDispatchToProps);
export default AllPuppiesContainer(AllPuppies);

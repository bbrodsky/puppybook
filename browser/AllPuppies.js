import React from 'react';
import {Link} from "react-router";

export default class AllPuppies extends React.Component {

  // componentDidMount () {
  //   this.props.loadAllPuppies();
  // }

  render () {

    const {allPuppies} = this.props;

    return (
      <div> YO DUDE
        <ul className="list-unstyled">
          {
             allPuppies.map( (puppy) =>
              <li key={puppy.id}><Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>
          )}
        </ul>
      </div>
    )
  }
}

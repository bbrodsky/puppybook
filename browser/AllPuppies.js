import React from 'react';

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
              <li key={puppy.id}><a href="#">{puppy.name}</a></li>
          )}
        </ul>
      </div>
    )
  }
}

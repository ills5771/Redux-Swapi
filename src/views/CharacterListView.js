import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchingCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchingCharacters();
  }

  render() {
    if (this.props.fetching) {
      ("fetching characters...");
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching
});

export default connect(
  mapStateToProps,
  {
    fetchingCharacters
  }
)(CharacterListView);

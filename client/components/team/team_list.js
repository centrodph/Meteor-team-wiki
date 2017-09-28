import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../../actions/team_actions';
import CreateTeam from './team_create';
import ReactModal from 'react-modal';

class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  handlerOpenModal() {
    this.setState({
      showModal: true
    });
  }
  handleCloseModal() {
    this.setState({
      showModal: false
    });
  }
  getListTeam() {
    return this.props.teams.map(team => {
      return (
        <div className="team-box card blue-grey darken-1" key={team._id}>
          <div className="card-content white-text">
            <span className="card-title">
              {team.name}
            </span>
            <p>
              {team.description}
            </p>
          </div>
          <div className="card-action">
            <a href="#">Edit</a>
            <a href="#">Detail</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="team-list">
        <h3>My Teams</h3>
        <div className="team-boxes">
          {this.getListTeam()}
          <div className="team-box">
            <div className="team-box-name">
              <button onClick={this.handlerOpenModal.bind(this)}>
                + add team
              </button>
            </div>
          </div>
        </div>
        <ReactModal isOpen={this.state.showModal} contentLabel="CreateTeam">
          <div className="content-modal">
            <div className="content-modal-box">
              <button onClick={this.handleCloseModal.bind(this)}>
                Close Modal
              </button>
              <br />
              <br />
              <br />
              <CreateTeam />
              <br />
              <br />
              <br />
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.myteams
  };
}
export default connect(mapStateToProps, { fetchTeams })(TeamList);

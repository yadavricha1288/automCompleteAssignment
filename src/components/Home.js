import React from "react";
import { connect } from "react-redux";
import AutoCompleteSearch from './AutoCompleteSearch'
// Home page component
export class Home extends React.Component {

  constructor(props) {
    super(props)
  }


  onUserSelect(event) {
    const { activeIndex, usersList } = this.props;
    const key = event.keyCode;
    let index = activeIndex;
    let userList = document.getElementsByClassName('item-list')[0];
    if (key === 40 && usersList && activeIndex < usersList.length - 1) {
      index++;
      userList.scrollTop += 40;
    } else if (key === 38 && activeIndex > 0) {
      index--;
      userList.scrollTop -= 40;
    } else if (key === 13) {
      let newWindow = window.open(usersList[index].html_url, '_blank');
      win.focus();
    }

    this.props.dispatch({
      type: 'SELECT__GIT_HUB_USERS',
      activeIndex: index,
      selectedUser: usersList[index]
    });
    console.log('29', usersList[index]);
  }

  onUserSearch(e) {
    this.props.dispatch({
      type: 'SEARCH__GIT_HUB_USERS',
      query: e.target.value,
    });
  }
  // render
  render() {
    return (
      <div className="home-page">
        <AutoCompleteSearch {...this.props}
          onUserSearch={this.onUserSearch.bind(this)}
          onUserSelect={this.onUserSelect.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    usersList: state.gitHubUsers.usersList,
    selectedUser: state.gitHubUsers.selectedUser,
    activeIndex: state.gitHubUsers.activeIndex
  };
}
export default connect(mapStateToProps)(Home);


import React from "react";
import GitHubUsers from './GitHubUsers';
// Home page component
export default class AutoCompleteSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openList: false
        }
    }

    openAutoComplete() {
        this.setState({
            openList: true
        })
    }
    closeAutoComplete() {
        this.setState({
            openList: false
        })
    }

    onUserSelect(e) {
        this.setState({
            openList: true
        })
        this.props.onUserSelect(e)
    }


    // render
    render() {
        const { onUserSearch, onUserSelect, usersList } = this.props;
        return (
            <div className="user-input">
                <input  placeholder = " type a github username" type="text" onFocus={(e) => this.openAutoComplete()} onKeyDown={(e) => this.onUserSelect(e)} onChange={(e) => onUserSearch(e)} />
                {this.state.openList && usersList.length > 0 &&
                    <GitHubUsers {...this.props} />}
            </div>
        );
    }
}

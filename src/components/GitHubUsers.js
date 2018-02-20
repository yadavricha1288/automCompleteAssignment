import React from "react";

// Home page component
export default class GitHubUsers extends React.Component {
    // render
    render() {
        const { usersList, activeIndex } = this.props;
        return (

            <div className="data-list">
                <ul className="item-list">
                    {
                        usersList.map((item, i) => {
                            return (
                                <li key={i} className={activeIndex === i ? 'active list-group-item' : 'list-group-item'}>
                                   <div className="data-image"><img src={item.avatar_url} /></div>
                                    <div className="data">{item.login}
                                  </div>
                                    
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchUserAction, fetchExodusUserAction} from "../../redux/action";

class UserListPage extends Component {

    getUser = () => {
        this.props.fetchUserAction()
    }

    render() {
        return (
            <div>
                <button onClick={this.getUser}>get user</button>
                <table className="table table-bordered table-hover " >
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users.map(user => <tr>
                            <th scope="row">{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.username}</th>
                            <th>{user.email}</th>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateProps = state => {
    return {
        users: state.userReducer.users,
        user: state.userReducer.user
    }
}

const mapDispatchProps = {
    fetchUserAction, fetchExodusUserAction
}
export default connect(mapStateProps, mapDispatchProps) (UserListPage);
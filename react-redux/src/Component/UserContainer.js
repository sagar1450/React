import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userAction'

function UserContainer(props) {
    useEffect(() => {
        props.fetchUsers();
    }, [])
    const userData = props.userData;
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <table border="1" style={{marginLeft:"25%"}}>
                <tr>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>Eamil</td>
                    <td>Phone</td>
                    <td>website</td>
                </tr>
            
                    {
                    userData.users.map(user =>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    )
                    }
              
            </table>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)
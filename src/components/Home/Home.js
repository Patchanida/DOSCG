import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { fetchGetUsers } from '../../redux/actions';
import { connect } from 'react-redux';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    

    UNSAFE_componentWillMount() {
        this.props.dispatch(fetchGetUsers())
    }

    render() {
        
        return (
            <div>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                    <h1 className="primary-color">Results from example data</h1><br/>
                        {this.props.users.map((item,i) => {
                            return (
                                <div key={i}>
                                    <h2>Name: {item.name}</h2>
                                    <h2>Age: {item.age}</h2>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.getUsers.data ? state.getUsers.data : [],
    }
}


export default connect(mapStateToProps)(Home)
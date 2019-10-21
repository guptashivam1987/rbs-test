import React from 'react';
import EmpTable from './EmpList'

function createData(id,firstName,lastName,email,gender,phone,street,city,country,salary,dateOfJoining,department) {
    return { id,firstName,lastName,email,gender,phone,street,city,country,salary,dateOfJoining,department};
}

export default class EmpTableController extends React.Component {
    state = {
        rows:[]
    }

    componentDidMount() {
        const {order, orderBy, pageNo, pageSize} = this.props;
        fetch(`employee-service/employees?size=${pageSize}&page=${pageNo}&sort=${orderBy}`)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({rows: responseJson.content})
                console.log("Data: " + JSON.stringify(this.state.rows));
            });
        this.props.updateCount(this.state.rows.length);
    }

    render() {
        const {order, orderBy, handleSort} = this.props;
        return (
            <EmpTable rows={this.state.rows} orderBy={orderBy} order={order} handleSort={handleSort}/>
        );
    }
}

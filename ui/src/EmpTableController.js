import React from 'react';
import EmpTable from './EmpList'

function createData(id,firstName,lastName,email,gender,phone,street,city,country,salary,dateOfJoining,department) {
    return { id,firstName,lastName,email,gender,phone,street,city,country,salary,dateOfJoining,department};
}
  
const rows = [
    createData(1,'Carlen','Barkworth','cbarkworth0@tuttocitta.it','Female','581-563-9265','68797 Gerald Alley','Banarankrajan','Indonesia','1718','7/5/2019','Support'),
    createData(2,'Kyle','Courtman','kcourtman1@quantcast.com','Male','197-643-0941','03 Fairview Park','Chacapalpa','Peru','2502','10/15/2017','Accounting'),
    createData(3,'Dewie','Heller','dheller2@nhs.uk','Male','245-607-6535','75 Caliangt Terrace','Corroios','Portugal','1297','8/3/2018','Engineering'),
    createData(4,'Barbaraanne','Kuban','bkuban3@chron.com','Female','551-204-3561','9552 8th Place','Sievi','Finland','1257','4/8/2017','Legal'),
    createData(5,'Perle','Wiggins','pwiggins4@thetimes.co.uk','Female','828-163-0368','23795 Oxford Point','Bukid','Philippines','1124','5/2/2018','Marketing'),
    createData(6,'Harriette','Dibden','hdibden5@chicagotribune.com','Female','524-438-9891','211 Debra Trail','Néos Mylótopos','Greece','3663','10/15/2017','Support'),
    createData(7,'Blake','MacGaffey','bmacgaffey6@nbcnews.com','Male','352-413-0518','7 Truax Avenue','Sanbao','China','3074','12/10/2017','Accounting'),
    createData(8,'Gerome','Cowell','gcowell7@wufoo.com','Male','410-219-4915','9 Prairieview Park','Tianxin','China','1901','1/27/2018','Product Management'),
    createData(9,'Layney','Armour','larmour8@discuz.net','Female','933-506-7306','89 Northview Alley','Plandirejo','Indonesia','2336','3/2/2018','Training'),
    createData(10,'Elora','Veljes','eveljes9@theguardian.com','Female','821-145-7347','2 Arapahoe Center','May Pen','Jamaica','1355','11/4/2018','Human Resources'),
    createData(11,'Herman','Tinkler','htinklera@businesswire.com','Male','964-306-5605','1 Almo Drive','Haiyanmiao','China','1472','9/29/2018','Training'),
    createData(12,'Lyndy','Marioneau','lmarioneaub@netscape.com','Female','835-491-7155','89739 Duke Pass','Zunilito','Guatemala','3922','12/19/2017','Sales'),
    createData(13,'Miles','MacInerney','mmacinerneyc@bloglovin.com','Male','863-224-3073','4884 Vera Parkway','Gaojingzhuang','China','2803','11/28/2018','Marketing')    
];

export default class EmpTableController extends React.Component {
    state = {
        rows: []
    }

    componentDidMount() {
        /*
            Rest api call to get rows
            Params: 
                OrderBy: Field
                Order: Desc OR Asc
                Page No
                Page Size
        */
        this.state.rows = rows;
        this.props.updateCount(this.state.rows.length);
    }

    render() {
        const {order, orderBy, pageNo, pageSize, handleSort, updateCount} = this.props;
        return (
            <EmpTable rows={this.state.rows} orderBy={orderBy} order={order} handleSort={handleSort}/>
        );
    }
}

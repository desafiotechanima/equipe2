import React, {useEffect, useState} from 'react';
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
} from "reactstrap";
const axios = require('axios');

function getAll(){
    axios({
        method: 'get',
        url: 'https://usuarios-zoe.herokuapp.com/api/usuarios',
      });
    }

const UsersTable = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const {data} = response;
            console.log(data.users);
            if (data.success) {
                setUsers(data.users);
            }
        }
        runAsync();
    }, []);

    return (
        <>
          
            <Container className="mt-6 mb-6">
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0 font-bold text-3xl">Users</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">WhstaApp</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map(user => (
                                    <tr key={user.email}>
                                        <th scope="row">
                                            {user.name}
                                        </th>
                                        <td>{user.whatsNumber}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default UsersTable;
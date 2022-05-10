import { render } from "@testing-library/react";
import React, { Component } from "react";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.reloadUser = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        this.setState({users: [
                {
                    id: 1, nome: 'Joao', login: 'jhon', idade: '25', perfil: 'admin'
                },
                {
                    id: 2, nome: 'Maria', login: 'mar', idade: '20', perfil: 'adimin'
                }

            ]
        });
    }

    render() {
        return (
            <div>
                <h2>Lista de Usuarios</h2>
                <table border="1">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Login</th>
                            <th>Idade</th>
                            <th>Perfil</th>
                            <th>Ações</th>
                        </tr>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.nome}</td>
                                        <td>{user.login}</td>
                                        <td>{user.idade}</td>
                                        <td>{user.perfil}</td>
                                        <td>
                                            <button> + </button>
                                        </td>
                                    </tr>

                            )
                        }
                    </tbody>
                </table>
                <br></br>
                <button onClick={() => this.reloadUserList()}>Recarregar</button>

            </div>
        );
    }
}

export default ListUserComponent;


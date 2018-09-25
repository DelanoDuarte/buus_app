import React, { Component } from "react";

import { GridAtendimentosComponent } from "../../common/GridAtendimentosComponent";
import { AtendimentoAPI } from "../AtendimentoAPI";

const atendimentoAPI = new AtendimentoAPI();

export class MeusAtendimentos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            atendimentos: []
        }
    }

    componentDidMount() {
        this.setState({ atendimentos: atendimentoAPI.findAll() })
    }

    render() {
        return (
            <div>
                <h1>Meus Atendimentos</h1>
                <br />
                <GridAtendimentosComponent atendimentos={this.state.atendimentos} />
            </div>
        );
    }
}
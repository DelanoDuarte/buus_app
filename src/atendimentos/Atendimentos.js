import React, { Component } from "react";
import { MeusAtendimentos } from './meus_atendimentos/MeusAtendimentos'
import { AtendimentosCooperativa } from './atendimentos_cooperativa/AtendimentosCooperativa'
import { LoginUtil } from "../login/LoginUtils";


const MeusAtendimentosComponent = () => (
    <div>
        <MeusAtendimentos />
    </div>
);

const AtendimentosCooperativaComponent = () => (
    <div>
        <AtendimentosCooperativa />
    </div>
);

const loginUtil = new LoginUtil()

export class Atendimentos extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        if (loginUtil.hasRole('COOPERATIVA')) {
            return (<AtendimentosCooperativaComponent />)
        }
        return (<MeusAtendimentosComponent />);
    }

}
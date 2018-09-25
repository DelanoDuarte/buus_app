import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { MeusAtendimentos } from "./atendimentos/meus_atendimentos/MeusAtendimentos";
import { Atendimentos } from './atendimentos/Atendimentos'

export class AppRoutes extends Component {

    render() {
        return (
            <div>
                <Route exact path="/atendimentos" component={Atendimentos} />
                {/* <Route exact path="/users" component={UserList} />
                <Route exact path="/users/new" component={NewUser} /> */}
            </div>
        )
    }

}
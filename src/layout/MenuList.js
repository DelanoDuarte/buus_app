import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import { Home as HomeIcon, People, Assignment } from '@material-ui/icons'

export class MenuList extends Component {

    render() {
        return (
            <div>
                {/* <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Home" />
                </ListItem> */}
                <ListItem button component={Link} to="/atendimentos">
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText inset primary="Atendimentos" />
                </ListItem>
            </div>
        )
    }

}
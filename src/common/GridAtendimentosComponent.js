import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableRow, TableBody, TableCell, TableHead, TablePagination, TableFooter } from '@material-ui/core'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { Close, Timer } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class PaginacaoGridAtendimentoComponent extends Component {

    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="Primeira"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Anterior"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Proxima"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Ultima"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }

}

PaginacaoGridAtendimentoComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};

const PaginacaoGrid = withStyles(actionsStyles, { withTheme: true })(
    PaginacaoGridAtendimentoComponent,
);



export class GridAtendimentosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            rowsPerPage: 5
        }
    }

    handleSituacao = (situacao) => {
        switch (situacao) {
            case "CONFIRMADO":
                return (
                    <Chip
                        label={situacao}
                        avatar={<DoneIcon />}
                        color="primary"
                    />
                )
            case "PENDENTE":
                return (
                    <Chip
                        label={situacao}
                        avatar={<Timer />}
                        color="default"
                    />
                )

            case "CANCELADO":
                return (
                    <Chip
                        label={situacao}
                        avatar={<Close />}
                        color="secondary"
                    />
                )
        }
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render() {

        const { rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.atendimentos.length - page * rowsPerPage);

        return (
            <div>
                <Card>
                    <CardContent>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#ID</TableCell>
                                        <TableCell>PASSAGEIRO</TableCell>
                                        <TableCell>ORIGEM</TableCell>
                                        <TableCell>DESTINO</TableCell>
                                        <TableCell>HORÁRIO PROGRAMADO</TableCell>
                                        <TableCell>SITUAÇÃO</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.atendimentos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(atendimento => {
                                        return (
                                            <TableRow key={atendimento.id}>
                                                <TableCell> {atendimento.id}</TableCell>
                                                <TableCell> {atendimento.passageiro}</TableCell>
                                                <TableCell> {atendimento.origem}</TableCell>
                                                <TableCell> {atendimento.destino}</TableCell>
                                                <TableCell> {atendimento.horario}</TableCell>
                                                <TableCell> {this.handleSituacao(atendimento.situacao)}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 48 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            colSpan={3}
                                            count={this.props.atendimentos.length}
                                            rowsPerPage={rowsPerPage}
                                            labelRowsPerPage="Registros por Página"
                                            page={page}
                                            onChangePage={this.handleChangePage}
                                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                            ActionsComponent={PaginacaoGrid}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </Paper>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
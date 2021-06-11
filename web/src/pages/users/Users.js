import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import useStyles from './style';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Users() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    const rows = [{
        name: 'Joao',
        email: 'joaob@gmail.com',
        cellphone: '55 11 94237-5128',
        telephone: '11 4231-5124',
    },{
        name: 'Joao1',
        email: 'joaob@gmail.com',
        cellphone: '55 11 94237-5128',
        telephone: '11 4231-5124',
    },{
        name: 'Joao2',
        email: 'joaob@gmail.com',
        cellphone: '55 11 94237-5128',
        telephone: '11 4231-5124',
    }]

    return(
        <div className={classes.container}>
            <h1 className={classes.title}>Users</h1>

            <TableContainer className={classes.table}>
                <Table aria-label="customized table">
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell className={classes.tableHeader}>Nome</TableCell>
                            <TableCell className={classes.tableHeader}>Email</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Celular</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Telefone</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Editar</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Inativar</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody className={classes.tableBody}>
                    {rows.map((row) => (
                        <TableRow key={row.name} >
                            <TableCell className={classes.tableBody} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell className={classes.tableBody}>{row.email}</TableCell>
                            <TableCell className={classes.tableBody} align="center">{row.cellphone}</TableCell>
                            <TableCell className={classes.tableBody} align="center">{row.telephone}</TableCell>
                            <TableCell className={classes.tableIconsColumn} align="center"><EditIcon className={classes.tableIcons}/></TableCell>
                            <TableCell className={classes.tableIconsColumn} align="center"><DeleteIcon className={classes.tableIcons}/></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
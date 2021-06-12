import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import useStyles from './style';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TechDisplay from '../../../components/techDisplay/TechDisplay';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function InactiveUsers() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getUsers() {
            try {
                if (search.length === 0) {
                    setLoading(true);
                    const response = await api.get(`/users?page=${page}&status=${false}`, {
                        headers: {
                            Authorization: localStorage.getItem('token')
                        }
                    });
                    setUsers(response.data.docs);
                    setPages(response.data.pages);
                    setPage(response.data.page);
                    setLoading(false);
                }
            } catch(ex) {
                alert('Não foi possível recuperar usuários do banco de dados. Tente novamente mais tarde.');
            }
        }
        getUsers();
    }, [search, page]);

    useEffect(() => {
        async function searchUsers() {
            try {
                if (search.length >= 1) {
                    setLoading(true);
                    const response = await api.get(`/users?search=${search}&status=${false}`, {
                        headers: {
                            Authorization: localStorage.getItem('token')
                        }
                    });
                    setUsers(response.data.docs);
                    setPages(response.data.pages);
                    setPage(response.data.page);
                    setLoading(false);
                }
            } catch(ex) {
                alert('Não foi possível recuperar usuários do banco de dados. Tente novamente mais tarde.');
            }
        }
        searchUsers();
    }, [search]);

    async function handleActivateUser(id) {
        try {
            const response = await api.post(`/users/changeStatus/${id}`, {}, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            
            if (response.status === 204) {
                setUsers(users.filter(user => user._id !== id));
            }
        } catch(ex) {
            alert('Houve um erro ao tentar ativar usuário. Tente novamente mais tarde.');
        }
    }

    function handleSearchKeyDown(evt) {
        if (evt.code === 'Enter' || evt.code === 'NumpadEnter') {
            setSearch(evt.target.value);
        }
    }

    function handleNextPageClick() {
        setPage(page+1);
    }

    function handlePreviousPageClick() {
        setPage(page-1);
    }

    return(
        <div className={classes.container}>
            <h1 className={classes.title}>Usuários Inativos</h1>

            <div className={classes.interationDiv}>
                <div className={classes.searchDiv}>
                    <SearchIcon className={classes.searchIcon}/>
                    <input className={classes.searchInput} placeholder='Pesquisar' type='text' onKeyDown={handleSearchKeyDown}/>
                </div>
                <Link to='/users' className={classes.seeInactiveUsers}>Retornar para usuários ativos</Link>
            </div>
            
            <TableContainer className={classes.table}>
                <Table aria-label="customized table">
                    <TableHead padding='none' className={classes.tableHeader}>
                        <TableRow>
                            <TableCell padding='none' className={classes.tableHeaderCell} style={{width: '25%', minWidth: '210px'}}>
                                Nome
                            </TableCell>
                            <TableCell padding='none' className={classes.tableHeaderCell} style={{width: '25%', minWidth: '210px'}}>
                                Email
                            </TableCell>
                            <TableCell padding='none' className={classes.tableHeaderCell} style={{width: '15%', minWidth: '130px'}}>
                                Celular
                            </TableCell>
                            <TableCell padding='none' className={classes.tableHeaderCell} style={{width: '12%', minWidth: '100px'}}>
                                Telefone
                            </TableCell>
                            <TableCell padding='none' className={classes.tableHeaderCell} style={{width: '18%', minWidth: '180px'}}>
                                Tecnologias
                            </TableCell>
                            <TableCell padding='none' align="center" style={{width: '5%', minWidth: '50px', borderBottom: '1px solid var(--darkBlue)', color: 'var(--darkBlue)'}}>
                                Ativar
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody className={classes.tableBody}>

                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={6} align='center' >
                                <div className={classes.tableBodyCellLoading}>
                                    <CircularProgress style={{marginRight: '15px'}} size={22} /> 
                                    <span style={{color: 'var(--darkBlue)', fontSize: '15px'}}>Carregando...</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ) : (
                        users.map(row => (
                            <TableRow key={row._id} className={classes.tableBodyRow}>
                                <TableCell className={classes.tableBodyCell} padding='none'>{row.name}</TableCell>
                                <TableCell className={classes.tableBodyCell} padding='none'>{row.email}</TableCell>
                                <TableCell className={classes.tableBodyCell} padding='none'>{row.cellphone}</TableCell>
                                <TableCell className={classes.tableBodyCell} padding='none'>{row.telephone}</TableCell>
                                <TableCell className={classes.tableBodyCell} padding='none'>
                                    {row.techs.map(tech => (
                                        <TechDisplay name={tech.name} key={tech._id}/>
                                    ))}
                                </TableCell>
                                <TableCell className={classes.tableIconsColumn} padding='none' align='center'>
                                    <PersonAddIcon onClick={() => { handleActivateUser(row._id) }} className={classes.tableIcons}/>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                    
                    </TableBody>
                </Table>
            </TableContainer>

            {pages === 1 ? null : (
                <footer className={classes.footerSection}>
                    <button className={classes.footerArrow} disabled={page === 1} onClick={handlePreviousPageClick}><ChevronLeftIcon /></button>
                    <span className={classes.textSpan}>Página {page}</span>
                    <button className={classes.footerArrow} disabled={page === pages} onClick={handleNextPageClick}><ChevronRightIcon /></button>
                </footer>
            )}
            
        </div>
    );
}
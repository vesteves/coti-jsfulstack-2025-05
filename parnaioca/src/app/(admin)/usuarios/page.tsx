'use client';

import ButtonCreate from '@/components/atoms/ButtonCreate';
import { getAllUsers } from '@/services/users/getAll';
import { User } from '@/types/user.type';
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './style';

export const UsuariosPage = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [users, setUsers] = useState<User[] | []>([]);

  const fetchData = async () => {
    const response = await getAllUsers();
    setUsers(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.UserWrapper>
      <S.UserActionWrapper className="flex justify-between items-center mb-6">
        <S.Total>Total de 5 funcionários cadastrados</S.Total>
        <ButtonCreate />
      </S.UserActionWrapper>

      {/* TODO colocar um map de usuários neste bloco */}
      {!users.length && <CircularProgress />}
      {users && (
        <S.UserTable component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Lista de Usuários">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">E-mail</TableCell>
                <TableCell align="right">Permissão</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Último login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.active}</TableCell>
                  <TableCell align="right">{row.lastLogin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </S.UserTable>
      )}
      {pages.map((page) => (
        <div key={page}>
          <Link href={`/usuarios/${page}`}>
            Clique aqui para ir para a página {page}
          </Link>
        </div>
      ))}
    </S.UserWrapper>
  );
};

export default UsuariosPage;

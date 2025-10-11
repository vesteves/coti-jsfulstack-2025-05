export const GET = async () => {
  // BFF - Forma de mascarar o backend real
  // 'https://viacep.com.br/ws/20761250/json/'
  // const responseRaw = await fetch('http://localhost:8000/user', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization: 'eyJhbGciOiJIUzI1NiJ9.Njg5N2E5MmZhMTA2ODcwNWUzMzgxZGUx.nWdzsXR_gIBgXMFyk58cI38XojWz1ziw9qcfnDUG5q4'
  //   },
  // });

  // const response = await responseRaw.json();
  // return Response.json(response)


  // mock de um backend real
  return Response.json([
    {
      id: 1,
      name: 'Vitor',
      email: 'teste1@teste.com.br',
      role: 'admin',
      active: true,
      lastLogin: '2025-01-01',
    },
    {
      id: 2,
      name: 'Guilherme',
      email: 'teste2@teste.com.br',
      role: 'user',
      active: true,
      lastLogin: '2025-01-01',
    },
  ])
}
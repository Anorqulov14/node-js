
import { createServer } from 'http';
import { join } from 'path';
import { readFile, writeFile } from 'fs/promises';
import { parse } from 'url';

const filePath = join(process.cwd(), 'users.json');

async function getData() {
  try {
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Error on get data:', error);
    return [];
  }
}


async function setData(data) {
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log('Error on set data:', error);
  }
}

const server = createServer(async (req, res) => {
  const { method, url } = req;
  const parsedUrl = parse(url, true);
  const id = parsedUrl.query.id;

  res.setHeader('Content-Type', 'application/json');

  if (method === 'GET' && parsedUrl.pathname === '/users') {
    const users = await getData();
    res.end(JSON.stringify(users));
    return;
  }

  if (method === 'GET' && parsedUrl.pathname === '/user') {
    const users = await getData();
    const user = users.find(u => u.id === Number(id));
    res.end(JSON.stringify(user || { message: 'User not found' }));
    return;
  }

  if (method === 'POST' && parsedUrl.pathname === '/users') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      const newUser = JSON.parse(body);
      const users = await getData();
      users.push(newUser);
      await setData(users);
      res.end(JSON.stringify({ message: 'User added', users }));
    });
    return;
  }

  if (method === 'PUT' && parsedUrl.pathname === '/users') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      const updatedUser = JSON.parse(body);
      let users = await getData();
      users = users.map(u => u.id === Number(id) ? { ...u, ...updatedUser } : u);
      await setData(users);
      res.end(JSON.stringify({ message: 'User updated', users }));
    });
    return;
  }

  if (method === 'DELETE' && parsedUrl.pathname === '/users') {
    let users = await getData();
    users = users.filter(u => u.id !== Number(id));
    await setData(users);
    res.end(JSON.stringify({ message: 'User deleted', users }));
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ message: 'Not found' }));
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

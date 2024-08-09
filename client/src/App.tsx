import { useEffect, useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

interface User {
  id: number;
  username: string;
  displayName: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await axios.get<User[]>("http://localhost:3000/api/users")
        setUsers(response.data)
      } catch (error) {
        setError('There was an error fetching users')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, []);

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">User List</h1>
    {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <ClipLoader size={50} color={"#007bff"} loading={loading} />
        </div>
    )}
    {error && <p className="text-red-500">{error}</p>}
    {!loading && !error && users.length === 0 && <p>No users found.</p>}
    {!loading && !error && users.length > 0 && (
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">ID</th>
            <th className="py-2 px-4 border-r">Username</th>
            <th className="py-2 px-4">Display Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b border-r">{user.id}</td>
              <td className="py-2 px-4 border-b border-r">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.displayName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
}

export default App;

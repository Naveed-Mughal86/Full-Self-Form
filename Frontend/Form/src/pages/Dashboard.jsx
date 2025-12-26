import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');

        if(storedUser){
            setUser(JSON.parse(storedUser));
        }else{
            navigate('/login');
        }
    },[navigate])

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        navigate('/login')
    }

    if(!user) return <p>Loading...</p>

    return(
        <div className="min-h-screen bg-[url(/bg.jpg)] bg-no-repeat bg-cover bg-fixed bg-center p-8">
        <div className="max-w-2xl mx-auto  backdrop-blur-xs rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600 font-semibold uppercase">Full Name</p>
            <p className="text-lg text-gray-900">{user.name || "N/A"}</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-600 font-semibold uppercase">Email Address</p>
            <p className="text-lg text-gray-900">{user.email}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 font-semibold uppercase">Account ID</p>
            <p className="text-xs text-gray-400 truncate">{user.id}</p>
          </div>
        </div>
      </div>
    </div>
    )
}
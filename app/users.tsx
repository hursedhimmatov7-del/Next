'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

type User = {
    id: string
    name: string
    email: string
}

const API = 'https://6aaa5efdff4dd5698b4e7685.mockapi.io/panel'

const Users = () => {
    const [data, setData] = useState<User[]>([])
    const [load , setload] = useState(false)

    async function get() {
        setload(true)
        try {
            const { data } = await axios.get<User[]>(API)
            setData(data)
        } catch (error) {
            console.log(error)
        }
        finally{
            setload(false)
        }
    }

    async function dltuser(id: string) {
        try {
            await axios.delete(`${API}/${id}`)
            setData(prev => prev.filter(user => user.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        get()
    }, [])

    if(load){
        return <div>loading....</div>
    }

    return (
        <div className="space-y-4 p-10">
            {data.map(user => (
                <div key={user.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <h1 className="font-semibold">{user.name}</h1>
                        <p className="text-gray-500">{user.email}</p>
                    </div>

                    <button onClick={() => dltuser(user.id)} className="rounded-md bg-black px-4 py-2 text-white">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Users
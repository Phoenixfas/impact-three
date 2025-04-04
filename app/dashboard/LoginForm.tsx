'use client'
import { useState, useEffect } from 'react'
import { FaUserLock } from "react-icons/fa"
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { login, logout } from '../../redux/auth/loginSlice'

export default function LoginForm() {
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    
    const [formData, setFormData] = useState({
        email: '', 
        password: '' 
    })
    
    const { email, password } = formData;
    
    
    const dispatch = useAppDispatch()
    const router = useRouter()


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        // dispatch(login({ email }))

        const adminData = {
            email,
            password
        }

        setIsLoading(true)
        fetch('/api/administrator/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success === false) {
                setIsLoading(false)
                setError(data.msg)
            } else {
                setIsLoading(false)
                dispatch(login(data.token))
            }
        })
        .catch((err : any) => {
            setIsLoading(false)
            setError(err.message)
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ 
            ...formData, [e.target.name]: e.target.value 
        })
    }

    if (isLoading) {
        return (
            <div className='relative w-full h-screen bg-[var(--foreground)] p-5 flex items-center justify-center'>
                <div className="w-10 h-10 rounded-full border-[5px] border-r-transparent border-[var(--background)] animate-spin"></div>
            </div>
        )
    }
    

  return (
    <div className='relative w-full h-screen bg-[var(--foreground)] p-5 flex items-center justify-center'>
        <div className="w-[400px] bg-[var(--background)] rounded-2xl p-10 flex flex-col items-center">
            <div className="text-5xl mb-5 text-[var(--background)] p-3 rounded-full bg-[var(--foreground)]">
                <FaUserLock />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form className="flex flex-col w-full" onSubmit={onSubmit}>
                <input value={email} onChange={onChange} type="email" required name="email" id="email" placeholder='email' className="mb-5 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[var(--foreground)]" />
                <input value={password} onChange={onChange} type="password" required name="password" id="password" placeholder='password' className="mb-5 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[var(--foreground)]" />
                <button type="submit" className="bg-[var(--foreground)] text-[var(--background)] p-2 rounded-lg">Login</button>
            </form>
        </div>
    </div>
  )
}

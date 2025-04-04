'use client'
import React, {useEffect, useState} from 'react'
import { useAppSelector } from "../../redux/hooks"


interface Props {
    children: React.ReactNode;
}

import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import LoginForm from "./LoginForm"

export default function Auth({children} : Props) {
  const [notExpired, setNotExpired] = useState(true)
  const loggedIn = useAppSelector((state) => state.login.value)
  const token = useAppSelector((state) => state.login.admin)

  useEffect(() => {
    const getMe = async () => {
      fetch('/api/administrator/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => {
            if(res.status === 200) {
                console.log(res.json())
                setNotExpired(true)
            } else {
                setNotExpired(false)
            }
        })
        .catch((err : any) => {
          setNotExpired(false)
        })
    }

    getMe()
  }, [token])

  return (
    <div className='bg-[#eee]'>
        {loggedIn ? notExpired ? <div className="flex overflow-hidden">
            <Sidebar />
            <div className="h-screen flex-1 overflow-y-scroll">
                <Header />
                {children}
                {/* <Footer /> */}
            </div>
        </div> : <LoginForm /> : <LoginForm />}
    </div>
  )
}

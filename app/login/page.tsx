'use client'

import { login } from '../actions/login'
import { useActionState, useEffect } from "react"

const initialState = {
    message: '' as string,
}

export default function LoginPage() {

    const [state, formAction] = useActionState(login, initialState)

    useEffect(()=>{
        console.log('state',state)
    },[state])

    
}
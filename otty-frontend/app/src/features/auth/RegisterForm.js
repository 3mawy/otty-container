import {useEffect, useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {setCredentials} from './authSlice'
import {useLoginMutation, useRegisterMutation} from './authApiSlice'
import {useTranslation} from "react-i18next";
import Separator from "../../app/components/common/Separator";
import Button from "../../app/components/common/Button";
import SocialLogin from "./SocialLogin";

const RegisterForm = () => {
    const {t, i18n} = useTranslation('register');

    const usernameRef = useRef()
    const errRef = useRef()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState([])
    const navigate = useNavigate()

    const [register] = useRegisterMutation()
    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    useEffect(() => {
        setError('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const registerData = await register({username, email, password, confirmPassword}).unwrap()
            if (registerData.status === 'success') {
                const userData = await login({email, password}).unwrap()
                dispatch(setCredentials({...userData.data}))
                setEmail('')
                setPassword('')
                navigate('/')
            }

        } catch (err) {
            setError(err.data?.messages)
            errRef.current.focus();
        }
    }
    const handleUserNameInput = (e) => setUsername(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleConfirmPwdInput = (e) => setConfirmPassword(e.target.value)

    let content = (
        <form onSubmit={handleSubmit} className="space-y-6 capitalize">

            <div className="space-y-1">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    {t('username')}
                </label>
                <div className="mt-1">
                    <input
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        required
                        value={username}
                        onChange={handleUserNameInput}
                        ref={usernameRef}
                        className="custom-input form-input bg-transparent"
                    />
                </div>
                <p ref={errRef} className={error ? "errmsg" : "offscreen"}
                   aria-live="assertive">{error.name}</p>
            </div>

            <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('email address')}
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={handleEmailInput}
                        className="custom-input form-input bg-transparent"
                    />
                </div>
                <p ref={errRef} className={error ? "errmsg" : "offscreen"}
                   aria-live="assertive">{error.email}</p>
            </div>

            <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    {t('password')}
                </label>
                <div className="mt-1">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handlePwdInput}
                        value={password}
                        autoComplete="current-password"
                        required
                        className="custom-input form-input bg-transparent"
                    />
                </div>
                <p ref={errRef} className={error ? "errmsg" : "offscreen"}
                   aria-live="assertive">{error.password}</p>
            </div>
            <div className="space-y-1">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    {t('confirm password')}
                </label>
                <div className="mt-1">
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={handleConfirmPwdInput}
                        value={confirmPassword}
                        required
                        className="custom-input form-input bg-transparent"
                    />
                </div>
                <p ref={errRef} className={error.password_confirmation ? "errmsg" : "offscreen"}
                   aria-live="assertive">{error.password_confirmation}</p>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 form-checkbox  text-primary transition   focus:ring-0 focus:ring-offset-0 rounded"
                    />
                    <label htmlFor="remember-me" className="ms-2 block text-sm text-gray-900">
                        {t('remember me')}
                    </label>
                </div>

                <div className="text-sm">
                    <Link to="/" className="font-medium first-letter:capitalize hover:text-primary">
                        {t('forgot your password?')}
                    </Link>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full flex first-letter:capitalize justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary  hover:bg-dark transition "
                >
                    {t('sign in')}
                </button>
            </div>
        </form>

    )
    return (<div className="flex-1 flex flex-col justify-center py-9 px-4 sm:px-6 lg:flex-none lg:ps-0 ">
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className={``}>
                    <img className="h-12 inline-block w-auto" src="favicon.svg" alt="Beatak logo"/>
                    <h2 className="ms-3 text-3xl font-extrabold inline-block align-middle text-gray-900">{t('register')}</h2>
                </div>

                <div className="mt-8 space-y-4">
                    <SocialLogin/>
                    <Separator text={t('or continue with')}/>
                    <div className="mt-6">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterForm
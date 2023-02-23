import {useRef, useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {setCredentials} from './authSlice'
import {useLoginMutation} from './authApiSlice'
import {useTranslation} from "react-i18next";
import Separator from "../../app/components/common/Separator";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
    const {t, i18n} = useTranslation('register');

    const userRef = useRef()
    const errRef = useRef()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(Error())
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setError('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({email, password}).unwrap()
            dispatch(setCredentials({...userData.data}))
            setEmail('')
            setPassword('')
            navigate('/')
        } catch (err) {
            if (err.originalStatus === 400) {
                setError('Missing email or Password');
            } else if (err.originalStatus === 401) {
                setError('Unauthorized');
            } else {
                setError(err);
            }
            errRef.current.focus();
        }
    }
    const handleUserInput = (e) => setEmail(e.target.value)

    const handlePwdInput = (e) => setPassword(e.target.value)

    const content = (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <p ref={errRef} className={error ? "errmsg" : "offscreen"}
                   aria-live="assertive">{error.data?.error}</p>

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
                        ref={userRef}
                        value={email}
                        onChange={handleUserInput}
                        className="custom-input form-input bg-transparent"
                    />
                </div>
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
            <div>
                <div className={`inline-block`}>
                    <img className="h-12 w-auto" src="favicon.svg" alt="Beatak logo"/>
                </div>
                <div className=" inline-block ms-6 ">
                    <h2 className="text-3xl font-extrabold inline-block text-gray-900">{t('sign in')}</h2>
                    <p className="mt-2 text-sm text-gray-600 ">
                        {t('or')}{' '}
                        <a href="#" className="font-medium text-primary dark:hover:text-light">
                            {t(`join us if you haven't yet!`)}
                        </a>
                    </p>
                </div>

            </div>

            <div className="mt-8 space-y-4">
                <SocialLogin/>
                <Separator text={t('or continue with')}/>
                <div className="mt-6">
                    {content}
                </div>
            </div>
        </div>
    </div>)
}
export default LoginForm
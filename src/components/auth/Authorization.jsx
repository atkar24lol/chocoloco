import google_image from '../../assets/google.png'
import facebook_image from '../../assets/facebook.png'
import { auth, provider, providerFacebook } from '../../app/firebase'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import module from "./Authorization.module.scss"
import Logo from "../../assets/logo-modal.svg"
import Facebook from '../../assets/facebook.svg'
import Google from '../../assets/google-logo.svg'
import Apple from '../../assets/apple-logo.svg'

const Authorization = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    async function signInWithGoogle() {
        try {
            await signInWithPopup(auth, provider)
            props.closeModal({ type: "modal", active: "false" })
        } catch (error) {
            console.log(error)
        }
    }

    async function signInWithFacebook() {
        try {
            await signInWithPopup(auth, providerFacebook)
            props.closeModal({ type: "modal", active: "false" })
        } catch (error) {
            console.log(error)
        }
    }

    async function signIn(e) {
        e.preventDefault()
        try {
            setError(false)
            await signInWithEmailAndPassword(auth, login, password)
        } catch (error) {
            setError(true)
        }
    }

    function inputLogin(e) {
        setLogin(e.target.value)
    }

    function inputPassword(e) {
        setPassword(e.target.value)
    }

    return (<div className={module.form_modal}>
        <div className={module.left_side}><img src={Logo} alt="" /></div>
        <div className={module.right_side}>
            <div className={module.pokahz}>
                <div className="title-modal">Вход</div>
                <div className='error' style={{
                    display: (error) ? 'block' : 'none', color: 'red'
                }}>
                    Такого пользователя не существует, проверьте введеный логин и пароль
                </div>
                <form onSubmit={signIn}>
                    <div className={module.input_box}>
                        <label className='label-input' htmlFor="login">E-mail</label>
                        <input type="text" name="login" placeholder="Введите e-mail" onChange={inputLogin} />
                    </div>
                    <div className={module.input_box}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" placeholder="Введите пароль" onChange={inputPassword} />
                    </div>
                    <div>
                        <label htmlFor="login"></label>
                        <input type="submit" value="Войти" />
                    </div>
                    <div>
                        <img style={{
                            maxWidth: '100%',
                            width: '32px',
                            marginTop: '16px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            cursor: 'pointer'
                        }}
                            src={google_image}
                            alt=""
                            onClick={signInWithGoogle} />
                    </div>
                </form>
            </div>
        </div>
    </div>)

};

export default Authorization
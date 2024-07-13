import { SigninInput } from "@rehan_shah/medium-common"
import { useState, ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
import Header from '../components/Header'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function Signin() {
    const [input, setInputs] = useState<SigninInput>({
        username: "",
        password: ""
    })
    const navigate=useNavigate()
    async function handleSubmit() {
        if(input.password.length<6){
            alert("Password must be atleast 6 characters long")
        }
        try {
            const response =await axios.post(`${BACKEND_URL}/api/v1/user/signin`,input)
            console.log(response);
            
            if(response.status===200){
                toast.success("Signed in successfully")
                localStorage.setItem('token',response.data.jwt)
                localStorage.setItem('name',response.data.user)
                setInputs({
                    username: "",
                    password: ""
                })
                navigate('/blogs')
            }
            else{
                toast.error("Invalid credentials")
            }
        } catch (error) {
            toast.error("Invalid credentials")
        }
    }
    return (
        <>
        <Header/>
        <div className="relative bg-white overflow-hidden ">
            <div className="relative z-10 flex flex-wrap -m-6 bg-gradient-to-b from-blue-500 to-white">
                <div className="w-full md:w-1/2 p-5 ">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="md:max-w-lg mx-auto pt-16 md:pb-32">
                                    <a className="mb-28 inline-block" href="#">
                                        <img src="flaro-assets/logos/flaro-logo-black-xl.svg" alt="" />
                                    </a>
                                    <h2 className="mb-32 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">Sign in and start reading & creating today.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-8 bg-slate-200 h-screen">
                    <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
                        <form className="md:max-w-lg mx-auto">
                        <div className="flex flex-wrap justify-between mb-4">

                            <div className=" w-full">
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-700 font-medium">Create an account <Link className="text-purple-700 hover:text-purple-900" to={'/signup'}>Sign Up
                                    </Link></p>
                                </div>
                            </div>
                        </div>
                            <LabelledInput label="Email *" placeholder="Enter your email" type="text" onChange={(e) => setInputs({
                                ...input,
                                username: e.target.value
                            })} />
                            <LabelledInput label="Password *" placeholder="Enter your password" type="password" onChange={(e) => setInputs({
                                ...input,
                                password: e.target.value
                            })} />
                            <div className="flex flex-wrap justify-between -m-2 mb-4">
                                <div className="w-auto p-2">
                                    <div className="flex items-center">
                                        <input className="w-4 h-4" id="default-checkbox" type="checkbox" value="" />
                                        <label className="ml-2 text-sm text-gray-900 font-medium" htmlFor="default-checkbox">Remember Me</label>
                                    </div>
                                </div>
                                <div className="w-auto p-2"><a className="text-sm text-indigo-600 hover:text-indigo-700 font-medium" href="#">Forgot Password?</a></div>
                            </div>
                            <button onClick={handleSubmit} className="mb-9 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

interface LabelledInputProps {
    label: string
    placeholder: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputProps) {
    return (
        <label className="block mb-4">
            <p className="mb-2 text-gray-900 font-semibold leading-normal">{label}</p>
            <input className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" type={type} placeholder={placeholder} onChange={onChange} />
        </label>
    )
}

export default Signin
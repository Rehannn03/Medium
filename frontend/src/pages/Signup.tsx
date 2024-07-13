import { SignupInput } from "@rehan_shah/medium-common"
import { ChangeEvent, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
import Alert from '../components/Alert.tsx'
import Header from "../components/Header.tsx"
import { toast } from "react-toastify"
import 'react-toastify/ReactToastify.css';
function Signup() {
    const navigate=useNavigate()
    const [input, setInput] = useState<SignupInput>({
        username: "",
        password: "",
        name: ""
    })

    async function handleSubmit() {
        if(input.password.length<6){
            return <Alert message="Password must be atleast 6 characters long" />
        }
        try {
            const response =await axios.post(`${BACKEND_URL}/api/v1/user/signup`,input)
            console.log(response);
            
            if(response.status===200){
                toast.success("Signed up successfully")
                localStorage.setItem('token',response.data.jwt)
                localStorage.setItem('name',response.data.user)
                setInput({
                    username: "",
                    password: "",
                    name: ""
                })
                navigate('/blogs')
            }
            else{
                toast.error(`${response.data.message}`)
            }
        } catch (error) {
            toast.error("Error in signing up")
        }
    }
    return (
        <section className="relative bg-white overflow-hidden">
            <Header/>
            <div className="relative z-10 flex flex-wrap -m-6 h-full">
                <div className="w-full md:w-1/2  bg-gradient-to-tr from-indigo-400 via-purple-300 to-pink-400 p-8 rounded-lg shadow-2xl">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="md:max-w-lg mx-auto pt-16 md:pb-32">
                                    <a className="mb-28 inline-block" href="#">
                                        <img src="flaro-assets/logos/flaro-logo-black-xl.svg" alt="" />
                                    </a>
                                    <h2 className="mb-32 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">Create an account & get started.</h2>
                                    <h3 className="mb-9 text-xl font-bold font-heading leading-normal">Why should you join us?</h3>
                                    <ul className="md:max-w-xs">
                                        <li className="mb-5 flex flex-wrap">
                                            <svg className="mr-2" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#4F46E5"></path>
                                            </svg>
                                            <span className="flex-1 font-medium leading-relaxed">Over 1 <b>million</b> blogs</span>
                                        </li>
                                        <li className="mb-5 flex flex-wrap">
                                            <svg className="mr-2" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#4F46E5"></path>
                                            </svg>
                                            <span className="flex-1 font-medium leading-relaxed">Best content curated just for your love of reading.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-8 bg-slate-200 h-screen">
                    <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
                        <form className="md:max-w-lg mx-auto">
                            <LabelledInput label="Name *" placeholder="Enter your name" type="text" onChange={(e) => setInput({
                                ...input,
                                name: e.target.value
                            })} />
                            <LabelledInput label="Email *" placeholder="Enter your email" type="text" onChange={(e) => setInput({
                                ...input,
                                username: e.target.value
                            })} />
                            <LabelledInput label="Password *" placeholder="Enter your password" type="password" onChange={(e) => setInput({
                                ...input,
                                password: e.target.value
                            })} />
                            <div className="flex flex-wrap justify-between mb-4">
                                <div className="w-full">
                                    <div className="flex items-center">
                                        <input className="w-4 h-4" id="default-checkbox" type="checkbox" value="" />
                                        <label className="ml-2 text-sm text-gray-900 font-medium" htmlFor="default-checkbox">
                                            <span>By signing up, I agree to the </span>
                                            <a className="text-indigo-600 hover:text-indigo-700" href="#">Terms & Conditions </a>
                                            <span>of BlogSpot</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between mb-4">

                                <div className=" w-full">
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-700 font-medium">Already have an account? <Link className="text-purple-700 hover:text-purple-900" to={'/signin'}>Sign In
                                        </Link></p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleSubmit} className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
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
        <input className="px-4 py-3.5 w-full font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signUpInput1-1" type={type} placeholder={placeholder} onChange={onChange}

        />
    </label>
    )
}


export default Signup
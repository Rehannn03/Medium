import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { stock2, stock3, stock4, download } from '../assets'
function Home() {
    return (
        <section className="pb-12">
            <Header />
            <div className="relative container px-4 mx-auto mt-12">
                <div className="flex flex-wrap -mx-4 items-center mb-16">
                    <div className="w-full lg:w-1/2 px-4 mb-24 lg:mb-0">
                        <div className="max-w-md md:max-w-lg mx-auto xl:mx-0">
                            <div className="text-sm mb-2 font-semibold uppercase">
                                <span>JUST</span>
                                <span className="text-green-500"> START WRITING</span>
                            </div>
                            <h1 className="font-heading text-4xl md:text-5xl mb-6">Join Our Community of Passionate Writers</h1>
                            <p className="text-lg leading-8 mb-10">Share your thoughts, experiences, and creativity with a vibrant community.</p>
                        
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="grid grid-cols-2 gap-4">
                            <img className="w-full h-auto rounded-lg" src={download} alt="" />
                            <img className="w-full h-auto rounded-lg" src={stock2} alt="" />
                            <img className="w-full h-auto rounded-lg" src={stock3} alt="" />
                            <img className="w-full h-auto rounded-lg" src={stock4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home
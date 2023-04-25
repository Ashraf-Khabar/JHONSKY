import React from 'react';
import logo from '../../Img/whatWeDo.jpg';
import './WhatWeDo.css'; // Add the path to your CSS file
import logo_jhonsky from '../../Img/jhonsky_logo.png'
const WhatWeDo = () => {
    return (
        <div data-theme="luxury" className="hero min-h-screen bg-background"> {/* Add the "bg-background" class for the background */}
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} className="max-w-sm mask mask-squircle rounded-lg shadow-2xl" />
                <div>
                    <center>
                        <h1 className="text-7xl font-bold text-gray-50">WHAT WE DO</h1>
                    </center>
                    <br /><br />
                    <p className="py text-2xl text-gray-50">
                        WE ACCOMPANY YOU IN
                    </p>
                    <p className="py text-2xl text-gray-50">
                        YOUR DIGITAL
                    </p>
                    <p className="py text-2xl text-gray-50">
                        TRANSFORMATION
                    </p>
                    <br /><br />
                    <p className="text-1xl text-gray-50">
                        Jhonsky is a digital marketing
                        agency specialized in the content
                        creation , management and paid ads
                        Our core business is to accompany
                        companies and institutions in the
                        implementation of a digital strategy
                        adapted to new media, in order to
                        create innovative digital solutions.
                    </p>
                    <br /><br />

                    <div class="p-8">
                       
                        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                            <div class="p-4">
                                <div class="flex-col  flex justify-center items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#" class="relative block">
                                            <img alt="profil" src={logo_jhonsky} class="mx-auto" />
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="flex-col  flex justify-center items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#" class="relative block">
                                            <img alt="profil" src="/images/person/5.jpg" class="mx-auto object-cover rounded-full h-20 w-20 " />
                                        </a>
                                    </div>
                                    <div class="mt-2 text-center flex flex-col">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;

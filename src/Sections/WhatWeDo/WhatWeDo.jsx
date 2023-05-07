import React from 'react';
import logo from '../../Img/whatWeDo.jpg';
import './WhatWeDo.css'; // Add the path to your CSS file
import logo_jhonsky from '../../Img/jhonsky_logo.png'
import cs from '../../Img/CS.png'
import as from '../../Img/AS.png'
import mr from '../../Img/MR.png'

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
                        <p class="text-3xl font-bold text-center text-gray-800 dark:text-white">
                            Our clients
                        </p>
                        <div class="flex flex-col items-center md:flex-row justify evenly">
                            <div class="p-4">
                                <div class="mb-4 text-center opacity-90">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src={logo_jhonsky} class="mx-auto h-32 w-32 " />
                                    </a>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="mb-4 text-center opacity-90">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src={cs} class="mx-auto h-52 w-52 " />
                                    </a>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="mb-4 text-center opacity-90">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src={as} class="mx-auto h-40 w-40 " />
                                    </a>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="mb-4 text-center opacity-90">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src={mr} class="mx-auto h-60 w-60 " />
                                    </a>
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








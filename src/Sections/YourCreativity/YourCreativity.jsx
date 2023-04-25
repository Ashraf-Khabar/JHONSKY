import React, { useEffect } from 'react';
import logo from '../../Img/FirstOne.jpg';
import './YourCreativity.css';

const YourCreativity = () => {
    useEffect(() => {
        const heroContent = document.querySelector('.hero-content');
        const options = {
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, options);
        observer.observe(heroContent);
    }, []);

    return (
        <div data-theme="luxury" className="hero min-h-screen "> 
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} className="max-w-sm mask mask-squircle rounded-lg shadow-2xl rounded-full" />
                <div>
                    <h1 className="text-7xl font-bold text-gray-50">UNLEASH</h1>
                    <h1 className="text-7xl font-bold text-gray-50">YOUR</h1>
                    <h1 className="text-7xl font-bold text-gray-50">CREATIVITY</h1>
                    <p className="py-7 text-2xl text-gray-50">
                        The Ultimate Destination for Innovative Solutions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default YourCreativity;

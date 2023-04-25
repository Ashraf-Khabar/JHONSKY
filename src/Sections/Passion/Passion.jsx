import React, { useEffect } from 'react';
import logo from '../../Img/Passion.jpg';
import './Passion.css'; // Add the path to your CSS file

const Passion = () => {
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
        <div data-theme="luxury" className="hero min-h-screen bg-background"> {/* Add the "bg-background" class for the background */}
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} className="max-w-sm mask mask-squircle rounded-lg shadow-2xl rounded-full" />
                <div>
                    <h1 className="text-7xl font-bold text-gray-50">PASSION</h1>
                    <h1 className="text-7xl font-bold text-gray-50">AND</h1>
                    <h1 className="text-7xl font-bold text-gray-50">EXPERTISE</h1>
                    <p className="py-7 text-2xl text-gray-50">
                        What drive us to do the impossible !
                    </p>
                    <p className="text-1xl text-gray-50">
                        Building on these initial successes, we are
                        committed to going further by accompanying
                        you in your digital strategy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Passion;

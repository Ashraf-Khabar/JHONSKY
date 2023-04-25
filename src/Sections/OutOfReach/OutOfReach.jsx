import React, { useEffect } from 'react';
import logo from '../../Img/Reach.jpg';
import './OutOfReach.css'; // Add the path to your CSS file

const OutOfReach = () => {
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
        <div data-theme="luxury" className="hero min-h-screen"> {/* Add the "bg-background" class for the background */}
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} className="max-w-sm mask mask-squircle rounded-lg shadow-2xl rounded-full" />
                <div>
                    <h1 className="text-7xl font-bold text-gray-50">NOTHING IS</h1>
                    <h1 className="text-7xl font-bold text-gray-50">OUT OF</h1>
                    <h1 className="text-7xl font-bold text-gray-50">REACHE</h1>
                    <p className="py-7 text-2xl text-gray-50">
                        The Ultimate Destination for Innovative Solutions.
                    </p>
                    <p className="text-1xl text-gray-50">
                        The magic starts with a young and motivated Team
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OutOfReach;

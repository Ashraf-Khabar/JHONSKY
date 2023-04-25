import logo from '../Img/FirstOne.jpg'

const YourCreativity = () => {

    // how to add shadow in the image with a specific color using tailwind css ?
    return (
        <div data-theme="luxury" className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} className="max-w-sm rounded-lg shadow-2xl rounded-full" />
                <div>
                    <h1 className="text-7xl font-bold text-gray-50">NOTHING IS</h1>
                    <h1 className="text-7xl font-bold text-gray-50">OUT OF</h1>
                    <h1 className="text-7xl font-bold text-gray-50">REACHE</h1>
                    <p className="py-7 text-2xl text-gray-50">
                        Achieve your wildest business goals and take your brand to new heighs
                    </p>
                    <p className="text-1xl text-gray-50">
                        The magic starts with a young and motivated Team
                    </p>
                </div>
            </div>
        </div>
    )

}

export default YourCreativity; 
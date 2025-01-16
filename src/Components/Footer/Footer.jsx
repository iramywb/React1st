import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#2c3e50] text-white w-full">
                <div className="flex flex-col md:flex-row p-10">
                    <div className="section">
                        <div className="flex flex-col justify-center items-center">
                            <h3>location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="section">
                        <h3>AROUND THE WEB</h3>
                        <ul className="flex justify-center md:justify-start space-x-4">
                            <li>
                                <div
                                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#2c3e50] cursor-pointer"
                                >
                                    <i className="fab fa-facebook"></i>
                                </div>
                            </li>
                            <li>
                                <div
                                    href="#"
                                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#2c3e50] cursor-pointer"
                                    aria-label="Twitter"
                                >
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </li>
                            <li>
                                <div
                                    href="#"
                                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#2c3e50] cursor-pointer"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                            </li>
                            <li>
                                <div
                                    href="#"
                                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#2c3e50] cursor-pointer"
                                    aria-label="Website"
                                >
                                    <i className="fas fa-globe"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                <div className="p-6 bg-[#1a252f] text-white text-center">
                    <small>Copyright © Your Website 2021</small>
                </div>
            </footer>
        </>
    )
}

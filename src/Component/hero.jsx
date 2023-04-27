// import logo from './logo.svg';
import '../CSS/hero.css';
import car from '../Images/uk.jpeg'
// import Typewriter from 'typewriter-effect';
// import '../boxicons'

import 'boxicons'

function Hero() {
    return (
        <div className="hero">
            <div className='flex-item'>

                <div className='discription'>
                    <p className='para'>WELCOME TO MY PORTFOLIO</p>
                    <h1 className='head'>Hi, I'm <span className='aqua'>Ujjwal Katiyar</span></h1>
                    <p className='p'>I'm a skilled computer programmer with expertise in web development and software development. I have gained a strong foundation in a programming languages C++. </p>

                    <div className='btn-1'>
                        <button className='btn'>RESUME</button>
                        <button className='btn'>CALL</button>

                    </div>

                    <div className='social-media'>
                        <div><a className='border' href="#"><box-icon color='white' name='linkedin' type='logo'  ></box-icon></a></div>
                        <div><a className='border' href="#"><box-icon color='white' name='github' type='logo'  ></box-icon></a></div>
                        <div><a className='border' href="#"><box-icon color='white' name='instagram' type='logo'  ></box-icon></a></div>
                        <div><a className='border' href="#"><box-icon color='white' name='facebook' type='logo'  ></box-icon></a></div>
                        <div><a className='border' href="#"><box-icon color='white' name='twitter' type='logo'  ></box-icon></a>
                        </div>
                    </div>


                    {/* <Typewriter
                        options={{
                            strings: ['Hello', 'World'],
                            autoStart: true,

                        }}
                    /> */}
                </div>



                <div className='img-1'>
                    <img src="https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Image-Background.png" className="img-2" />
                </div>
            </div>


        </div>
    );
}

export default Hero;
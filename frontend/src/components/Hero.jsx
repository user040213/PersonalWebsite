
import './Hero.css'

import gl from '../assets/Opengl-logo.svg';
import cpp from '../assets/ISO_C++_Logo.png';
import pyth from '../assets/Python-logo.png';
import sdl from '../assets/SDL_Logo.svg';
import rct from '../assets/react.svg';
import jscript from '../assets/JavaScript-logo.png';
import nodejs from '../assets/node-js.png';

export const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className='main-text'>
                <div className='greeting'>HELLO WORLD?</div>
                <div className='logos'>
                    <div className='scroller'>
                        <img src={cpp}/>
                        <img src={pyth}/>
                        <img src={gl}/>
                        <img src={sdl}/>
                        <img src={rct}/>
                        <img src={jscript}/>
                        <img src={nodejs}/>
                    </div>
                    <div className='scroller'>
                        <img src={cpp}/>
                        <img src={pyth}/>
                        <img src={gl}/>
                        <img src={sdl}/>
                        <img src={rct}/>
                        <img src={jscript}/>
                        <img src={nodejs}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
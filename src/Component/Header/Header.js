import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='bg-red'>
                <div className='bg-zinc-800 py-3 grid grid-cols-8 text-xl align-middle'>
                    <div className='col-start-2'>
                        <p className='text-4xl text-red-500 font-mono'>Foodie</p>
                    </div>
                    <div className='text-white content-center col-start-6 col-end-8 grid grid-cols-3'>
                        <div className=''>
                            <CustomLink to='/'>Home</CustomLink>
                        </div>

                        <div>
                            <CustomLink to='/about'>About</CustomLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
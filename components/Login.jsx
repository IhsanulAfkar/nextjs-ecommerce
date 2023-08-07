import React from 'react'

const Login = ({ setShowLogin }) => {
    return (
        <div className='fixed bg-gray-500 bg-opacity-50 transition-opacity w-full h-full z-10 '>
            <form action='/login' method='post' className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded p-4 lg:p-6 flex flex-col md:flex-row gap-2 md:gap-4 w-[80%] lg:w-auto'>

                <div className='absolute top-0 right-0 hover:cursor-pointer' onClick={() => setShowLogin(false)}>
                    <img src="assets/icons/close.png" className='w-[40px] p-2' />
                </div>
                <div className='basis-1/2'>
                    <img src="assets/images/login.png" alt="" className='' />
                </div>
                <div className='basis-1/2 flex flex-col gap-4 justify-between lg:px-20 text-center md:text-left'>
                    <div className='basis-2/5'>
                        <p className='font-normal text-2xl md:text-3xl '>Login to Exclusive</p>
                        <p className='md:mt-4 hidden md:block'>Enter your details below</p>
                    </div>
                    <div className='basis-2/5 flex flex-col gap-4'>
                        <input id='username' name='username' className='appearance-none focus:outline-none transition-colors ease-in-out duration-300 focus:border-blue-600 border-b border-black p-1 w-full' type="text" placeholder='username or email' />
                        <input id='password' name='password' className='appearance-none focus:outline-none transition-colors ease-in-out duration-300 focus:border-blue-600 border-b border-black p-1 w-full' type="password" placeholder='password' />
                    </div>
                    <div className='basis-1/5 flex items-center justify-between'>
                        <button type="submit" className='bg-[#DB4444] px-8 py-2 text-white rounded-sm'>Log in</button>
                        <div>
                            <a href="" className='text-red-400'>Forgot Password?</a>
                        </div>
                    </div>

                </div>
            </form>
        </div >
    )
}

export default Login
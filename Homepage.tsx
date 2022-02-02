import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// import '../styles/mdstylse.css'

import { BeakerIcon } from '@heroicons/react/solid'
const Homepage = () => {
    const [makedown, setmakedown] = useState('');
    return <div className="px-5 py-2  rounded-md h-full w-full">
        <div className="flex justify-between">
            <h1 className='font-bold text-xl'>
                Markdown Editor
            </h1>

            <div className='h-6 w-6 rounded-full bg-black'>

            </div>
            {/* //todo: Add Navigation bar */}
        </div>
        <div>
            {/* //todo: Editing tools*/}

        </div>
        <main className='flex h-screen w-full gap-1'>
            <section className=' w-full h-full rounded-md border-purple-600 '>
                <h1 className=' bg-gray-300 rounded-t-md font-semibold text-blue-500 text-2xl'>
                    Write
                </h1>
                <section>
                    <div>
                        {/* //@ts-ignore */}
                        <textarea className='h-screen w-full' value={makedown} placeholder='type / comnand' onChange={(e) => {
                            setmakedown(e.target.value)
                        }}></textarea>
                    </div>
                </section>
                {/* ///todo: Typing section */}
            </section>
            <section className=' h-full w-full rounded-md     border-orange-500 '>
                <h1 className='font-semibold text-blue-500 rounded-t-md text-2xl bg-gray-300'>
                    Preview
                </h1>
                <section>
                    <ReactMarkdown>
                        {makedown}
                    </ReactMarkdown>
                </section>
                {/* //todo: Preview section */}
            </section>
        </main>
    </div>;
};

export default Homepage;

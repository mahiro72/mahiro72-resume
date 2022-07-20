import React from 'react';

type Props = {
    text: string;
}

const SecTitle:React.FC<Props> = ({text}) => {
    return (
        <div className='flex my-4'>
            <div className='w-2 h-8 bg-gray-400 mr-3'></div>
            <p className='text-2xl'>{text}</p>
        </div>
    )
}

export default SecTitle;
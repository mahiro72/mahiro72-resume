import React from 'react'

type Prop = {
    func:React.MouseEventHandler<HTMLButtonElement>
    text:string;
}
const SecButton:React.FC<Prop> = ({func,text}) => {
  return (
    <>
        <button onClick={func} className="text-gray-400" >
            {text}
        </button>
    </>
  )
}

export default SecButton
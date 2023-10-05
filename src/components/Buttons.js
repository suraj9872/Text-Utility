import React from 'react'

export default function Buttons(props) {
    const NewYorkfunc=()=>{
       console.log("onchange");
    }
    return (
        <>
            <div className='p'>
                <button type="button" className="btn btn-primary btn-sm radius color" onChange={NewYorkfunc()}>New York</button>
            </div>
            <div className='p'>
                <button type="button" className="btn btn-primary btn-sm radius color">Mumbai</button>
            </div>
            <div className='p'>
                <button type="button" className="btn btn-primary btn-sm radius color">Paris</button>
            </div>
            <div className='p'>
                <button type="button" className="btn btn-primary btn-sm radius color">London</button>
            </div>
        
        </>
    )
}

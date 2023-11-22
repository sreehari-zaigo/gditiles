import React from 'react'

const Layout = ({heading,children}) => {
    return (
        <div>
            <h4 className='text-slate-950 text-[1.3rem] font-medium mb-1.5'>{heading}</h4>
            <div className='border px-6 py-3 rounded-md'>
                {children}
            </div>
        </div>
    )
}

export default Layout;
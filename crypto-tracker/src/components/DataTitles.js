import React from 'react'

import './DataTitles.css'

const DataTitles = () => {
    return (
        <div className='dataTitle-main-container'>
            <div className='dataTitle-container'>
                <p className='dataTitle-title'>price</p>
                <p className='dataTitle-title'>volume</p>
                <p className='dataTitle-title'>change</p>
                <p className='dataTitle-title'>market cap</p>
            </div>   
        </div>
    )
}

export default DataTitles

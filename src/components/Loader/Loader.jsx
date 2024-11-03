import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        }}>
            <ClipLoader color="#36d7b7" speedMultiplier={2} size={50} />
        </div>
    )
}

export default Loader
import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefalutComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    )
}

export default DefalutComponent
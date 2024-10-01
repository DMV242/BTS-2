import React, { Children } from 'react'

function layout({ children }) {
    return (
        <body>
            {children}
        </body>
    )
}

export default layout
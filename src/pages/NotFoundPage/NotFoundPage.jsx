import React from 'react'

const NotFoundPage = () => {
    return (
        <div className="page-not-found">
            <h1>404: Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Try checking the URL or going back to the previous page.</p>
            <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    )
}

export default NotFoundPage
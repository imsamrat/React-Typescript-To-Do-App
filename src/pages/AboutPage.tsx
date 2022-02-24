import React from "react";
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Information page</h1>
            <p>Info</p>
            <button className="btn" onClick={() => history.push('/')}>Back to to-do list</button>
        </>
    )
}

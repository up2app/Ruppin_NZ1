import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Routes/Navigation'

export default function MainLayout() {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Navigation />
            </main>
            <footer>

            </footer>
        </>
    )
}

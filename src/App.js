import React from 'react'
import './App.css'
import Player from './player/Player'

export default function App() {
    return (
        <div className="app">
            <div className="app-header">
            </div>
            <div className="app-content">
                <Player />
            </div>
        </div>
    )
}

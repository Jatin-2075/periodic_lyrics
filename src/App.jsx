import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Landing from './assets/Landing_page'
import About from './assets/components/function/About_project'
import Search from './assets/components/function/Search_Bar'
import Synced_lyrics from './assets/components/function/synced_lyrics'

function App() {
    const router = createBrowserRouter([
      {
        path : '/',
        element : <> <Landing/><About/></>,
      },
      {
        path : '/Search_Bar',
        element : <><Landing/><Search/></>
      },
      {
        path :'/Synced_lyrics',
        element : <><Landing/><Synced_lyrics/></>
      },
    ])
    return <RouterProvider router={router}/>
}

export default App

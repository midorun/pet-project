import React, { FC, useState } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

import About from 'pages/About';
import Home from 'pages/Home';

import '../../index.scss'


const router = createBrowserRouter([{
  path: '', element: <Home/>,

}, {path: '/about', element: <About/>}])

export type AppProps = {}

const App: FC<AppProps> = props => {
  const {} = props

  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(prevState => prevState + 1)
  }

  return (
    <div className={'app'}>
     <RouterProvider router={router}/>
    </div>
  )
};

export default App

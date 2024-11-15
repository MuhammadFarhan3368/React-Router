import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Componenets/Home/Home'
import About from './Componenets/About/About'
import Contact from './Componenets/Contact/Contact'
import Layout from './Layout/Layout'
import User from './Componenets/User/User'
import Github, { GithubInfo } from './Componenets/Github/Github'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout /> ,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path : 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route 
    loader={GithubInfo}
    path='github' 
    element={<Github/>}
    />


  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

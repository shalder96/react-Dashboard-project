import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Loader from './components/Loader.jsx'
import Team from './components/team'
import Contacts from './components/contacts/index.jsx'
import Invoices from './components/invoices/index.jsx'
import Form from './components/form/index.jsx'
import Dashboard from './pages/Dashboard.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />}/>
      <Route path='team' element={<Team/>}/>
      <Route path='contacts' element={<Contacts />}/>
      <Route path='invoices' element={<Invoices />}/>
      <Route path='form' element={<Form />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)

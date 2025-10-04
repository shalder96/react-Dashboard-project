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
import Calendar from './components/calendar/index.jsx'
import FAQ from './components/faq/index.jsx'
import BarChart from './components/bar/index.jsx'
import PieChart from './components/pie/index.jsx'
import LineChart from './components/line/index.jsx'
import GeographyChart from './components/geo/index.jsx'
import Dashboard from './pages/Dashboard.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />}/>
      <Route path='team' element={<Team/>}/>
      <Route path='contacts' element={<Contacts />}/>
      <Route path='invoices' element={<Invoices />}/>
      <Route path='form' element={<Form />}/>
      <Route path='calendar' element={<Calendar />}/>
      <Route path='faq' element={<FAQ />}/>
      <Route path='bar' element={<BarChart />}/>
      <Route path='pie' element={<PieChart />}/>
      <Route path='line' element={<LineChart />}/>
      <Route path='geography' element={<GeographyChart />} />
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

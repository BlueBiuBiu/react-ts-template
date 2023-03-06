import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Demo = lazy(() => import('@/views/demo'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/demo" />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes

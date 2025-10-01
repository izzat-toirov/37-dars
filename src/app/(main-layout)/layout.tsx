import React, { ReactNode } from 'react'
import Header from '../../components/header/Header'

const MainLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default MainLayout
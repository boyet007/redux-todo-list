import React from 'react'
import Footer from './Footer'
import TambahPekerjaan from '../containers/TambahPekerjaan'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <TambahPekerjaan />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
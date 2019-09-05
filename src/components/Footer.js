import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Tampilkan: </span>
    <FilterLink filter={VisibilityFilters.TAMPIL_SEMUA}>Semua</FilterLink>
    <FilterLink filter={VisibilityFilters.TAMPIL_AKTIF}>Aktif</FilterLink>
    <FilterLink filter={VisibilityFilters.TAMPIL_SELESAI}>Selesai</FilterLink>
 
  </div>
)

export default Footer
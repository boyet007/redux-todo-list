import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Tampilkan: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>Semua</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Aktif</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Selesai</FilterLink>
  </div>
)

export default Footer
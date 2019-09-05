import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.TAMPIL_SEMUA, action) => {
  switch (action.type) {
    case 'SET_FILTER_VISIBLE':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
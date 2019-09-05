let nextTodoId = 6
export const tambahPekerjaan = text => ({
  type: 'TAMBAH_PEKERJAAN',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_FILTER_VISIBLE',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_PEKERJAAN',
  id
})

export const VisibilityFilters = {
  TAMPIL_SEMUA: 'TAMPIL_SEMUA',
  TAMPIL_AKTIF: 'TAMPIL_AKTIF',
  TAMPIL_SELESAI: 'TAMPIL_SELESAI',
}
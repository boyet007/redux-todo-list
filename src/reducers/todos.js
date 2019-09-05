const todos = (state = [
  {id: 1, text: 'menyapu', completed: false},
  {id: 2, text: 'membuat PR', completed: false},
  {id: 3, text: 'membersihkan halaman', completed: true},
  {id: 4, text: 'makan sore', completed: false},
  {id: 5, text: 'membeli bawang bombai', completed: false},
], action) => {
   switch (action.type) {
      case 'TAMBAH_PEKERJAAN':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_PEKERJAAN':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default todos
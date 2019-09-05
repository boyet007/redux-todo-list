import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.TAMPIL_SEMUA:
      return todos
    case VisibilityFilters.TAMPIL_AKTIF:
      return todos.filter(t => !t.completed)
    case VisibilityFilters.TAMPIL_SELESAI:
      return todos.filter(t => t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (TodoList)
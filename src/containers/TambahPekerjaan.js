import React from 'react'
import { connect } from 'react-redux'
import { tambahPekerjaan } from '../actions'

const TambahPekerjaan = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(tambahPekerjaan(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Tambah Pekerjaan</button>
      </form>
    </div>
  )
}

export default connect()(TambahPekerjaan)
import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';


function Search() {

  const [ input, setInput ] = useState('')

  const search = e => {
    e.preventDefault()

    console.log ('submit')
  }

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div className='search__buttons'>
        <button type='submit' onClick={search} variant='outlined'>Google Search</button>
        <button variant='outlined'>Im Feeling Lucky</button>

        
      </div>
    </form>
  )
}

export default Search
import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from "../stateProvider";
import reducer, { actionTypes } from "../reducer";


function Search({ hideButtons = false }) {
  

  const [input, setInput] = useState('')
  const navigate = useNavigate();

  const search = e => {
    e.preventDefault()

    console.log('submit')

   

    
    navigate(`/search`);



  }

  return (
    <form className="search">
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className='search__buttons'>
          <button type='submit' onClick={search} variant='outlined'>Google Search</button>
          <button variant='outlined'>Im Feeling Lucky</button>
        </div>

      ) : (
        <div className='search__buttons'>
          <button className='searchButtonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</button>
          <button className='searchButtonsHidden' variant='outlined'>Im Feeling Lucky</button>
        </div>
      )}


    </form>
  )
}

export default Search
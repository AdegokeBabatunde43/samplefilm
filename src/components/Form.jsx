import React, {useState, useContext} from 'react'
import { MovieContext } from '../MovieContext'

const Form = () => {
    const {setSearchKey}=useContext(MovieContext)
    const [watch, setWatch]=useState('')
const handleSubmit= (e) => {
e.preventDefault()
setSearchKey(watch)
setWatch('')

}
  return (
    <div>
        <form action=""onSubmit={handleSubmit}>
            <input type="text" placeholder='search...' required value={watch} onChange={(e) => setWatch(e.target.value)} />


            <input type="submit" value='Submit' />
        </form>
      
    </div>
  )
}

export default Form

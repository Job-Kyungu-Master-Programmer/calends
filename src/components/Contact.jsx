import React, { useEffect, useState } from 'react'
import Contacts from './Contacts'
import { CiSearch } from "react-icons/ci"
import Base from '../Base/Base'
import Select from './Select'


const Contact = () => {
  const [user, setUser] = useState([])
  const [number, setNumber] = useState('Number')
  const [age, setAge] = useState('Age')
  const [name, setName] = useState('Name')
  const [mail, setMail] = useState('Mail')
  const [filterUser, setFilterUser] = useState('')
  const [offSearch, setOffSearch] = useState(null)

  useEffect(() => {
      Base.getUser().then(response => {
          setUser(response)
      })
  },[])

  const addUser = (e) => {
      e.preventDefault()

      const userObject = {
          number: number,
          age: age,
          name: name,
          mail: mail,
          id: user.length + 1
      }
      Base.createUser(userObject).then(response => {
           setUser(user.concat(response))
           setNumber('')
           setAge('')
           setName('')
           setMail('')
      })
  } 

  return (
    <div className='contact'>
        <Select user={user}  />
        <form className='form'>
        </form>
        <div className="contact__search">
          <input onChange={e => setFilterUser(e.target.value)} type="text" className={offSearch ? 'contact__search__input' : 'contact__openSearch'} placeholder='search user' />
          <span className="contact__search__icon" onClick={() => setOffSearch(!offSearch)}>
          <CiSearch />
          </span>
        </div>
        <h3 className="contact__title">Connected users</h3>
        <Contacts user={user} filters={filterUser} setFilters={setFilterUser} />
    </div>
  )
}

export default Contact
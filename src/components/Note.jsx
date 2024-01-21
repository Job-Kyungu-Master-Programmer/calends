import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import { CiCirclePlus } from "react-icons/ci";
import Base from '../Base/Base';
import Notification from './Notification';
import Errors from './Errors';


const Note = () => {
  const [pub, setPub] = useState([])
  const [title, setTitle] = useState('')
  const [phone, setPhone] = useState('')
  const [content, setContent] = useState('')
  const [Succes, setSucces] = useState(null)
  const [msgError, setMsgError] = useState(null)
  const [image, setImage] = useState('')


    useEffect(() => {
        Base.getAll()
        .then(response => setPub(response))
    },[])

  // Add Pub
  const addPublication = (e) => {
        e.preventDefault()

        const date = new Date()
        const infosPub = {
            title: title,
            phone: phone,
            content: content,
            image: image, // Ajoutez cette ligne
            like: 0,
            hours: date.getHours(),
            minutes: date.getMinutes(),
            years: date.getUTCFullYear(),
            months: date.getMonth() + 1,
            days: date.getDate(),
            // id: pub.length + 1
        }
        Base.createPub(infosPub)
        .then(response => setPub(pub.concat(response)))
        .finally(succ => {
          setSucces('La publication a ete bien ajoutee')
            setTimeout(() => {
                setSucces(null)
              }, 4000)
        })
        setTitle('')
        setContent('')
        setPhone('')
        setImage('') // N'oubliez pas de réinitialiser l'état de l'image
  }

  // Update Like 
  const Onlikes = (id) => {
      const pubId = pub.find(p => p.id === id)
      const updateLike = {...pubId, like: pubId.like + 1}
      Base.like(id, updateLike).then(response => {
         setPub(pub.map(p => p.id === id ? response : p))
      }).catch(error => {
          setMsgError(`Une erreur s'est produite veuillez recommencer l'action!`)
          setTimeout(() => {
            setMsgError(null)
          },3000)
      })
  }

  // Ondelete 
  const onDelete = (id) => {
     const pubId = pub.filter(p => p.id !== id)
     Base.delet(id, pubId).then(response => {
        setPub(pub.map(p => p.id !== id ? p : response))
        setPub(pub.filter(p => p.id !== id))
     }).catch(error => {
      setMsgError(`Une erreur s'est produite veuillez recommencer l'action!`)
      setTimeout(() => {
        setMsgError(null)
      },3000)
     }).finally(succ => {
         setSucces('La publication bien supprimer !!')
         setTimeout(() => {
            setSucces(null)
         },2500)
     })
  }


  return (
    <div className='note'>
        <div className="note__form">
            <h3 className="note__title">Create note for user </h3>
            <form onSubmit={addPublication} className="form">
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form__input" placeholder='Ex : Deploy app' />
              <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="form__input" placeholder=' Ex: +145 0554 542 '/>
              <input type="text" value={content} onChange={e => setContent(e.target.value)} className="form__input" placeholder='Your content' />
              <input type="file" onChange={e => setImage(e.target.files[0])} />
              {console.log(image)}
              <button className="form__btn"><span>create <CiCirclePlus className='CiCirclePlus' /></span> </button>
            </form>
            <h1 className="note__title__note">Publications</h1>
            <Notes
              pub={pub}
              likes={Onlikes}
              deletes={onDelete}
            />
        </div>
        <Notification Succes={Succes} />
        <Errors msgError={msgError} />
    </div>
  )
}

export default Note
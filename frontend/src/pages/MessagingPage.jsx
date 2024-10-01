import React from 'react'
import "./MessagingPage.css"
import List from '../components/List/List'
import Chat from '../components/Chat/Chat'
import Detail from '../components/Detail/Detail'

const MessagingPage = () => {
  return (
    <div className='messagingPage'>
      <div className='container'>
        <List />
        <Chat />
        <Detail />
      </div>
    </div>
  )
}

export default MessagingPage
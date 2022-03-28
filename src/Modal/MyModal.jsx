import React from 'react'
import style from './myModal.module.scss'

const MyModal = ({onClose, children}) => {
  return (
    <div className={style.post_review} onClick={onClose}>
      <div className={style.post_modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal
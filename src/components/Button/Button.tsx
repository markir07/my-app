import React from 'react'
import styles from './Button.module.scss'

interface Props {
    name: string
    action:()=>void;
}

const Button:React.FC<Props> = ({name, action}) => {
  return (
    <button className={styles.button} onClick={()=>action()}>{name}</button>
  )
}

export default Button
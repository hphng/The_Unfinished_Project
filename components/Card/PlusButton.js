import React from 'react'
import * as AiIcons from "react-icons/ai";
import styles from "./PlusButton.module.css"

const PlusButton = () => {
  return (
      <div style={styles.PlusButton}>
          <AiIcons.AiFillPlusCircle />
    </div>
  )
}

export default PlusButton
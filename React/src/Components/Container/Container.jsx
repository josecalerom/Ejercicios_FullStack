import React from 'react'
import "./Container.scss"
import { useState } from 'react'

export const Container = ({ title, children }) => {

    const [collapse, setCollapse] = useState(false)

    const handleCollapse = () => {
        setCollapse(value => !value)
    }

  return (
    <div className="app-container">
        <div className="app-title">{title} <button onClick={handleCollapse}>{collapse ? "Show" : "Collapse"}</button></div>
        <div className={!collapse ? "app-content" : "app-content-hidden"}>{children}</div>
    </div>
  )
}

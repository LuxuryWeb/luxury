'use client'
import React from 'react'

const IframeCustom = ({ src = '' }) => {
  return (
    <iframe src={src} width="100%" height="100%" onContextMenu={e => e.preventDefault()}></iframe>
  )
}

export default IframeCustom
import React from 'react'
import logo from '../../logo.svg'
import RecursiveComponent from '../../components/Renderer/RecursiveComponent'
import { data } from '../../data/data'

function Home() {
  return (
  <RecursiveComponent data={data}/>
  )
}

export default Home
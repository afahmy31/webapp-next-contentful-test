import { Component } from 'react'
import data from './../data/person'
import PersonList from '../components/PersonList'
import {getcontent} from '../helpers/getcontent.js'

const Index = () => (  
  <div>
      <PersonList data={data} />
  </div>
)

export default Index
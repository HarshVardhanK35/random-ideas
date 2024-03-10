// import '@fortawesome/fontawesome-free/css/all.css'
import './css/style.css'

import modalFunctions from './components/Modal'
modalFunctions()

import render from './components/IdeaForm'
render()

import ideaListFunctions from './components/IdeaList'
const {renderIdeas} = ideaListFunctions;
renderIdeas()
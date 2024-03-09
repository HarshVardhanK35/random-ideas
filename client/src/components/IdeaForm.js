import ideasApiFunctions from "../services/ideasApi";
import ideaListFunctions from "./IdeaList";

const {createIdea} = ideasApiFunctions
const {addIdeaToList} = ideaListFunctions

const formModal = document.querySelector("#form-modal");

function render(){
  formModal.innerHTML =
  `
    <form id="idea-form">
      <div class="form-control">
        <label for="idea-text">Enter a Username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div class="form-control">
        <label for="idea-text">What's Your Idea?</label>
        <textarea name="text" id="idea-text"></textarea>
      </div>
      <div class="form-control">
        <label for="tag">Tag</label>
        <input type="text" name="tag" id="tag" />
      </div>
      <button class="btn" type="submit" id="submit">Submit</button>
    </form>
  `
  const ideaForm = document.querySelector("#idea-form");

  function addEventListeners(){
    ideaForm.addEventListener('submit', handleSubmit)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const idea = {
      text: ideaForm.elements.text.value,
      tag: ideaForm.elements.tag.value,
      username: ideaForm.elements.username.value
    }

    // Add idea to server
    const newIdea = await createIdea(idea);

    // Add idea to list
    addIdeaToList(newIdea.data.data)

    // clear the fields... after submitting the form
    ideaForm.text.value = "";
    ideaForm.tag.value = "";
    ideaForm.username.value = "";

    // close the modal... after submitting the form
    document.dispatchEvent(new Event('collapseModal'))
  }

  addEventListeners()
}

export default render
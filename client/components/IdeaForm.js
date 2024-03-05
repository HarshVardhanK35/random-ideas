const formModal = document.querySelector("#form-modal");

function render() {
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
  const form = document.querySelector("#idea-form");

  function handleSubmit(e){
    e.preventDefault();

    const text = form.elements.text.value;
    const tag = form.elements.tag.value;
    const username = form.elements.username.value;

    const idea = {
      text: text,
      tag: tag,
      username: username
    }
    console.log(idea)

    // clear the fields
    form.elements.text.value = "";
    form.elements.tag.value = "";
    form.elements.username.value = "";

    // dispatch event to close the modal
    document.dispatchEvent(new Event('closeModal'))
  }

  function addEventListeners(){
    form.addEventListener('submit', handleSubmit)
  }

  addEventListeners()
}

function initForm(){
  render();
}

export default initForm();
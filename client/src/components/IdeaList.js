import ideasApiFunctions from "../services/ideasApi";

const { getIdeas, deleteIdea } = ideasApiFunctions;

const ideaListEl = document.querySelector("#idea-list");
let ideas = []

const validTags = new Set();
validTags.add("technology");
validTags.add("software");
validTags.add("business");
validTags.add("education");
validTags.add("health");
validTags.add("inventions");


function getTagClass(tag) {
  tag = tag.toLowerCase();
  let tagClass = "";

  if (validTags.has(tag)) {
    tagClass = `tag-${tag}`;
  } else {
    tagClass = "";
  }
  return tagClass;
}


async function renderIdeas() {
  try {

    function addEventListeners(){
      ideaListEl.addEventListener('click', (e)=> {
        if(e.target.classList.contains('fa-times')){
          e.stopImmediatePropagation()
          const ideaId = e.target.parentElement.parentElement.dataset.id;
          deleteIdeaEl(ideaId)
        }
      })
    }

    async function deleteIdeaEl(ideaId){
      try {
        // delete from server
        const res = await deleteIdea(ideaId);

        // delete idea from DOM / IdeasListElement
        ideas.filter((idea)=> {
          idea._id !== ideaId
        })

        // GET all the ideas
        renderIdeas()

      } catch (error) {
        alert('You can not delete this resource')
      }
    }

    ideas = await getIdeas();

    ideaListEl.innerHTML = ideas
      .map((idea) => {
        const tagClass = getTagClass(idea.tag);
        const deleteBtn = idea.username === localStorage.getItem('username') ? `<button class="delete"><i class="fas fa-times"></i></button>` : ''
        return `
          <div class="card" data-id= "${idea._id}"">
            ${deleteBtn}
            <h3>${idea.text}</h3>
            <p class="tag ${tagClass}">${idea.tag}</p>
            <p>Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span></p>
            </div>
            `;
      })
      .join("");

      addEventListeners()

  }
  catch (error) {
    console.error(error);
  }
}

function addIdeaToList(idea){
  ideas.push(idea)
  renderIdeas()
}

const ideaListFunctions = {
  addIdeaToList,
  renderIdeas,
  getIdeas,
};

export default ideaListFunctions;

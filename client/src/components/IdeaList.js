import ideasApiFunctions from "../services/ideasApi";

const { getIdeas } = ideasApiFunctions;

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
    ideas = await getIdeas();

    ideaListEl.innerHTML = ideas
      .map((idea) => {
        const tagClass = getTagClass(idea.tag);
        return `
          <div class="card">
            <button class="delete"><i class="fas fa-times"></i></button>
            <h3>${idea.text}</h3>
            <p class="tag ${tagClass}">${idea.tag}</p>
            <p>Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span></p>
            </div>
            `;
      })
      .join("");

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

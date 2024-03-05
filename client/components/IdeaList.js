const ideaListEl = document.querySelector('#idea-list');
const ideas = [
  {
    id: 1,
    text: 'Idea 1',
    tag: 'Business',
    username: 'John',
    date: '6/3/2024'
  },
  {
    id: 2,
    text: 'Idea 2',
    tag: 'Technology',
    username: 'Doe',
    date: '27/12/2024'
  }
];
const validTags = new Set();
validTags.add('technology')
validTags.add('software')
validTags.add('business')
validTags.add('education')
validTags.add('health')
validTags.add('inventions')

function render() {
  ideaListEl.innerHTML = ideas.map((idea) => {
    return (
      `
        <div class="card">
          <button class="delete">
            <i class="fas fa-times"></i>
          </button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag tag-technology">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by <span class="author">${idea.username}</span>
          </p>
        </div>
      `
    )
  }).join('')
}

function initIdeas(){
  render();
}

export default initIdeas();
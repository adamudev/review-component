const reviews = [
  {
    id: 1,
    name: "Adamu Abubakar",
    title: "Software Developer",
    image: "/images/user1.jpeg",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    name: "Shehu Saidu",
    title: "Software Developer",
    image: "/images/user2.png",
    review: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 3,
    name: "Muhammad L. Adamu",
    title: "UX Designer",
    image: "/images/user3.png",
    review: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 4,
    name: "Idris Imam A.",
    title: "Systems Architect",
    image: "/images/user4.jpeg",
    review: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

// Select review items
const image = document.querySelector('#image');
const reviewer = document.querySelector('#reviewer');
const rTitle = document.querySelector('#reviewer-title');
const reviewText = document.querySelector('#review');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

// First Item;
let currentReviewer = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
  getReviewer();
})

// Get Reviewer
const getReviewer = () => {
  const item = reviews[currentReviewer];
  image.src = item.image;
  reviewer.textContent = item.name;
  rTitle.textContent = item.title;
  reviewText.textContent = item.review;
}

// Get next reviewer
nextBtn.addEventListener('click', () => {
  currentReviewer++;
  if(currentReviewer > reviews.length - 1){
    currentReviewer = 0;
  }
  getReviewer();
});

// Get previous reviewer
previousBtn.addEventListener('click', () => {
  currentReviewer--;
  if(currentReviewer < 0){
    currentReviewer = reviews.length - 1;
  }
  getReviewer();
});
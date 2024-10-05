const loadAllPosts = async (category) => {
  // const res = await fetch(
  //   "https://openapi.programming-hero.com/api/retro-forum/posts"
  // );
  // const data = await res.json();
  console.log(category);
};
loadAllPosts();

const handleSearchByCategory = (id) => {
  const searchText = document.getElementById("searchPosts").value;
  loadAllPosts(searchText);
};

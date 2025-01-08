// Bài 3: Gom các object của posts thành mảng posts
const topics = [
  {
    topic: "ReactJS",
    posts: [
      { postID: "id1", title: "title1" },
      { postID: "id2", title: "title2" },
    ],
  },
  {
    topic: "Vue.js",
    posts: [
      { postID: "id3", title: "title3" },
      { postID: "id4", title: "title4" },
    ],
  },
];
let merge = topics.reduce((all, posts) => {
  return all.concat(posts.posts);
}, []);
console.log(merge);

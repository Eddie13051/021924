let news = [];

const getLatestNews = async () => {
  const url = new URL(`https://flourishing-moxie-2c1179.netlify.app`);
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("dddd", news);
};

getLatestNews();

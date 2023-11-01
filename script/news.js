const { createClient } = microcms;

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "yutato-kashiwa", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "eRqEZjwAg9Qddbc3KZl2iNLyOzj8UzExdMQG",
});

client
  .get({
    endpoint: 'news',
    queries: { orders: '-date' },
  })
  .then((res) => {
    if(res.totalCount != false) {
      for (const content of res.contents) {
        const page_id = content.id;
        const title = content.title;
        const date = content.date;
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2].slice(0, 2);
        const image_path = content.thumbnail;
        if (image_path != undefined) {
          var image_code = `<img class="pc news-list__image" src="${image_path.url}" alt="news サムネイル">`;
        }else{
          var image_code = `<img class="pc news-list__image" src="/images/image-dummy-news_project.jpg" alt="no image">`;
        }
        $("#news_list").append(
          `<li class="news-list__item">
            <a href="./whats_new.html?page=${page_id}">
              ${image_code}
              <p class="news-list__date">${year} . ${month} . ${day}</p>
              <h2 class="news-list__title">${title}</h2>
            </a>
          </li>`
        );
      }
    }else{
      $("#news_list").append(
        `<p>お知らせが投稿されるとここに表示されます。</p>`
      );
    }
  })
  .catch((err) => console.log(err));

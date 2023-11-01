const { createClient } = microcms;

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "yutato-kashiwa", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "eRqEZjwAg9Qddbc3KZl2iNLyOzj8UzExdMQG",
});

const detail = $(location).attr('search');
const detail_id = detail.substr(6);

client
  .get({
    endpoint: 'news',
    contentId: `${detail_id}`,
  })
  .then((res) => {
    const title = res.title;
    const date = res.date;
    const dateArray = date.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2].slice(0, 2);
    const image_path = res.thumbnail;
    if (image_path != undefined) {
      var image_code = `<img class="page-news-details__thumbnail" src="${image_path.url}" alt="news サムネイル">`;
    }else{
      var image_code = `<img class="page-news-details__thumbnail" src="/images/image-dummy-news_project.jpg" alt="no image">`;
    }
    const body = res.body;
    $("title").html(title + " | プログラム異常動作の自動検出技術の創出プロジェクト");
    $("#post_header").append(
      `<p class="page-news-details__date">${year} . ${month} . ${day}</p>
      <h1 class="page-news-details__title">${title}</h1>`
    );
    $("#post_body").append(
      `${image_code}
      <div class="page-news-details__description">${body}</div>`
    );
  })
  .catch((err) => console.log(err));
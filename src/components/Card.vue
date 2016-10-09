<template>
  <li>
    <div class="card">
      <div class="content">
        <div class="header">
          <img class="header__avatar" src="../assets/profile.png"></img>
          <strong class="header__username" v-text="profile.name"></strong>
          <span class="header__screanname"><s>@</s><b v-text="profile.screanname"></b></span>
          <small class="header__date" v-text="timeline.date"></small>
        </div>

        <div class="text">
          <p class="text__content">{{timeline.text}}</p>
        </div>

        <div class="blog-card" v-if="timeline.url">
          <iframe
            style="width:100%;height:155px;max-width:100%;margin:0 0 1.7rem;
            display:block;"
            :src="'http://hatenablog.com/embed?url=' + timeline.url"
            width="300"
            height="150"
            frameborder="0"
            scrolling="no">
          </iframe>
        </div>

        <div class="footer">
          <div class="footer__reply">
            <button>
              <i class="fa fa-reply"></i>
              <span class="hidden">返信</span>
            </button>
          </div>
          <div class="footer__retweet">
            <button>
              <i class="fa fa-retweet"></i>
              <span class="hidden">リツイート</span>
            </button>
          </div>
          <div class="footer__heart">
            <button>
              <i class="fa fa-heart"></i>
              <span class="hidden">お気に入り</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
  border: 1px solid #e1e8ed;
}

.card:hover {
  background-color: #f5f8fa;
}

.content {
  padding: 9px 12px;
}

/* avatat */
img.header__avatar {
  float:left;
  width: 48px;
  height: 48px;

  border-radius: 5px;
  margin-right: 10px;
}

/* screanname */
.header__screanname, .header__date {
  font-size: 13px;
  color: #8899a6;
}
.header__screanname > s{
  text-decoration: none;
}
.header__date::before {
  content: "\00b7";
}

.blog-card {
  margin-top: 20px;
}

/* text */
.text {
  margin-left: 58px;
}
.text__content {
  margin: 0;
  white-space: pre-line;
}

/* footer */
.footer {
  margin-top: 10px;
  margin-left: 58px;
}
.footer > div {
  display: inline-block;
  position: relative;
  width: 80px;
}
.footer button {
  padding: 3px 5px;
  border: 0;
  background-color: transparent;
  color: #aab8c2;
  font-size: 16px;
}
.footer__reply:hover i {
  color: #7708a3;
}
.footer__retweet:hover i {
  color: #19cf86;
}
.footer__heart:hover i {
  color: #e81c4f;
}
</style>

<script>
export default {
  props: ['profile', 'timeline']
}
</script>

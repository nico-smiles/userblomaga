<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>
            「なぜ詳しいし。斜め上のテーマがいっぱいなニコニコ解説タグを紹介！ Part2」アドベントカレンダー 14日目
          </h1>
          <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar-day']" />
            <span>2020-12-14 12:00</span>
          </p>
        </header>

        <article class="blomaga">
<div class="main_blog_txt">
                        <p>ニコニコ動画には、流しそうめん機を作ってみたり、そもそも流しそうめんの概念を変えてしまう人など、変な人がいっぱいいますよね。例にもれず、ニコニコの解説タグにもなんでそんなこと詳しいんだよ…という人がいっぱい！</p><p class="p1"><br>今回も、そんな解説タグからイチオシの解説動画を5個ご紹介します。</p><p class="p3">この機会に、いつ役に立つのかわからない突飛な知識をゲットしちゃいましょう！</p><div style="background-color:#000000;border:5px solid #4A341C;"><p style="color:#FFFFFF;text-align:center;font-weight:bolder;font-size:x-large;">SmileS アドベントカレンダー</p></div><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">どうして人を食べちゃダメなの？考えもしなかった当たり前を考える</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37054808" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br></p><p class="p1"><a href="https://www.nicovideo.jp/series/164365">https://www.nicovideo.jp/series/120789<br></a><br></p><p></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">知ると面白い国道の番号には意味があるって知ってた？<br></h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36465572" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br><br></p><p class="p1"><a href="https://www.nicovideo.jp/series/102231">https://www.nicovideo.jp/series/102231</a></p><p></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">アメリカちゃんとイギリスちゃんさぁ…</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36227548" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br><br></p><p class="p1"><a href="https://www.nicovideo.jp/series/87141">https://www.nicovideo.jp/series/87141</a></p><p></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">ふふふ、セ○クスですわ！</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37207238" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br></p><p class="p1"><a href="https://www.nicovideo.jp/series/144214">https://www.nicovideo.jp/series/144214</a></p><p></p><p></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">ゲームは歴史も面白い</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm13492123" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br></p><p class="p1"></p><p><br></p><p><br></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">おわりに</h3><p>いかがでしたか。<br>ニコニコには面白い解説動画がいっぱいあります。<br><br>学生の頃は勉強は嫌いだったのですが<br>大人になってから触れてみると、とても面白いですよ。<br><br>まだまだ面白い解説はいっぱいあるので、またご紹介させて頂きます！</p><p>明日のアドベントカレンダーもお楽しみに！ご覧いただきありがとうございました！</p><hr><p>執筆＆動画セレクト：Agent No.2</p>
</div>
        </article>
      </div>
      <Sidepanel />
    </div>
    <Footer />
  </div>
</template>

<script>
import Meta from "@/mixins/meta";
import Footer from "@/components/Footer.vue";
import Sidepanel from "@/components/Sidepanel.vue";

export default {
  components: { Sidepanel, Footer },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title:
          "「なぜ詳しいし。斜め上のテーマがいっぱいなニコニコ解説タグを紹介！ Part2」アドベントカレンダー 14日目",
        description: "「SmileSアドカレ2020」のページです。",
        type: "pages",
        url: "https://nico-smiles.github.io/userblomaga/adcal2020/14",
      },
    };
  },
};
</script>

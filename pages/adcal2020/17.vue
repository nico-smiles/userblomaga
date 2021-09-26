<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>
            「なぜ詳しいし。斜め上のテーマがいっぱいなニコニコ解説タグを紹介！ Part3」アドベントカレンダー 17日目
          </h1>
          <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar-day']" />
            <span>2020-12-17 12:00</span>
          </p>
        </header>

        <article class="blomaga">
<div class="main_blog_txt">
                        <p>ニコニコ動画には、流しそうめん機を作ってみたり、そもそも流しそうめんの概念を変えてしまう人など、変な人がいっぱいいますよね。例にもれず、ニコニコの解説タグにもなんでそんなこと詳しいんだよ…という人がいっぱい！</p><p class="p1"><br>今回も、そんな解説タグからイチオシの解説動画を5個ご紹介します。</p><p class="p3">この機会に、いつ役に立つのかわからない突飛な知識をゲットしちゃいましょう！</p><div style="background-color:#000000;border:5px solid #4A341C;"><p style="color:#FFFFFF;text-align:center;font-weight:bolder;font-size:x-large;">SmileS アドベントカレンダー</p></div><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">輝かしい功績を残したはやぶさ２、でもその背後には波乱万丈な人生を送った先代機のドラマが！</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36045020" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br></p><p class="p1"><a href="https://www.nicovideo.jp/series/164365">https://www.nicovideo.jp/series/133650</a><br></p><p><br></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">時代が違えば価値観も常識も違う。今から見たら奇書でも当時は大真面目。商業書籍化にもなったおすすめの解説です。<br></h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm29063772" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br></p><p class="p1"><a href="https://www.nicovideo.jp/series/102231">https://www.nicovideo.jp/series/18562</a></p><p><br></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">粛清の時間だぁ!<br></h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36582126" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br></p><p class="p1"><a href="https://www.nicovideo.jp/series/87141">https://www.nicovideo.jp/series/76802</a></p><p><br></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">薬剤師のうｐ主が世界を滅ぼす方法という逆視点で感染症について語ります。</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36540290" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br></p><p class="p1"><a href="https://www.nicovideo.jp/series/144214">https://www.nicovideo.jp/series/107299</a></p><p><br></p><p><br></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">これまた薬科大生ニキが身近な科学について解説しています</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm35598865" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br><br><a href="https://www.nicovideo.jp/series/57033">https://www.nicovideo.jp/series/57033</a><br></p><p class="p1"><br></p><p><br></p><p><br></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">おわりに</h3><p>いかがでしたか。<br>ニコニコには面白い解説動画がいっぱいあります。<br><br>学生の頃は勉強は嫌いだったのですが<br>大人になってから触れてみると、とても面白いですよ。<br><br>まだまだ面白い解説はいっぱいあるので、またご紹介させて頂きます！</p><p>明日のアドベントカレンダーもお楽しみに！ご覧いただきありがとうございました！</p><hr><p>執筆＆動画セレクト：Agent No.2</p><br>

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
          "「なぜ詳しいし。斜め上のテーマがいっぱいなニコニコ解説タグを紹介！ Part3」アドベントカレンダー 17日目",
        description: "「SmileSアドカレ2020」のページです。",
        type: "pages",
        url: "https://nico-smiles.github.io/userblomaga/adcal2020/17",
      },
    };
  },
};
</script>

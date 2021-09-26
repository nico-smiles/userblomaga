<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>
            【12/22】これが私流リア充【SmileSアドカレ】
          </h1>
          <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar-day']" />
            <span>2020-12-22 12:00</span>
          </p>
        </header>

        <article class="blomaga">
<div class="main_blog_txt">
                        <p><a style="color:#0080ff;" target="_blank" href="https://ch.nicovideo.jp/smiles/blomaga/ar1971196">SmileSアドベントカレンダーについて</a></p><p>Agent No.11 から頂いた記事を代理掲載しています。</p><hr><p>初めましてエージェントNo.11です。</p><p>12月も後半戦いかがでしょうか？<br>師走忙しすぎ／(^o^)＼</p><p>12月後半といえばクリスマス。<br>クリスマスといえば、美味しい料理、良い音楽、そしてサンタ服！<br>ポジティブにクリスマスを楽しみましょう！<br></p><p>今回は4本の動画をピックアップします。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">ご注文は郷土料理ですか？？07 デンマークのクリスマス料理</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36336875" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>1本目は料理タグからです。</p><p>デンマークの郷土料理という、日本人には慣れ親しんでいない料理。<br>少々専門的な動画ではありますが、ボイスロイドのキャラクター達の会話と珍しさで楽しく最後まで観てしまいます。</p><p>あえて言うと飯テロ注意です！</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【ボカロDJ MIX】冬だ！ ディスコだ！ ボカコレだ！mix【ボカコレ2020冬】</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37934901" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>2本目はVOCALOIDタグからです。</p><p>オシャレな選曲でBGMとして流すのもよし！部屋でライブのように楽しむのもよしです！</p><h3 style="margin-bottom:0;font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【うなせせ】好き！雪！本気マジック 【踊ってみた】</h3><h3 style="margin-top:0;font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【てきのうしろ】好き！雪！本気マジック（OSTER projectアレンジ）踊ってみた</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37986655" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37975506" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>3本目・4本目は踊ってみたタグからです。</p><p>冬の曲として踊ってみたにも愛されている「好き！雪！本気マジック」。<br>さらに今月は踊ってみたNEXTの課題曲でもあります。一斉投稿楽しいですね！</p><p>今回ピックアップした2本の動画はボカコレRemixで話題となった「好き！雪！本気マジック（OSTER projectが本気でアレンジ！」の音源を早速使用されています。<br>元振付とは音源が違うので、アレンジ振付にも個性が出で楽しいですよ！</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">おわりに</h3><p>クリスマスにちなんだ動画はこれからも投稿されると思います。ぜひ、素敵な動画を探してみてくださいませ。</p><p>ここまで、お付き合いありがとうございました。</p><hr><p>執筆＆コンテンツセレクト：Agent No.11</p>

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
          "【12/22】これが私流リア充【SmileSアドカレ】",
        description: "「SmileSアドカレ2020」のページです。",
        type: "pages",
        url: "https://nico-smiles.github.io/userblomaga/adcal2020/22",
      },
    };
  },
};
</script>

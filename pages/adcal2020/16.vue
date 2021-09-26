<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>
            読み切り！ボイロノヒジキタイムズ
          </h1>
          <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar-day']" />
            <span>2020-12-16 12:00</span>
          </p>
        </header>

        <article class="blomaga">
<div class="main_blog_txt">
                        <p>ヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたいヒジキ食べたい<br></p><p>というわけで、本日はエージェントNo.88の大好きなコンテンツ「<span>VOICEROIDのひじき動画」をピックアップしたいと思います！<br><br>ちなみにVOICEROIDのひじき動画とはゲーム実況以外の題材で作られるVOICEROID動画のことです。</span></p><div style="background-color:#000000;border:5px solid #4A341C;"><p style="color:#FFFFFF;text-align:center;font-weight:bolder;font-size:x-large;">SmileS アドベントカレンダー</p></div><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;"><span>どうにもならないからって、まだ諦めるには早いと思うんだ！もう無理 ！！！！【VOICEROID劇場】</span></h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm35180403" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br><br>この動画はただ淡々とうぷ主の日常を話すだけの動画でトークセンスもいいのですが、私はこのシリーズのネタを作るために他の動画を投稿したり、決めた投稿日に間に合うかの瀬戸際に毎回立たされるうぷ主のリアルなところが好きです。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;"><span>【VOICEROIDなんとか】One Dollar Simulator(嘘)【手抜き祭】</span><br></h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37716626" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br><br>ドル札に石を置くのを眺めるだけの動画なんて……とてもニコニコらしくておすすめです。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;"><span>茜ちゃんVS唐揚げのレモン【茜ちゃんＶＳシリーズ】</span><br></h3><p><br></p><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm34903713" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe><br><br>この動画はたった９秒なのに面白さが凝縮されていてついつい見てしまいます。<br><br>そしてこのシリーズは、毎日欠かさずupされているので日々のルーティーンとして視聴してはいかがでしょうか？</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">おわりに</h3><h3>他にもVOICEROIDのひじき動画は面白いものがたくさんあるので皆さんもこの機会に視聴を楽しんでください！</h3><hr><p>執筆＆動画セレクト：Agent No.88</p><br>

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
          "読み切り！ボイロノヒジキタイムズ",
        description: "「SmileSアドカレ2020」のページです。",
        type: "pages",
        url: "https://nico-smiles.github.io/userblomaga/adcal2020/16",
      },
    };
  },
};
</script>

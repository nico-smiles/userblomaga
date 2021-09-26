<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>
            【12/05】SmileS アドベントカレンダー 1日目
          </h1>
          <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar-day']" />
            <span>2020-12-06 12:00</span>
          </p>
        </header>

        <article class="blomaga">
<div class="main_blog_txt">
                        <p><a style="color:#0080ff;" target="_blank" href="https://ch.nicovideo.jp/smiles/blomaga/ar1971196">SmileSアドベントカレンダーについて</a></p><hr><p>今年も残り1ヶ月を切りましたが、いかがお過ごしでしょうか。</p><p>皆様はじめまして。エージェントNo.28です。</p><p>今日からクリスマスまで、有志のエージェントが<b>「今年投稿されたオススメコンテンツ」</b>をご紹介します。題して、</p><div style="background-color:#000000;border:5px solid #4A341C;"><p style="color:#FFFFFF;text-align:center;font-weight:bolder;font-size:x-large;">SmileS アドベントカレンダー</p></div><p>というわけで、私からは３つほどご紹介させていただきます。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">サイレントシネマ【AIきりたん】　original</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37294755" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>今年2月下旬に公開された『NEUTRINO』。公開以降、物凄いスピードで拡散していき、今では5000件を超えた動画が投稿されています。</p><p>今回は、芳並京さんの投稿した『サイレントシネマ【AIきりたん】　original』をピックアップ。"かわいい"イメージのきりたんが歌う"カッコイイ"楽曲。ぜひお聞きください。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【通話】困ったら通信が悪いフリで乗り切る</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37357236" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>今年は新型コロナウイルスの影響で、オンラインでの授業や仕事になった方も多いと思います。</p><p>リアルの監視の目が無くなると、どうしてもサボりたくなりますよね。ラムダ技術部 / Yoideaさんの投稿した『【通話】困ったら通信が悪いフリで乗り切る』。この動画では、困ったときに乗り切る方法を紹介してくださっています。</p><p>サボっているのがバレても、SmileSは責任を取ることはできませんので、お気をつけくださいね。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【ハルヒMMD】HIGHER【まめる式ハルヒ】</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36448937" scrolling="no" style="border:solid 1px #888;" frameborder="0"></iframe></p><p>11月25日に9年ぶりの新刊が発売された『涼宮ハルヒシリーズ』。読んで久々に動いているハルヒが見たくなった人も多いのではないでしょうか。</p><p>まめるさん投稿の『【ハルヒMMD】HIGHER【まめる式ハルヒ】』では、IAの楽曲<a href="https://www.nicovideo.jp/watch/so33867289">『HIGHER』</a>に合わせてハルヒがカッコよく踊っています。ぜひ御覧ください！</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">おわりに</h3><p>いかがでしたでしょうか。今年も残り１ヶ月。くれぐれも体調にはお気をつけてお過ごしください。</p><p>アドベントカレンダーは明日以降も続きます！ぜひ御覧くださいね！ご覧いただきありがとうございました！</p><hr><p>執筆＆動画セレクト：Agent No.28</p>

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
          "【12/05】SmileS アドベントカレンダー 1日目",
        description: "「SmileSアドカレ2020」のページです。",
        type: "pages",
        url: "https://nico-smiles.github.io/userblomaga/adcal2020/5",
      },
    };
  },
};
</script>

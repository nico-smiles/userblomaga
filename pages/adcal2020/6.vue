<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>
            【12/06】SmileS アドベントカレンダー 2日目
          </h1>
          <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar-day']" />
            <span>2020-12-06 12:00</span>
          </p>
        </header>

        <article class="blomaga">
<div class="main_blog_txt">
                        <p><a style="color:#0080ff;" target="_blank" href="https://ch.nicovideo.jp/smiles/blomaga/ar1971196">SmileSアドベントカレンダーについて</a></p><p>Agent No.27 から頂いた記事を代理掲載しています。</p><hr><p>寒さが身に染みるこんな日は、お鍋やこたつ、薪を燃やす放送なんかで温まりたいですね。</p><p>そんな中、本日はエージェントNo.27が少しゾクッとする「今年投稿されたオススメコンテンツ」をお送りします。</p><div style="background-color:#000000;border:5px solid #4A341C;"><p style="color:#FFFFFF;text-align:center;font-weight:bolder;font-size:x-large;">SmileS アドベントカレンダー</p></div><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">「ぴえん」に襲われるホラゲがカオスすぎてぴえん【絶叫実況】</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37057547" scrolling="no" style="border:solid 1px #ccc;" frameborder="0"><a href="https://www.nicovideo.jp/watch/sm37057547">「ぴえん」に襲われるホラゲがカオスすぎてぴえん【絶叫実況】</a></iframe></p><p>6月18日に公開された、ただすめん氏(<a href="https://twitter.com/tadasumen/status/1273574977854271490?s=20">@tadasumen</a>)制作のフリーゲーム『PIEN-ぴえん-』。</p><p>顔文字『ぴえん』に襲われる恐怖と笑いを、実況主Loiさんの絶叫とともにお楽しみください。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【CoCリプレイ】沼男《スワンプマン》は誰だ？ 第21話(FINAL)【うごクトゥルフ】</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36434493" scrolling="no" style="border:solid 1px #ccc;" frameborder="0"><a href="https://www.nicovideo.jp/watch/sm36434493">【CoCリプレイ】沼男《スワンプマン》は誰だ？ 第21話(FINAL)【うごクトゥルフ】</a></iframe></p><p>6年の歳月をかけて完結したシリーズです。どうぞご視聴の際は「シリーズのはじめから」ご覧ください。</p><p>全編にわたって、デフォルメキャラや等身キャラがアニメーションで表現された「動くTRPG」です。シナリオの内容も相まって、その世界観は視聴者を飽きさせません。</p><p><b>※クトゥルフ神話TRPGのリプレイ動画ですので、<span style="color:rgb(255,0,0);">シナリオのネタバレ</span>が含まれます。お気を付けください。</b></p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【ゆっくり怪談全国ツアー 第9夜】高知・愛媛ほか6県編【四八(嘘)】</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm36579026" scrolling="no" style="border:solid 1px #ccc;" frameborder="0"><a href="https://www.nicovideo.jp/watch/sm36579026">【ゆっくり怪談全国ツアー 第9夜】高知・愛媛ほか6県編【四八(嘘)】</a></iframe></p><p>あの伝説のホラーゲーム「四八(仮)」のように、日本各地の怪談をゆっくり朗読するシリーズです。旧２ちゃんねるのオカルト板などの書き込みを基にしています。</p><p>こちらも4年の歳月をかけて完結しました。ご自分に所縁のある土地の怪談はありますか？</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">おわりに</h3><p>いかがでしたか。冬の寒さも相まって暖かさが恋しくなってきませんか？</p><p>冬のホラーもいいものですね。</p><p>明日のアドベントカレンダーもお楽しみに！ご覧いただきありがとうございました！</p><hr><p>執筆＆動画セレクト：Agent No.27</p>

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
          "【12/06】SmileS アドベントカレンダー 2日目",
        description: "「SmileSアドカレ2020」のページです。",
        type: "pages",
        url: "https://nico-smiles.github.io/userblomaga/adcal2020/6",
      },
    };
  },
};
</script>

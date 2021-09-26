<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>
            【12/07】SmileS アドベントカレンダー 3日目
          </h1>
          <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar-day']" />
            <span>2020-12-07 12:00</span>
          </p>
        </header>

        <article class="blomaga">
<div class="main_blog_txt">
                        <p><a style="color:#0080ff;" target="_blank" href="https://ch.nicovideo.jp/smiles/blomaga/ar1971196">SmileSアドベントカレンダーについて</a></p><p>Agent No.118 から頂いた記事を代理掲載しています。</p><hr><p>皆さんお疲れ様です。</p><p>エージェントNo.118。普段から<a href="https://ch.nicovideo.jp/smiles/blomaga/tag/The_VOCALOID_Times" style="color:#0080ff;">ボカロタイムズ</a>執筆等でブロマガに記載をさせて頂いています。</p><p>ここでは、普段私が紹介しているボカロ曲以外の<b>「今年投稿されたオススメコンテンツ」</b>をご紹介します。題して、</p><div style="background-color:#000000;border:5px solid #4A341C;"><p style="color:#FFFFFF;text-align:center;font-weight:bolder;font-size:x-large;">SmileS アドベントカレンダー</p></div><p>自分からは３つほどご紹介させていただきます。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【FF14】FSメンバー15人と「そして世界へ」楽器演奏してみた！</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37800060" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>まずは、私が普段ゲームをプレイさせて頂いているFFXIV関連の動画をご紹介。</p><p>FFXIVはFFシリーズ好きなら、大体のナンバリングの小ネタまで入っているので、FFが好きな方には是非プレイをして頂きたいのですが、そのXIVに実装されている演奏機能を使っての演奏動画をご紹介。ここまでXIVは出来ます。年末年始や休みのゲーム時間にソロでも様々な楽しみ方が出来るゲームに飛び込んでみては如何でしょうか</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">秘密結社 鷹の爪 ～ゴールデン・スペル～ 第1話「ゴールデン・スペル」</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/so37604171" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>今年は鬼滅の刃が大流行中ですが、なかなかアニメを見るにも全て見切れない。短いやつを見たい。</p><p>そんな時におすすめなのは、10分で終わる、いわゆるショートアニメといわれる物。中でも自分が今期プッシュしたいのが、鷹の爪。久々に地上波の深夜枠にアニメとして復活しただけあり、笑いあり、笑いあり、笑いあり。鷹の爪団らしい展開に毎回、ニコニコのコメントも大盛り上がり。気になる方は是非まず1話を見てほしい。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">マジカルミライ2020大阪開催を記念してマジカルミライ2020衣装のsour式ミクさんとリンちゃんがダンスロボットを踊ります</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37889568" scrolling="no" style="border:solid 1px #888;" frameborder="0"></iframe></p><p>最後にご紹介するのは、いつもボカロの曲を紹介している自分が趣向を代えて、MMD動画の中で最近見つけて好きになったものをご紹介します。</p><p>マジカルミライが今年も開催されています。それを記念してのMMDということで見た結果。私は見た瞬間、好きになりました。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">おわりに</h3><p>いかがでしたでしょうか。普段のボカロタイムズとは違った一面を見せられたのか。あれですが、私自身普段はアニメ、ゲームといったジャンルは大好物です。その本当に好きな部分の一面をご紹介させて頂きました。12月に入りました。皆さんもくれぐれも体調にはお気をつけてお過ごしください。</p><p>アドベントカレンダーは明日以降も続きます！ぜひ御覧くださいね！ご覧いただきありがとうございました！</p><hr><p>執筆＆動画セレクト：Agent No.118</p><br>

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
          "【12/07】SmileS アドベントカレンダー 3日目",
        description: "「SmileSアドカレ2020」のページです。",
        type: "pages",
        url: "https://nico-smiles.github.io/userblomaga/adcal2020/7",
      },
    };
  },
};
</script>

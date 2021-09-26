<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>
            【12/21】あま～いもの食べたい！スイーツ系料理動画をピックアップ！【SmileSアドカレ】
          </h1>
          <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar-day']" />
            <span>2020-12-21 12:00</span>
          </p>
        </header>

        <article class="blomaga">
<div class="main_blog_txt">
                        <p><a style="color:#0080ff;" target="_blank" href="https://ch.nicovideo.jp/smiles/blomaga/ar1971196">SmileSアドベントカレンダーについて</a></p><hr><p>ご無沙汰しております。Agent No.28です。本日も宜しくお願い致します。</p><div style="background-color:#000000;border:5px solid #4A341C;"><p style="color:#FFFFFF;text-align:center;font-weight:bolder;font-size:x-large;">SmileS アドベントカレンダー</p></div><p>皆さん、たまにとてつもなく"あま～いもの"食べたくなりませんか？自分はめっちゃなります。（そのせいで出費が...ｗ）</p><p>ということで、スイーツ系料理動画をメインにピックアップしました！！</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【VOICEROIDキッチン】琴葉葵はチョコミントアイスを作りたい【お手軽】</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37306107" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>チョコミントアイスエイヤッ↑(/＞＿＜)/</p><p>ちなみに自分はチョコミント苦手なんですよね...っていうのも、おっと誰か来たようだ。</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">きりたん「マシュマロ作りました！」</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37469547" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>マシュマロって意外と手軽に作れるんですね！暇なときに作ってみようと思います！</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">【2020缶詰祭】茜ちゃんの三段ホットケーキ【茜ちゃん七輪焼き】</h3><p><iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm37649130" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></p><p>缶詰祭動画からピックアップ。</p><p>七輪でホットケーキ...なんか違和感しなくもないですが、七輪のほうがやさしい火加減になって作りやすいのかもですね！</p><p>試せる方いらっしゃいましたらぜひ作ってみてください！</p><h3 style="font-size:larger;background-color:#000000;color:#FFFFFF;border-bottom:5px solid #4A341C;padding-left:5px;">おわりに</h3><p>いかがでしたでしょうか。ちゃんとしたところで買うと少し値が張ってしまいがちですが、自宅で作れば万事解決！ぜひ色んな動画を参考に作ってみてください！</p><p>明日以降もSmileSアドベントカレンダー続きます！ぜひ御覧ください！！</p><hr><p>執筆＆コンテンツセレクト：Agent No.28</p>

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
          "【12/21】あま～いもの食べたい！スイーツ系料理動画をピックアップ！【SmileSアドカレ】",
        description: "「SmileSアドカレ2020」のページです。",
        type: "pages",
        url: "https://nico-smiles.github.io/userblomaga/adcal2020/21",
      },
    };
  },
};
</script>

<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        <header>
          <h1>SmileSユーザーブロマガ</h1>
        </header>
        <article class="blomaga">
          <p>このサイトは、SmileSエージェントが執筆したものの、手間の都合でチャンネルブロマガに掲載できなかった記事を公開するサイトです。</p>

          <h2 style="border-bottom: #4A341C 3px solid;padding:.5em 0;margin:.2em 0;font-size:140%;font-weight:bold;">掲載中記事一覧</h2>
          <table style="width: 100%; margin:10px 0;">
            <thead>
              <tr>
                <td style="padding:5px; font-weight:bold; border-bottom: #ccc 2px solid;">最終更新</td>
                <td style="padding:5px; font-weight:bold; border-bottom: #ccc 2px solid;">タイトル（クリックで移動します）</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:5px; border-bottom: #ccc 1px solid;">2021/09/12</td>
                <td style="padding:5px; border-bottom: #ccc 1px solid;"><a style="color:#0080ff;" href="/adcal2020" rel="noopener noreferrer">SmileSアドベントカレンダー2020</a></td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
      <Sidepanel />
    </div>
    <Footer />
    
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Sidepanel from '@/components/Sidepanel.vue'
export default {
  components: { Sidepanel, Footer },
  head () {
    return {
      titleTemplate: null,
      title: 'SmileSユーザーブロマガ',
    }
  },
}
</script>

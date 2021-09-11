<template>
  <header>
    <div class="nav">
      <nav class="widewrap nav_wrap">
        <a href="https://nicovideo.jp/">ニコニコ</a>
        <a href="https://site.nicovideo.jp/smiles/">ニコニコ情報調査室SmileS</a>
        <a href="https://ch.nicovideo.jp/smiles/blomaga">SmileSチャンネルブロマガ</a>
      </nav>
    </div>
    <div class="widewrap">
       <h1 class="font-weight-bold"><a href="/">SmileSユーザーブロマガ</a></h1>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.widewrap{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

header{
  background-color: #333;

  div.nav{
    background: #252525;
    text-decoration: none;

    .nav_wrap{
      display: flex;

      a{
        color: white;
        display: block;
        height: 36px;
        line-height: 36px;
        padding: 0 1em;
        font-size: 12px;

        &:hover{
          color: white;
          text-decoration: none;
          background: #555;
        }
      }
    }


  }
  h1{
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
    a{
      color: #ddd;
      &:hover{
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
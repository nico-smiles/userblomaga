<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" style="background-color: black;">
      <b-navbar-brand href="/userblomaga/" class="font-weight-bold">
        SmileSユーザーブロマガ
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="カテゴリ" right>
            <b-dropdown-item href="adcal2020">アドベントカレンダー2020</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://site.nicovideo.jp/smiles/">ニコニコ情報調査室SmileS</b-nav-item>
          <b-nav-item href="https://ch.nicovideo.jp/smiles/blomaga">チャンネルブロマガ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>
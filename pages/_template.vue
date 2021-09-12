<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="main">
        コンテンツ
      </div>
      <Sidepanel />
    </div>
    <Footer />
    
  </div>
</template>

<script>
import Meta from '@/mixins/meta';
import Footer from '@/components/Footer.vue'
import Sidepanel from '@/components/Sidepanel.vue'

export default {
  components: { Sidepanel, Footer },
  mixins: [Meta], 
  data() {
    return {
      // '' 内を変更してください
      meta: {
        title: '' ,
        description: '',
        type: 'pages',
        url: 'https://nico-smiles.github.io/userblomaga/',
      },
    }
  },
}
</script>

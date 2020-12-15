<template>
  <div class="wrapper">
    <Header />
    <div class="contenedor">
      <Card />
      <CardTable />
      
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Card from '@/components/Card'
import CardTable from '@/components/CardTable'

export default {
  
  name: "Dashboard",

  components:{
    Header,
    Card,
    CardTable

  
  }
};
</script>

<style  scoped>
  .contenedor{
    padding: 15px 10px;


  }
</style>

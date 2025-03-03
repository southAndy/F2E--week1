<template>
  <div class="festival">
    <Breadcrumb />
    <Button @getSelected="search" />
    <div class="serach">
      <div class="topic_container">
        <h3 class="serach_theme">熱門主題</h3>
        <Topic
          v-for="topic in getScenicSpotTypes"
          :key="topic"
          :list="topic"
          class="topic"
          @click="searchSpeficType(topic.name)"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Topic from "@/components/Topic.vue";
import Button from "@/components/Selector.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import {ref,computed} from "vue"
import { useStore } from "vuex";
import { useRouter,useRoute } from "vue-router";
import { ApiResponse } from "@/types/api";
const store = useStore()
const router = useRouter()
const routeInfo = useRoute()

const getScenicSpotTypes = computed(()=>{
  return store.state.festivalDatas;
})

const apiData = ref<ApiResponse[]>()


async function getApi(type:string){
  try{
    console.log(store);
  await store.dispatch("getScenicSpotAPI")
  apiData.value = store.state.scenicSpotData
  }catch(e){
    console.error(e);
  }
}

function changeRouter(){
  // 因為 apiData 初始是 undefined，確保資料回來 index 存在
  console.log(apiData.value,'hi');
  
  if (apiData.value && apiData.value.length > 1) {
    router.push({
      name: "Result",
      query: {
        type: apiData.value[1].Class1,
        path: String(routeInfo.name),
      },
    });
  } else {
    console.error("apiData.value 不存在或長度不足");
  }
}

interface EmitsDatas {
  city:string | undefined,
  keyword:string 
}

function search(emit:EmitsDatas){
  console.log(emit);
  changeRouter()
  
}

async function searchSpeficType(type:string){
  try{
    await getApi(type)
    changeRouter()
  }catch(e){

  }
}





//   methods: {
//     async getDataByClass(className) {
//       console.log(className);
//       this.apiDataByClass = await this.$store.dispatch(
//         "activitiesDatas/sendData",
//         className
//       );
//       console.log(this.apiDataByClass);
//       this.changeRouter(this.apiDataByClass);
//     },
//     async sendSelectedDatas(data) {
//       console.log(data);
//       let currentRouter = this.$router.currentRoute.value.name;

//       console.log(
//         `當前路由為${currentRouter} 此次搜尋的城市是 ${data.city}，關鍵字為：${data.keyword}`
//       );

//       console.log(this.$route.name);
//       this.$router.push({
//         name: "Result",
//         query: {
//           city: data.city,
//           keyword: data.keyword,
//           path: this.$route.name,
//         },
//       });
//     },

</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
.festival {
  padding: 0 25px;

  @include breakpoints.desktop {
    padding: 0 45px;
  }

  .serach {
    margin: 50px 0;
    &_theme {
      font-size: 25px;
      font-weight: 400;
      text-align: start;
      flex: 85%;
      margin-left: 25px;
      @include breakpoints.desktop {
        marign: 0px;
      }
    }
  }
  .topic_container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @include breakpoints.desktop {
      justify-content: start;
    }
  }
}
</style>

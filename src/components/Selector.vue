<template>
  <div class="serach_container">
    <select @change="selectCity">
      <option value="請選擇縣市">請選擇縣市</option>
      <option :value="city.cityName" v-for="city in citiesList" :key="city.id">
        {{ city.cityName }}
      </option>
    </select>
    <input
      v-model="inputKeyword"
      class="serach_input"
      type="text"
      name=""
      id=""
      placeholder="請輸入活動關鍵字："
    />
    <button
      class="serach"
      @click="sendKeywords"
    >
      <div class="serach_icon">
        <img src="@/assets/image/search.svg" alt="放大鏡" />
      </div>
      <span>搜 尋</span>
    </button>
  </div>
</template>
<script lang="ts" setup >
import {computed, ref,defineProps,withDefaults} from "vue"
import citiesList from "@/assets/data/citiesList.json";

interface Props {
  cityData?:any
}
interface Emits {
  (event:'getSelected',value:EmitsDatas):void
}

interface EmitsDatas {
  city:string | undefined,
  keyword:string 
}

withDefaults(defineProps<Props>(),{})
const emits = defineEmits<Emits>()

const selectedCity = ref('請選擇城市')

const getCurrentCity = computed(()=>{
  if(selectedCity.value === '請選擇城市')return ''
  const city = citiesList.find((city)=>city.cityName === selectedCity.value)
  return city?.cityLink
})

function selectCity(el:Event){
  let target = el.target as HTMLSelectElement
  selectedCity.value = target.value
}


const selectedDate = ref('')

function selectDate(dateEl:Event){
  const target = dateEl.target as HTMLSelectElement
  selectedDate.value = target.value
}

function sendKeywords (){
  console.log('sent');
  emits('getSelected',{keyword:inputKeyword.value,city:getCurrentCity.value})
}

const inputKeyword = ref<string>('')

</script>
<style lang="scss" scoped>
@use "../assets/sass/colors.scss";
@use "../assets/sass/breakpoints.scss";

%serach {
  padding: 15px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 15px;
}
.serach_container {
  display: flex;
  flex-direction: column;
  @include breakpoints.desktop {
    flex-direction: row;
  }
  .serach_time {
    @include breakpoints.desktop {
      // flex-direction: row;
      display: none;
    }
  }

  select {
    width: 100%;
    @extend %serach;
    border: 1px solid #e6e6e6;
    @include breakpoints.desktop {
      // flex-direction: row;
      // display: none;
      flex: 0.3;

      margin-right: 15px;
    }
    option {
      text-align: center;
    }
  }

  input {
    @extend %serach;
    border: 1px solid;
  }
  .serach_input {
    background-color: #f9f9f9;
    border: 1px solid #e6e6e6;
    @include breakpoints.desktop {
      // flex-direction: row;
      // display: none;
      flex: 1.5;

      margin-right: 15px;
    }
  }
  .serach {
    display: flex;
    justify-content: center;
    padding: 0 15px;
    // sass 變數值引入用：sass引入名+變數名
    background-color: colors.$primary-color;

    border-radius: 5px;
    border: 1px;
    @include breakpoints.desktop {
      // flex-direction: row;
      // display: none;
      flex: 0.5;
      height: 56px;
    }
    span {
      align-self: center;
      color: white;
      font-size: 20px;
      font-weight: 700;
    }
  }
  .serach_icon {
    @include breakpoints.desktop {
      // flex-direction: row;
      // display: none;
      // flex: 0.5;
      // height: 56px;
      align-self: center;
    }
  }
}
</style>

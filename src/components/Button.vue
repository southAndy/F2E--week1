<template>
  <div class="serach_container">
    <!-- 下拉表單樣式優化 -->
    <select @change="selectCity">
      <option value="">請選擇縣市</option>
      <option :value="city" v-for="city in getCity" :key="city">
        {{ city }}
      </option>
    </select>
    <!-- {{ selectedDate }}
    <input
      class="serach_time"
      type="date"
      placeholder="請選擇日期"
      @change="selectDate"
    /> -->
    <input
      v-model="inputKeyWords"
      class="serach_input"
      type="text"
      name=""
      id=""
      placeholder="請輸入活動關鍵字："
    />
    <button
      class="serach"
      @click="
        pushSelectedDatas({
          city: this.getCurrentCity,
          keyword: this.inputKeyWords,
        })
      "
    >
      <div class="serach_icon">
        <img src="@/assets/image/search.svg" alt="放大鏡" />
      </div>
      <span>搜 尋</span>
    </button>
  </div>
</template>
<script>
import citiesList from "@/assets/data/citiesList.json";

export default {
  props: ["cityData"],
  name: "Button",
  data() {
    return {
      apiData: this.cityData,
      selecedCity: "請選擇縣市",
      inputKeyWords: "",
      selectedDate: "",
      //透過router傳遞類別
      // classedAPI: this.$router.query.class || "",
    };
  },
  computed: {
    citiesList() {
      return citiesList;
    },
    getCurrentCity() {
      if (this.selecedCity === "請選擇縣市") {
        return;
      }
      //! 輸入值跟資料表進行比對，回傳對應值
      return this.citiesList.find((city) => city.cityName === this.selecedCity)
        .cityLink;
    },
    //todo 改為從views檔案props資料
    getCity() {
      return this.$store.getters.filterRepeatCity;
    },
  },
  methods: {
    selectCity(el) {
      this.selecedCity = el.target.value;
    },
    selectDate(el) {
      this.selectedDate = el.target.value;
    },
    pushSelectedDatas({ city, keyword }) {
      console.log(city, keyword);
      this.$emit("getSelected", { city, keyword });
    },
  },
};
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

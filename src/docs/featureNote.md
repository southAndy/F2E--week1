# f2e week1 實作紀錄

## 邏輯問題
### 當資料還沒抵達時，如何避免報錯 -- `串連運算子`
**情境**
當今天載入套件(carousel)時，圖片來源是API資料，但因為時間差的問題，在最初載入時尚未取到資料
```html
 <router-link
          :to="{
            name: 'Content',
            params: {
              city: placeData?.[1]?.City,
              id: placeData?.[1]?.ScenicSpotID,
              name: placeData?.[1]?.ScenicSpotName,
            },
          }"
          class="carousel-item w-100 h-100 active"
        >
          <p class="carousel_title">
            {{ placeData?.[1]?.ScenicSpotName }}
          </p>
          <img
            :src="placeData?.[1]?.Picture.PictureUrl1"
            class="d-block w-100"
            alt="..."
          />
```
會因為取不到API（物件），而出現
>Uncaught TypeError: Cannot read properties of undefined (reading 'City')
    at <anonymous>:...

可以透過**串連運算子** `?` 判斷資料是否為`undefined`或是`null`，決定是否要繼續執行，若是`true`，會回傳`undefined`並暫停執行。

修改後：
```html
 <router-link
          :to="{
            name: 'Content',
            params: {
              city: placeData?.[1]?.City,
              id: placeData?.[1]?.ScenicSpotID,
              name: placeData?.[1]?.ScenicSpotName,
            },
          }"
          class="carousel-item w-100 h-100 active"
        >
          <p class="carousel_title">
            {{ placeData?.[1]?.ScenicSpotName }}
          </p>
          <img
            :src="placeData?.[1]?.Picture.PictureUrl1"
            class="d-block w-100"
            alt="..."
          />
```

### 可用來預覽 data 值狀況 -- `<prev>`（不會佔據一個空間）

```html
<prev>{{data}}</prev>
```

### pagination 切換分頁

點擊頁碼時：

回傳對應的頁碼（元件功能單一化）

1. 以頁碼進行資料切割
2. 再將切割資料用以渲染

### 首頁的按鈕跳轉方式 --- `this.$router.push`

在 select 物件上，可用`change`事件來處理：

```javaScript
getTest(selected) {
      console.log("loading", selected.target.value);
      this.selectClass = selected.target.value;
},
```

順便複習，在 vue 框架內，若觸發事件沒有自訂參數，預設參數就是指向$event（原生的事件）

**reference**
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

### 如何選擇發哪個 API

動機：
不想發所有 API，浪費記憶體執行

1. 原始做法：用 router params's data = Name 作為判斷依據
   但這個做法較難判斷活動類別（飲食、觀光、活動）

```javaScript
let dataID = this.$route.params.name;//陽明山

function getAPI(){
  if(dataID=== API){
    //....
  }
}
//但不發API無法進行比較
```

2. 修改做法：用 router params's data = id 作為判斷依據。因為 API 資料 ID 依據類別可以區分

```javaScript
let dataID = this.$route.params.id;
    if (dataID.includes("C1")) {
      API.getScenicSpotAPI().then((response) => {
        return (this.contentData = response.data);
      });
    }
    if (dataID.includes("C2")) {
      API.getActivitiesAPI().then((response) => {
        return (this.contentData = response.data);
      });
    }
    if (dataID.includes("C3")) {
      API.getRestaurantAPI().then((response) => {
        return (this.contentData = response.data);
      });
    }
```

### router 傳值 / component 傳值

#### router 傳值：

1. 透過`this.$route.params`傳值，作為判斷 API 資料的依據
2. route.push()

#### component 傳值：

透過 props 傳值
傳遞層：透過 v-bind:被傳名字 = 傳遞參數名
p.s:沒加 v-bind，數值會是純字串而非動態的值
接收層：props:['被傳名字']

### 根據 API 資料引入對應的地圖

以常見的 google map 為例，我們可以使用`<iframe>`進行設定

```html
<iframe
width="400"
height="300"
frameborder="0"
scrolling="no"
marginheight="0"
marginwidth="0"
src=http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=輸入查詢的地址&z=比例大小&output=embed&t=地圖模式>
</iframe>
```

#### 參考 stackoverflow 引入寫法

**google map url**

`https://maps.google.com/?ie=UTF8&t=m&ll=13.2164639,74.995161&spn=0.003381,0.017231&z=16&output=embed`

**內部參數解析：**

1. &ll : (南北緯,東西緯)的參數值
2. t 內部有三種模式:

   - h:衛星＋路線
   - p:地形圖
   - m:常規地圖

3. z:地圖比例
4. output = embed:輸出可以嵌入到第三方網站的 HTML 內容

**reference**

1. https://jax-work-archive.blogspot.com/2011/07/google-maps.html
2. https://stackoverflow.com/questions/17125054/embedding-the-new-google-map-in-your-website

### `params` -- 如何根據 API 資料渲染出不同頁面

**原理**：

#### reference:

https://vueschool.io/lessons/dynamic-routes

---

### 旅遊頁面的切換

有那麼多資料，難道只能手動創造每個畫面？
**不用！讓`params`幫幫你**
https://vueschool.io/lessons/dynamic-routes?friend=vuerouter

透過`params動態切換資料`

今天要傳入的資料是 obj

```javascript=
{
ActivityID: "C2_315080000H_502037",
ActivityName: "2022年第十屆澎湖灣國際帆船公開賽",
Description: "澎湖位於臺灣海峽中央，因為多島嶼及海灣的特殊地理環境，近年來許多超級遊 艇與帆船慕名而來，除了連續舉辦多年的亞洲風浪板巡迴賽之外，2010年的海峽盃帆船賽一直到2022年第十屆澎湖島帆船週系列賽，已經連續第11年在澎湖舉辦。",
Location: "馬公第一漁港",
Address: "澎湖馬公亞果遊艇碼頭",
Phone: "886-2-87711442",
Organizer: "中華民國帆船協會",
StartTime: "2022-06-17T10:00:00+08:00",
EndTime: "2022-06-21T17:00:00+08:00",
Picture: { },
Position: {
PositionLon: 119.56814575195312,
PositionLat: 23.563018798828125,
GeoHash: "wsjn0cdbe",
},
Class1: "其他",
SrcUpdateTime: "2022-02-12T01:12:32+08:00",
UpdateTime: "2022-02-12T01:34:29+08:00",
},
```

想透過 params 動態切換，利用`this.route.params`取得不同頁面的值

**問題**：

```javascript=
this.route.params
//get "[object:Object]"
```

無法取得物件內的屬性，因為傳入的值都是字串型別

**解決方式**
透過`JSON.stringFly()`去完整保留物件屬性
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

---

### 如何做出當前頁面的路徑樣式？

![當前頁面位置](https://i.imgur.com/IhbTct2.png)

### 用 Vue 的動態控制資料來源、甚至是 css 屬性

https://v3.vuejs.org/api/sfc-style.html#state-driven-dynamic-css

### `src`用`v-bind`引入圖片資料

```javascript=
festivalData: [
        { name: "地方特產", image: "../assets/image/unsplash_7tvbRQ5AKs4.svg" },
        {
          name: "中式美食",
          image: require("../assets/image/unsplash_qDZ-Xd8dX6w.png"),
        },
        {
          name: "甜點冰品",
          image: require("../assets/image/unsplash_pn5c-CLWGzY.svg"),
        },
        {
          name: "異國料理",
          image: "../assets/image/unsplash_qDBbM9Erwo4.svg",
        },
        {
          name: "伴手禮",
          image: "../assets/image/unsplash_qDZ-Xd8dX6w.png",
        },
        { name: "素食", image: "../assets/image/unsplash_qDZ-Xd8dX6w.svg" },
      ],
```

若是要加入`src`的路徑需要`require`，這是 JS 機制的問題

**svg vs png**
https://www.cool3c.com/article/146971

### `v-if` -- 處理渲染 API 資料的方式

下面是我們常見用來渲染 API 資料的卡片

```html
<template>
  <div class="card">
    <div class="card_body">
      <p>{{api.title}}</p>
      <p>{{api.content}}</p>
    </div>
    <div class="card-image">
      <img :src="api.image" />
    </div>
  </div>
</template>
<script>
  export default vue = {
    name: "renderObj",
  };
</script>
```

因為接收 API 資料屬於非同步的處理，但渲染這些元件可能會早於接收這個行為，因此會易造成報錯

**解方 -- `v-if`**
將 API 資料作為 v-if 的條件，設定於容器層（class=card）決定是否進行渲染

```html
<template>
  <div class="card" v-if="apiGet">
    <div class="card_body">
      <p>{{api.title}}</p>
      <p>{{api.content}}</p>
    </div>
    <div class="card-image">
      <img :src="api.image" />
    </div>
  </div>
</template>
<script>
  export default vue = {
    name: "renderObj",
  };
</script>
```

就能等待 API 出現才進行渲染，避免報錯。

## <br>

## 畫面問題

![](https://i.imgur.com/iUD9EEC.png)

如何做到上面的文字效果？

```htmlmixed=

```

## node module & git 問題

### 引入`swiper7` 遭遇的問題

按照官網說的下載`npm i swiper`，以及引入方式

```javascript=
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
```

結果報錯了
![](https://i.imgur.com/dG3rkFo.png)

原因是什麼呢？

**因為 webpack4 無法使用 package.json ==exports field==**
https://github.com/webpack/webpack/issues/9509

因此要修改 Swiper `import`的路徑：
**改由直接從 swiper 資料夾內的個別路徑引入**

#### **export field**是什麼？它做了什麼？

我之前沒有很認真的想過，當我使用`require(commandJs)`,`import(Esmodule)`，將套件引入時，**究竟是怎麼引入的？** 或是說引入了誰？

根據 npm's docs 的說法：

> 在 node module 內的套件，有**三種進入點**：
>
> 1. 預設是透過 **index.js**
> 2. 透過 package.json 內的

        * main field內設定
        * exports field設定

以**axios**為例
![](https://i.imgur.com/DWiT4Cy.png)
從右圖可見 axios 資料夾內有：

1. index.js
2. package.json
   package.json 內的 main，指的就是**main field**

**解決方法：**
因為找不到引入路徑的檔案，因此要修改`import`的路徑

```javascript=
import { Swiper } from './swiper.js';
import { SwiperSlide } from './swiper-slide.js';
export { Swiper, SwiperSlide };
```

實際上是：

```javascript=
import { Swiper } from "swiper/vue/swiper.js";
import { SwiperSlide } from "swiper/vue/swiper-slide.js";
import "swiper/swiper.min.css";
```

##### reference:

1. (wendy's solution)
   https://hackmd.io/wo7ZWETNQD-WdiSkHFX-Sw
2. (認識 npm package.json)
   https://docs.npmjs.com/cli/v7/configuring-npm/package-json
3. (所謂的子進入點)
   https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#subpath-exports

#### 尋找套件問題的方式

1. 去套件的 github 內的 issue，透過關鍵字搜尋

### import bootstrap5

## 使用者題驗

1. navbar 的 hover 效果
2. 各個 navbar 的下拉表單更好看（手刻）
3. 點擊 button 的效果
4. View's result :新增回到第一頁功能、最後一頁功能

**moible**

1. navbar 下拉造型修改
2.


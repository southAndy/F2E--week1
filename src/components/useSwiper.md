# how to use Swiper

1. install -- `npm i swiper`

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

因此需要修改 Swiper `import`的路徑：
**改由直接從 swiper 資料夾內的個別路徑引入**

### **export field**是什麼？它做了什麼？

我之前沒有很認真的想過，當我使用`require(commandJs)`,`import(Esmodule)`，將套件引入時，**究竟是怎麼引入的？** 或是說引入了誰？

根據 npm's docs 的說法：

> 在 node module 內的套件，有**三種進入點**：

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

實際上等於：

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

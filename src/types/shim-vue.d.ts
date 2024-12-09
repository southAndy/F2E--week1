import '@/types/api.d.ts'
import '@/types/global.d.ts'

// for optionAPI's setting
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }




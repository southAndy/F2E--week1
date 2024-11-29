import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  
  // 模擬類似真實 api 回傳的假資料
  const activitiesData = {
    StartTime: '2024-11-28T12:00:00Z',
    EndTime: '2024-11-29T12:00:00Z',
    City: 'Taipei',
    ActivityID: '12345',
    ActivityName: 'Sample Activity',
    Picture: { PictureUrl1: 'https://example.com/sample.jpg' },
  };

  // 模擬的 vuex
  const mockStore = {
    state: {
      isLoading: false,
    },
  };

  it('renders correctly when not loading', () => {
    const wrapper = shallowMount(Card, {
      props: { activitiesData },
      global: {
        mocks: {
          $store: mockStore, // 模擬 Vuex
        },
        stubs: {
          'router-link': true, // 模擬 router-link
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders skeleton class when loading', () => {
    mockStore.state.isLoading = true; // 模擬 isLoading 狀態
    const wrapper = shallowMount(Card, {
      props: { activitiesData },
      global: {
        mocks: {
          $store: mockStore,
        },
        stubs: {
          'router-link': true,
        },
      },
    });

    expect(wrapper.find('.skeleton').exists()).toBe(true); // 檢查 skeleton class 是否存在
  });
});
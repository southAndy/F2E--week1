import { vi, describe, it, expect } from "vitest";
import API from "../service/getAPI";

// 模擬 API 的回傳值
vi.mock("../service/getAPI", () => ({
    default: {
        getScenicSpotAPI: vi.fn().mockResolvedValue({ data: 12 }),
    },
}));

// 創建模擬的 Vuex Store
const createMockStore = () => ({
    state: {},
    mutations: {
        updateData: vi.fn(), // 模擬 mutation 函數
    },
    actions: {
        async getScenicSpotAPI({ commit }) {
            const response = await API.getScenicSpotAPI();
            commit("updateData", response.data); // 正常 Vuex 內部邏輯
        },
    },
});

describe("When dispatching actions: getScenicSpotAPI", () => {
    it("Should call API function and then trigger mutations", async () => {
        const mockStore = createMockStore();

        // 為 commit 函數建立監控點
        const commitMock = vi.fn();
        const spyCommit = vi.spyOn({ commit: commitMock }, "commit");

        // 調用 action
        await mockStore.actions.getScenicSpotAPI({ commit: spyCommit });

        // 驗證 API 是否被調用
        expect(API.getScenicSpotAPI).toHaveBeenCalled();

        // 驗證 commit 是否被正確觸發
        expect(spyCommit).toHaveBeenCalledWith("updateData", 12);
    });
});


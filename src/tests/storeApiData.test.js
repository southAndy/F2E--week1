import { describe, expect, test } from "vitest";
import store from "../store";

describe("apiData in the vuex store is null", () => {
    describe("don't commit any mutation",()=>{
        test("apiData should be equal null", () => {
            expect(store.state.apiData).toBeNull; 
        });
    })

});

describe("apiData in the vuex store is null", () => {
        describe("update apiData when committing ensureActivitiesAPI",()=>{
            const testData = { test: 1 };
            store.commit('ensureActivitiesAPI', testData);
            test("apiData should be equal response's data", () => {
                expect(store.state.apiData).toEqual(testData); 
            });
        })

});


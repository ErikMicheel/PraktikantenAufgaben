import { expect, test } from "bun:test";
import {sort_arr} from  "./list_sort.js"

var arr = Array.from({length:10}, () => Math.floor(Math.random() * 100));
test("Teste Sortiert Funktion", () => {
    expect(sort_arr(arr)).toEqual(arr.sort())
})
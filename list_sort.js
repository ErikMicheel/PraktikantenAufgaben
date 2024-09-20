var arr = Array.from({length:10}, () => Math.floor(Math.random() * 100));
console.log("Liste mit zufälligen Zahlen nicht sortiert: " + arr);
let sorted_arr = sort_arr(arr);
console.log("Sortierte Liste: " + sorted_arr)

// die in Javascript eingebaute sort() Methode ist verboten!
export function sort_arr(arr_to_sort) {
    var arr_sorted = Array.from(arr_to_sort);

    return arr_sorted;
}
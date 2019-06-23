let getMax = ar => {
    let local_max = 0;
    let global_max = 0;
    let start_inx = 0, end_inx = 0;
    ar.forEach(function (ar_el, ar_inx) {
        local_max += ar_el;
        if (local_max < 0){
            local_max = 0;
            start_inx = ar_inx + 1;
        }
        if (global_max < local_max){
            global_max = local_max;
            end_inx = ar_inx;
        }
    });
    return {global_max, start_inx, end_inx};
};

console.log(getMax([-2, -3, 4, -1, -2, 1, 5, -3]));
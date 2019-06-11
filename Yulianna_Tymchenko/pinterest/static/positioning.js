let colCount = 0;
let colWidth = 0;
let margin = 20;
let windowWidth = 0;
let marginLeft = 0;
let prevBlocks = [];
export function setupBlocks(resize) {
    margin = 20;
    let blocks = [];
    windowWidth = $(window).width();
    colWidth = $('.Post').outerWidth();
    colCount = Math.floor(windowWidth / (colWidth + margin));
    marginLeft = (windowWidth - (colWidth + margin) * colCount) / 2;
    for (let i = 0; i < colCount; i++) {
        blocks.push(margin);
    }
    positionBlocks(blocks);
}

function positionBlocks(blocks) {
    $('.Post').each(function () {
        let min = Array.min(blocks);
        let index = $.inArray(min, blocks);
        let leftPos = margin + (index * (colWidth + margin));
        $(this).css({
            'left': leftPos + marginLeft + 'px',
            'top': min + 66 + 'px'
        });
        blocks[index] = min + $(this).outerHeight() + margin;

    });
prevBlocks = blocks;
}

Array.min = function (array) {
    return Math.min.apply(Math, array);
};
let colCount = 0;
let colWidth = 0;
let margin = 20;
let windowWidth = 0;
let marginLeft = 0;
let prevBlocks = [];

export function setupBlocks() {
    margin = 15;
    let blocks = [];
    windowWidth = $(window).width();
    colWidth = $('.Post').outerWidth();
    colCount = Math.floor(windowWidth / (colWidth + margin));
    if (colCount===1)
        colCount++;
    marginLeft = (windowWidth - (colWidth + margin) * colCount) / 2;
    for (let i = 0; i < colCount; i++) {
        blocks.push(margin);
    }
    positionBlocks( '.Post', blocks);
}

export function positionBlocks( selector, blocks) {
    blocks = blocks || prevBlocks;
    $(selector).each(function () {
        let min = Array.min(blocks);
        let index = $.inArray(min, blocks);
        let leftPos = margin + (index * (colWidth + margin));
        $(this).css({
            'left': leftPos + marginLeft + 'px',
            'top': min + 66 + 'px'
        });
        blocks[index] = min + $(this).outerHeight() + margin;
        if ($(this).hasClass('temp')) {
            $(this).removeClass('temp')
        }

    });
    prevBlocks = blocks;

}

Array.min = function (array) {
    return Math.min.apply(Math, array);
};
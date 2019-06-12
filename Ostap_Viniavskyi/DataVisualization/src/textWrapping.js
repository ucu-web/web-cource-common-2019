export const wrapText = (text, width, parent, innerRadius) => {

    const getX = (parent) => {
        if (parent.attr("x")) {
            return parent.attr("x")
        } else if (parent.attr("angle")) {
            return innerRadius + 20
        } else {
            return 0
        }
    };
    const getY = (parent) => {
        if (parent.attr("y")) {
            return parent.attr("y")
        } else if (parent.attr("angle")) {
            if (d.angle > Math.PI) {
                return "rotate(180)"
            } else {
                return -20
            }
        } else {
            return ""
        }
    }


    let words = text.split(/\s/).reverse();
    if (words.length > 1) {
        let word,
            line = [],
            x = getX(parent),
            y = getY(parent),
            dy = 12,
            tspan = parent.text(null).append("tspan").attr("x", x).attr("y", y);
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = parent.append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "px").text(word);
            }
        }
    } else {
        parent.text(text)
    }
};
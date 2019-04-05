const reduce = (init, callable, [h, ...t]) =>
    t.length !== 0 ? reduce(callable(init, h), callable, t) : callable(init, h);

const map = (collection, callable) => reduce([], (a, b) => [...a, callable(b)], collection);

const filter = (collection, callable) => reduce([], (a, b) => callable(b) ? [...a, b] : a, collection);

const compose = (...list_of_func) => input => list_of_func.reduceRight((output, func) => func(output), input);

const pipe = (...list_of_func) => input => reduce(input, (output, func) => func(output), list_of_func);

const curry = (template_function) => function specialized_function(...args) {
    return args.length === template_function.length ? template_function(...args) :
        (...add_args) => specialized_function(...args.concat(add_args))
};

const flip = (func) => (x, y) => func(y, x);

const flatten = (list) => reduce([], (first_part, last_element) =>
    (Array.isArray(last_element)) ? first_part.concat(flatten(last_element)) : [...first_part, last_element], list);

function init_test() {
    const array = [1, 2, 3, 4, 5];
    console.log("Reduce ", reduce(0, (x, y) => x + y, array));

    console.log("Map ", map(array, x => x * x));

    console.log("Filter ", filter(array, x => x % 2));

    console.log("Compose ", compose((x) => x * x, (x) => x / x)(2));

    console.log("Pipe ", pipe((x) => x + x, (x) => x + 10)(2));

    console.log("Curry ", curry((a, b, c) => a + b + c)(4)(5)(1));

    console.log("Flip ", flip((base, exponent) => base ** exponent)(2, 8));

    console.log("Flatten ", flatten([array, [6], [7, 8], [[9]]]));

}

init_test();

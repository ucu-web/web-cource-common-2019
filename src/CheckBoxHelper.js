function CheckBoxHelper(overall, ingredients) {
    overall.addEventListener('click', checkAll);
    let checkedCount = 0;

    function checkAll() {
        (overall.checked) ? checkedCount = ingredients.length : checkedCount = 0;
        ingredients.forEach(ingr => {ingr.checked = overall.checked; ingr.click()});
    }

    ingredients.forEach(ingr => ingr.addEventListener('click', updateDisplay));

    function updateDisplay() {
        console.log('click1');

        checkedCount = 0;
        ingredients.forEach(ingr => checkedCount += ingr.checked);

        if (checkedCount === 0) {
            overall.checked = false;
            overall.indeterminate = false;
        } else if (checkedCount === ingredients.length) {
            overall.checked = true;
            overall.indeterminate = false;
        } else {
            overall.checked = false;
            overall.indeterminate = true;
        }
    }

    function getSelected(elements) {
        let selected = [];
        elements.forEach(elem => {if (elem.querySelector('input[type="checkbox"]').checked) selected.push(elem)});
        return selected;
    }
}

export default CheckBoxHelper;

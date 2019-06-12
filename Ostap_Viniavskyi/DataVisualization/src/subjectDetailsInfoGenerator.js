export const detailsGenerator = (subject, data, container) => {
    const element = document.createElement("div");
    element.className = "chord-plot__details";
    element.innerHTML = `
    <h3 class="chord-plot__laureates-subject">${subject}</h3>
    <h4 class="chord-plot__laureates-organization">${data[0].organization}</h4>
    <div class="chord-plot__laureates">
  </div>
    </div>
    `;
    const laureatesContainer = element.querySelector(".chord-plot__laureates");
    data.forEach((d) => laureatesContainer.appendChild(generateLaureate(d)));
    container.appendChild(element);
};

const generateLaureate = (data) => {
    const element = document.createElement("div");
    element.className = "laureate";
    element.innerHTML = `
        <span class="laureate__name">
          ${data.fullName}
        </span>
        <span class="laureate__info-wrapper">
        <span class="laureate__year">${data.year}</span>
        <span class="laureate__sex">${data.sex}</span>
    </span>
    `;
    return element;
};
export const generateCourse = (data) => {
    const parentElement = document.createElement('article');
    parentElement.className = 'course carousel__course';
    parentElement.innerHTML = `
    <a class="course__course-info">
        <h3 class="course__name">${data.name}</h3>
        <span class="course__provider">${data.organization}</span>
        <h4 class="course__type">${data.type}</h4>
        <span class="course__provider-logo-container">
          <img class="course__provider-logo" src="./static/images/stanford_small_logo.png" alt="Course organizer logo">
        </span>
    </a>
    `;
    return parentElement;
};

export const generateCarousel = (data) => {
    const parentElement = document.createElement('section');
    parentElement.className = 'carousel layout__carousel';
    parentElement.innerHTML = `
    <h2 class="carousel__header">${data.name}</h2>
    <button class="carousel__swap-button carousel__swap-button_left"></button>
    <div class="carousel__courses-wrapper"></div>
    <button class="carousel__swap-button carousel__swap-button_right"></button>
    <nav class="carousel__navigation">
      <button class="carousel__navigation-button carousel__navigation-button_active"></button>
      <button class="carousel__navigation-button"></button>
      <button class="carousel__navigation-button"></button>
    </nav>
    `;
    return parentElement;
};
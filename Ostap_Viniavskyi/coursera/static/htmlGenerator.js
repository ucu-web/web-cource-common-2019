export const generateCourse = (data) => {
    const container = document.createElement('article');
    container.className = 'course carousel__course';
    container.innerHTML = `
    <a class="course__course-info" href="#">
        <h3 class="course__name">${data.name}</h3>
        <span class="course__provider">${data.organization}</span>
        <h4 class="course__type">${data.type}</h4>
        <span class="course__provider-logo-container">
          <img class="course__provider-logo" src="./static/images/stanford_small_logo.png" alt="Course organizer logo">
        </span>
    </a>
    `;
    return container;
};

export const generateCarousel = (data) => {
    const container = document.createElement('section');
    container.className = 'carousel layout__carousel';
    container.innerHTML = `
    <h2 class="carousel__header">${data.name}</h2>
    <button class="carousel__swap-button carousel__swap-button_left"></button>
    <div class="carousel__courses-wrapper"></div>
    <button class="carousel__swap-button carousel__swap-button_right"></button>
    <nav class="carousel__navigation"></nav>
    `;
    return container;
};

export const generateCourseDetails = (data) => {
    const container = document.createElement('article');
    container.className = 'course-details';
    container.innerHTML = `
    <div class="course-details__provider-logo"></div>
    <h3 class="course-details__name">${data.name}</h3>
    <div class="course-details__rating-container"></div>
    <button class="course-details__syllabus-button" aria-label="view syllabus of a course">
        View Syllabus
    </button>
    <div class="course-details__info-container">
        <div class="course-details__info course-details__info_online"> ${data.place}</div>
        <div class="course-details__info course-details__info_level"> ${data.level}</div>
        <div class="course-details__info course-details__info_timings"> ${data.timings}</div>
    </div>
    <div class="course-details__skills">
        <h5 class="course-details__skills-header">
          Top skills you will learn:
        </h5>
        ${data.skills}
    </div>
    `;
    return container;
};
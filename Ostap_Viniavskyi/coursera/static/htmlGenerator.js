export const generateCourse = data => {
  const container = document.createElement("article");
  container.className = "course carousel__course";
  container.style.backgroundImage = 'url(' + data.logoUrl + ')';
  container.innerHTML = `
    <a class="course__course-info" href="#">
        <h3 class="course__name">${data.name}</h3>
        <span class="course__provider">${data.organization}</span>
        <h4 class="course__type">${data.type}</h4>
        <span class="course__provider-logo-container">
          <img class="course__provider-logo" alt="Course organizer logo">
        </span>
    </a>
    `;
  const providerLogo = container.querySelector('.course__provider-logo');
  providerLogo.src = data.providerSmallLogoUrl;
  return container;
};

export const generateCarousel = data => {
  const container = document.createElement("section");
  container.className = "carousel Grid__row";
  container.innerHTML = `
    <div class="Grid__row">
      <h2 class="Grid__cell_14 Grid__cell_push-1">${data.name}</h2>
    </div>
    <div class="Grid__row">
      <button class="carousel__swap-button carousel__swap-button_left Grid__cell_1"></button>
      <div class="carousel__courses-wrapper Grid__cell_14">
        <div class="carousel__courses-movable-wrapper not-selectable"></div>
      </div>
      <button class="carousel__swap-button carousel__swap-button_right Grid__cell_1"></button>
    </div>
    <div class="Grid__row Grid__row--centered-content">
      <nav class="carousel__navigation "></nav>
    </div>
    
    
    `;
  return container;
};

export const generateCourseDetails = data => {
  const container = document.createElement("article");
  container.className = "course-details not-selectable";
  container.innerHTML = `
    <div class="course-details__provider-logo"></div>
    <h3 class="course-details__name">${data.name}</h3>
    <div class="course-details__rating-container">
        <span class="course-details__rating-star"></span>
        <span class="course-details__rating-star"></span>
        <span class="course-details__rating-star"></span>
        <span class="course-details__rating-star"></span>
        <span class="course-details__rating-star"></span>
        <span class="course-details__rating">${data.rating}</span>
        <span class="course-details__votes-number">(${data.votesNumber})</span>
    </div>
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

  if (data.rating) {
    const startsElements = container.querySelectorAll(
      ".course-details__rating-star"
    );
    let rating =
      Math.round(Math.min(startsElements.length, data.rating) * 2) / 2;
    startsElements.forEach(starEl => {
      if (rating >= 1) {
        starEl.classList.add("course-details__rating-star_full");
      } else if (rating >= 0.5) {
        starEl.classList.add("course-details__rating-star_half-empty");
      } else {
        starEl.classList.add("course-details__rating-star_empty");
      }
      rating--;
    });
  }

  const imageContainer = container.querySelector('.course-details__provider-logo');
  imageContainer.style.backgroundImage = 'url(' + data.providerLogoUrl + ')';

  return container;
};

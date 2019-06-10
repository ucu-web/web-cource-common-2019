export const getIndexOfFirstCourseOnPage = (
  currentPage,
  coursesOnPage,
  coursesNumber
) => {
  return (currentPage + 1) * coursesOnPage <= coursesNumber
    ? currentPage * coursesOnPage
    : coursesNumber - coursesOnPage;
};

export const getVisibleCoursesNumber = (
  courseWidth,
  coursesMinDistance,
  containerWidth
) => {
  return Math.max(
    1,
    Math.floor(
      (containerWidth + coursesMinDistance) / (courseWidth + coursesMinDistance)
    )
  );
};

export const getCourseMargin = (
  courseWidth,
  visibleCoursesNumber,
  containerWidth
) => {
  return (
    (containerWidth - visibleCoursesNumber * courseWidth) /
    (2 * visibleCoursesNumber)
  );
};

export const calculateOffset = (
  firstCourseIndex,
  secondCourseIndex,
  singleCourseOffset
) => {
  return (secondCourseIndex - firstCourseIndex) * singleCourseOffset;
};


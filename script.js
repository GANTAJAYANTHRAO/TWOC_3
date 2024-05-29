document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".custom-search-form");
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const searchInput = document.querySelector(".custom-search-input").value.trim().toUpperCase();
        const courses = {
            "HTML": "#html-course",
            "CSS": "#css-course",
            "JS": "#js-course",
            "REACT": "#react-course",
            "JAVA": "#java-course",
            "PYTHON": "#python-course",
            "MYSQL": "#mysql-course",
            "PHP": "#php-course",
            "API": "#api-course",
            "CLOUD COMPUTING": "#cloud-computing-course",
            "ARTIFICIAL INTELLIGENCE": "#ai-course",
            "MACHINE LEARNING": "#ml-course",
            "COMPUTER NETWORKING": "#networking-course",
            "OPERATING SYSTEM": "#os-course"
        };
        const targetCourse = courses[searchInput];
        if (targetCourse) {
            window.location.href = targetCourse;
        } else {
            alert("Course not found!");
        }
    });
});

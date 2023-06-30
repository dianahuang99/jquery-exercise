let movieList = [];
let currId = 0;

$(function () {
  $("#movie-form").on("submit", function (evt) {
    evt.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let newMovie = { title, rating, currId };
    const newMovieHTML = toNewMovieHTML(newMovie);

    currId++;
    movieList.push(newMovie);

    $("#movie-table-body").append(newMovieHTML);
    $("#movie-form").trigger("reset");
  });

  $("tbody").on("click", "#delete-button", function (evt) {
    let removeAtIdx = movieList.findIndex(
      (movie) => movie.currId === +$(evt.target).data("deleteId")
    );
    movieList.splice(removeAtIdx, 1);
    $(evt.target).closest("tr").remove();
  });
});

function toNewMovieHTML(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button id='delete-button' data-delete-id=${data.currId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}

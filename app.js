var url = "https://sheet.best/api/sheets/cb49aab6-348f-4bd3-a698-2fd1a3328929";

// AJAX Request
var leaderBoard = new XMLHttpRequest();
leaderBoard.open("GET", url);
leaderBoard.send();

leaderBoard.addEventListener("load", function (e) {
  var data = e.target.response;
  var response = JSON.parse(data);
  let resultsData = response;

<<<<<<< HEAD
  leaderBoard.addEventListener("load", function (e) {
    var data = e.target.response;
    var response = JSON.parse(data);
    console.log(response.feed.entry);
    for(var i=0; i<response.feed.entry.length; i=i+3)
    {
        
      var container = document.querySelector(".table-content");
      container.innerHTML +=
      '<div class="col-lg-2 col-md-2 col-sm-2 col-xl-2  rank">'+
        response.feed.entry[i].content.$t+
      '</div><hr>'+
      '<div class="col-lg-7 col-md-7 col-sm-7 col-xl-7  name">'+
        response.feed.entry[i+1].content.$t+
      '</div><hr>'+
      '<div class="col-lg-3 col-md-3 col-sm-3 col-xl-3  point">'+
        response.feed.entry[i+2].content.$t+
      '</div><hr>'
        
    }
    
=======
  resultsData.forEach((result) => {
    console.log(result);
    $(".card-content").append(
      `<div>
        ${result.Rank} ${result.Name} ${result.Points}
      </div>`
    );
>>>>>>> 24b23c4d9d4bd2071f45e907817ac891829d3ef1
  });
});

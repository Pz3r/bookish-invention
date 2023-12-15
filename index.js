$(document).ready(function () {
  $("a").click(function (event) {
    alert("Thanks for visiting!");
    event.preventDefault();
  });

  const ROW_NUMBER = 10;
  const COL_NUMBER = 5;

  var data = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [7, 8, 9 ] ];

  var html = '<table class="table"><thead><tr>HEAD</tr></thead><tbody>';
  for (var i = 0, len = data.length; i < len; i++) {
    html += '<tr>';
    for (var j = 0, rowLen = data[i].length; j < rowLen; j++) {
      html += '<td>' + data[i][j] + '</td>';
    }
    html += "</tr>";
  }
  html += '</tbody><tfoot><tr>FOOT</tr></tfoot></table>';

  console.log($.fn.jquery);

  $(html).appendTo('#tableContainer');
});
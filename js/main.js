$(document).ready(function() {
  if(typeof(prettyPrint) == typeof(Function))
    prettyPrint();
});
$('a').on('click', function() {
  ga('send', 'event', 'link', 'click', $(this).text(), $(this).attr("href"));
});
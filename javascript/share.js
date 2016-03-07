$("document").ready(function(){
  $(".tweet").on("click", function(){
    var text = this.text;
    var link = this.href;
    text = text.replace("#", "%23");
    text = text.replace("&", "%26");
    console.log(text);
    this.href = link + text;
  });
});


var lettersOne = false;
var lettersTwo = false;
var word;
var wordCheck;
var letterSplit;

$( document ).ready(function() {
  var wordOne = $(".wordOne");
  var wordTwo = $(".wordTwo");
  var words = $(".words")

  words.mouseenter(function(e) {
    $(e.currentTarget).css("border-bottom","3px solid #FF8E29");
    word = $(e.currentTarget).text();
  })

  words.mouseleave(function(e) {
    words.css("border-bottom","none");  
  })

  wordOne.click(function(e) {
    var x = e.clientX - 25;
    var $this = $(e.currentTarget);
    $(".first").show().html(word).css("left", x + "px");
    wordCheck = $(e.currentTarget).text();
    letterSplit = wordCheck.split("");
      $(".first").empty(); // must empty the div before adding otherwise it will duplicate rather than replace.
      $.each(letterSplit, function(i, l) {
        $(".first").append($("<span class='letterClick'>").text(l)); 
      });
      $(".letterClick").click(function(e){
        lettersOne = true;
        $(e.currentTarget).css("color", "#FF8E29");
        $(e.currentTarget).css("border-bottom","none");       
      });
      if ($this.hasClass('wordOne') && lettersOne === true) {
        $this.removeClass('wordOne').addClass('one');
        $(".first").hide();
      }
      else if ($this.hasClass('one')) {
        $this.removeClass('one').addClass('two');
        $(".first").hide();
      }
      else if ($this.hasClass('two')) {
        $this.removeClass('two').addClass('three');
        $(".first").hide();
      }
      else if ($this.hasClass('three')) {
        $this.removeClass('three').addClass('wordOne');
        lettersOne = false;
      }
    })

wordTwo.click(function(e) {
  var x = e.clientX - 45;
  var $this = $(e.currentTarget);
  $(".second").show().html(word).css("left", x + "px");
  wordCheck = $(e.currentTarget).text();
  letterSplit = wordCheck.split("");
      $(".second").empty(); // must empty the div before adding otherwise it will duplicate rather than replace.
      $.each(letterSplit, function(i, l) {
        $(".second").append($("<span class='letterClick'>").text(l)); 
      });
      $(".letterClick").click(function(e){
        lettersTwo = true;
        $(e.currentTarget).css("color", "#FF8E29");
        $(e.currentTarget).css("border-bottom","none");       
      });
      if ($this.hasClass('wordTwo') && lettersTwo === true) {
        $this.removeClass('wordTwo').addClass('one');
        $(".second").hide();
      }
      else if ($this.hasClass('one')) {
        $this.removeClass('one').addClass('two');
        $(".second").hide();
      }
      else if ($this.hasClass('two')) {
        $this.removeClass('two').addClass('three');
        $(".second").hide();
      }
      else if ($this.hasClass('three')) {
        $this.removeClass('three').addClass('wordTwo');
        lettersTwo = false;
      }
    });
//  seperated logic from both words because it is easier to maintain
});




























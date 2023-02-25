$(function () {
    var $fieldEl = $("#soccer-field");
    var $playerEl = $("#soccer-player");
    var $buttonEl = $("button");
  
    var playerPlay = function (e) {
      if (e.target.classList.contains("disableMovement")) return;
      $playerEl.css({
        top: e.offsetY + "px",
        left: e.offsetX + "px",
      });
  
      if (e.target.classList.contains("disableMovement")) {
        $playerEl.css({
          top: "40px",
          left: "40px",
        });
      }
    };
  
    $fieldEl.on("click", playerPlay);
  
    $buttonEl.on("click", function () {
      $fieldEl.off("click", playerPlay);
    });
  });
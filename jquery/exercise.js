/*Intro
Create a page that is using the jQuery library
Print ‘Hello, world!’ in console when DOM loads*/

$(function () {

    $(document).ready(function helloWorld() {
        console.log('Hello World');
    });


/*Selecting 
Create a page that contains navigation (ul element) 
Navigation should contain odd number of elements
Select the first element of the list and give it a bottom border
Select all list elements and transform their text to uppercase 
Select active element of the list and change its font color
Find the middle one and change its background color*/

    $('li:first').addClass('bottom-boder');

    $('li').css('text-transform', 'uppercase');
    
    $('li:last').addClass('font-color');
  
    $('li:eq(2)').css('color', 'violet');

    //var ln = $('#listId li').length;
    //ln = ln / 2;
    //$("#listId li:eq(" + ln + ")").css('color', 'violet');


    /*Inserting elements
Start with a blank HTML page. Using just JS (jQuery), create an image gallery
All links to images in the gallery should be elements of the same array!
When the gallery is created and visible on the page, create gallery title and insert it before the gallery images
Go through gallery images and set a random size to each gallery image
Bonus: Set a green border around each image whose width is less than 200px up until the first one that doesn't meet that requirement (i.e. when you get to the first img that is more than 200px wide, stop checking and setting green border).
*/

$(function () {
    var $galeryContainer = $("<div></div>");
    $galeryContainer.addClass(".gallery");
    $("body").append($galeryContainer);
    $galeryContainer.prepend("<h2>Gallery Title</h2>");
    $galeryContainer.find("h2").css({
      marginLeft: "50%",
      transform: "translateX(-15%)",
    });
  
    function addImmg(node, imgUrl) {
      $img = $("<img/>");
      $img.attr("src", imgUrl);
      node.append($img);
    }
  
    var imgUrlarr = [
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/640w/products/1063/3426/Gossip-men-in-black-Covered-Wallpaper-Abnormals-Anonymous-400x400__71318.1643827509.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/1280x1280/products/1512/3500/Rifle-wallpaper-hawthorne-blue_green-ri5132ex_1__63599.1609687751.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/640w/products/1231/3981/holden-blues-traveler-Covered-Wallpaper-Abnormals-Anonymous-400x400__38504.1643828140.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/1280x1280/products/1388/2784/khandar_pink__64019.1550248052.png?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/1280x1280/products/1465/3296/longtailed-tit-wallpaper-swatch-syson__38061.1578004897.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/640w/products/1549/3633/Goldcrest-Wallpaper-swatch__81090.1618503557.jpg?c=2",
    ];
  
    imgUrlarr.forEach(function (el) {
      addImmg($galeryContainer, el);
    });
  
    function setWidthAndHight() {
      return Math.round(Math.random() * (750 - 150 + 1) + 150);
    }
  
    $galeryContainer.find("img").each(function (index, el) {
      var newEl = $(el);
      newEl.height(setWidthAndHight());
      newEl.width(setWidthAndHight());
  
      if (newEl.width() < 250) {
        newEl.css({
          border: "3px solid green",
        });
      }
    });
  });
    
  $(function () {
    var $galeryContainer = $("<div></div>");
    $galeryContainer.addClass(".gallery");
    $("body").append($galeryContainer);
    $galeryContainer.prepend("<h2>Gallery Title</h2>");
    $galeryContainer.find("h2").css({
      marginLeft: "50%",
      transform: "translateX(-15%)",
    });
  
    function addImmg(node, imgUrl) {
      $img = $("<img/>");
      $img.attr("src", imgUrl);
      node.append($img);
    }
  
    var imgUrlarr = [
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/640w/products/1595/3845/Juniper_Forest_Rifle_removable_evergreen_Covered_Wallpaper_psw1197rl_650x__34023.1632244756.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/640w/products/1464/3294/bullfinch-wallpaper-swatch-syson__63016.1578002505.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/640w/products/1615/3944/TFC_Daphne_install_Covered_Wallpaper_SP1531__06261.1642522407.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/640w/products/1010/2307/ChicagoMexicoCityAgave__45045.1461610296.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/1280x1280/products/1516/3519/Rifle-wallpaper-camont-intall-ri5109__75368.1609693217.jpg?c=2",
      "https://cdn11.bigcommerce.com/s-0de3a/images/stencil/640w/products/1559/3682/freida-rose-wallpaper-square-abigail-borg__02573.1622648147.jpg?c=2",
    ];
  
    imgUrlarr.forEach(function (el) {
      addImmg($galeryContainer, el);
    });
  
    function setWidthAndHight() {
      return Math.round(Math.random() * (750 - 150 + 1) + 150);
    }
  
    $galeryContainer.find("img").each(function (index, el) {
      var newEl = $(el);
      newEl.height(setWidthAndHight());
      newEl.width(setWidthAndHight());
  
      if (newEl.width() < 250) {
        newEl.css({
          border: "3px solid green",
        });
      }
    });
  });
  
  //   $img = $("<img/>");
  //   console.log(
  //     $img.attr(
  //       "src",
  //       "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600"
  //     )
  //   );
  //   $galeryContainer.append($img);
  
  //   addImmg(
  //     $galeryContainer,
  //     "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600"
  //   );
  
  //   When the gallery is created and visible on the page, create gallery title and
  //   insert it before the gallery images
    
});
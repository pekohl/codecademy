(function($, document, window) {
  // create a map of selectors
  //    map meaning a data structure which stores values via a unique key
  //    here the values are the class name selectors
  var selectors {
    article: '.article',
    description: '.description'
  };
  
  var currentCls = "current";
  
  // jQuery objects are prefixed with "$" so you don't accidentally
  //      try to wrap them as a jQuery object again
  var $article = $(selectors.article);
  var $description = $(selectors.description);
  
  // bind your action handler here (i.e. click)
  $article.click(function(evt) {
    var $node = $(evt.currentTarget);

    $article.removeClass(currentCls);
    $description.hide();
    
    // use the current element (based on the click) to 
    //      add the current class and show the description
    $node.addClass(currentCls);
    $node.find(selectors.description).show();
  });
  
})(jQuery, document, window, undefined);
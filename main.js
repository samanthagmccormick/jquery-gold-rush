
$(document).on('ready', function() {

  // On click within the document, place the marker
	$(document).on('click', function(e) {
  		var marker = $("<div><img class='the-marker' src='http://www.clker.com/cliparts/j/4/u/5/C/k/marker.svg'></div>");
  		$(".container").append(marker);
  		marker.css ({
    			position: "absolute",
    			left: e.pageX,
    			top: e.pageY
  		});

      // Append a text box to the marker
  		var message = $('<div><textarea class = "note" placeholder="Enter a note for this marker:"></textarea><button>Submit</button></div>');
  		marker.append(message);

      // Auto-docus the textarea
  		$("textarea").focus();
  	});

    // On click of Submit button....
  	$(document).on('click', 'button', function(e) {
    		var savedValue = $(".note").val();  // Store the value into a variable
        $(this).parent().remove();   // Remove the text box
        $(".the-marker").parent().append("<div class = 'note'>" + savedValue + "</div>"); // Append the savedValue after the marker
  	 	  $(".note").hide();  // Now hide the savedValue until later when you mouse over

        // stop previous click event to keep generating when you click submit
        // $(this).stopPropagation();
  	});

    $(document).on('mouseenter', '.the-marker', function() {
        // $(this).closest('div').find('div').show();
        $(".note").show();   // Now show the savedValue
    });

    // On click of existing 'the-marker', remove the marker and remove the textbox
    $(document).on('click', '.the-marker', function(e) {
        // Remove the parent (the entire div holding everything)
        $(this).parent().remove();    
        e.stopPropagation();
    });


});	
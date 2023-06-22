//WORKING
// $(document).ready(function() {
//   const iframe = $('.h5p-iframe');

//   // Wait for the iframe to load
//   iframe.on('load', function() {
//     // The iframe has loaded, now we can access its contents
//     const iframeContents = iframe.contents();

//     // Set up an event listener for changes within the iframe
//     iframeContents.on('DOMNodeInserted', '.h5p-personality-quiz.h5p-personality-quiz-personality', function() {
//       // The desired div has been inserted, do something with it
//       const div = $(this);
//       console.log('Div inserted:', div);

      

//     });
//   });
// });




$(document).ready(function() {
  var iframe = $('.h5p-iframe');

  // Wait for the iframe to load
  iframe.on('load', function() {
    // The iframe has loaded, now we can access its contents
    var iframeContents = iframe.contents();

    // Set up an event listener for changes within the iframe
    iframeContents.on('DOMNodeInserted', '.h5p-personality-quiz.h5p-personality-quiz-personality', function() {
      // The desired div has been inserted, do something with it
      var div = $(this);
      console.log('Div inserted:', div);

      // Find the specific div and check for the H2 tag content
      var personalityDiv = iframeContents.find('.h5p-personality-quiz.h5p-personality-quiz-personality');
      var h2Text = personalityDiv.find('h2').text().trim();

      // Check if the button has already been appended (Prevent repeat)
      var button1Exists = personalityDiv.find('.char-1').length > 0;
      var button2Exists = personalityDiv.find('.char-2').length > 0;
      var button3Exists = personalityDiv.find('.char-3').length > 0;

      // Append the button if it doesn't exist and the H2 text matches
      if (!button1Exists && h2Text === 'Character 1 - The firefighter') {
        personalityDiv.append('<button class="h5p-personality-quiz h5p-personality-quiz-button h5p-personality-quiz-retake-button char-1" href="https://elearning.sedihub.eu/mod/scorm/player.php?a=1&currentorg=articulate_rise&scoid=2">Go to Character 1</button>');
        
      } else if (!button2Exists && h2Text === 'Character 2 - The Designer') {
        personalityDiv.append('<button class="h5p-personality-quiz h5p-personality-quiz-button h5p-personality-quiz-retake-button char-2" href="https://elearning.sedihub.eu/mod/scorm/player.php?a=2&currentorg=articulate_rise&scoid=4">Go to Character 2</button>');
        
      } else if(!button3Exists && h2Text === 'Character 3 - The Business owner') {
        personalityDiv.append('<button class="h5p-personality-quiz h5p-personality-quiz-button h5p-personality-quiz-retake-button char-3" href="https://elearning.sedihub.eu/mod/scorm/player.php?a=3&currentorg=articulate_rise&scoid=6">Go to Character 3</button>');
        
      }
    });
  });
});

(function() {
      var quotes = [
        {
          text: "'I never sleep, 'cause sleep is the cousin of death'",
          author: "Nas"
        },
        {
          text: "'Name one genius that ain't crazy'",
          author: "Kanye"
        },
        {
          text: "'5 more minutes'",
          author: "Me this morning"
        },
        {
          text: "The Person Who Says It Cannot Be Done Should Not Interrupt The Person Who Is Doing It.",
          author: "Chinese Proverb";
        }
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML =
        quote.text;
      document.getElementById("author").innerHTML =
        quote.author;
    })();

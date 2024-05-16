document.addEventListener("DOMContentLoaded", function () {
  const pollForm = 
      document.getElementById("poll-form");
  const tanzaniaCount = 
      document.getElementById("tanzania-count");
  const indonesiaCount = 
      document.getElementById("indonesia-count");
  const madagascarCount = 
      document.getElementById("madagascar-count");
  let tanzaniaVotes = 0;
  let indonesiaVotes = 0;
  let madagascarVotes = 0;

  pollForm.addEventListener("submit", function (e) {

      // It will help to prevent the submission of 
      // form, so that following code can execute
      e.preventDefault();
      const formData = new FormData(pollForm);
      const userVote = formData.get("vote");

      if (userVote === "Tanzania") {
          tanzaniaVotes++;
      } else if (userVote === "Indonesia") {
          indonesiaVotes++;
      } else if (userVote === "Madagascar") {
          madagascarVotes++;
      }
      updateResults();
  });

  function updateResults() {
      tanzaniaCount.textContent = tanzaniaVotes;
      indonesiaCount.textContent = indonesiaVotes;
      madagascarCount.textContent = madagascarVotes;
  }
});

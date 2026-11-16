"use strict";
document.querySelector(".cta-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#cta-status").textContent = "このチェックリストを、ご自身の次の発信に当てはめてみてください。";
});

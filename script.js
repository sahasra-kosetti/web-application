function checkFakeNews() {
  const text = document.getElementById("newsInput").value.toLowerCase();
  const result = document.getElementById("result");

  if (!text.trim()) {
    result.innerHTML = "⚠️ Please enter some text.";
    result.style.background = "#fff3cd";
    result.style.color = "#856404";
    return;
  }

  const scamKeywords = [
    "lottery", "prize", "winner", "urgent", 
    "click here", "password", "bank", "otp", 
    "bitcoin", "investment"
  ];

  const fakeIndicators = scamKeywords.filter(word => text.includes(word));

  if (fakeIndicators.length > 0) {
    result.innerHTML = `🚨 Warning: Possible scam or fake news detected! <br> Keywords found: ${fakeIndicators.join(", ")}`;
    result.style.background = "#f8d7da";
    result.style.color = "#721c24";
  } else {
    result.innerHTML = "✅ This text seems safe (no common scam indicators found).";
    result.style.background = "#d4edda";
    result.style.color = "#155724";
  }
}

const input = document.getElementById("newsInput");
const checkBtn = document.querySelector("button");

checkBtn.disabled = !input.value.trim();
input.addEventListener("input", () => {
  checkBtn.disabled = !input.value.trim();
});

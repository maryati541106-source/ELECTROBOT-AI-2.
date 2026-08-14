// ================================
// ELECTROBOT AI
// TVET Electrical Learning Chatbot
// ================================


// ================================
// MENU TELEFON
// ================================

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}


// ================================
// MODAL NOTA
// ================================

function showInfo(topic) {

  const modal = document.getElementById("modal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  const notes = {

    "Bekalan elektrik":
      "Bekalan satu fasa biasanya digunakan untuk beban domestik, manakala bekalan tiga fasa banyak digunakan untuk beban yang lebih besar seperti motor elektrik. Voltan, arus dan kuasa perlu difahami sebelum melakukan kerja elektrik.",

    "Simbol elektrik":
      "Simbol elektrik digunakan dalam lukisan dan rajah litar untuk mewakili komponen seperti suis, lampu, soket, motor, fius dan perlindungan litar.",

    "MCB dan RCCB":
      "MCB berfungsi melindungi litar daripada arus berlebihan dan litar pintas. RCCB pula membantu mengesan kebocoran arus ke bumi bagi meningkatkan keselamatan pengguna.",

    "Motor elektrik":
      "Motor elektrik menukarkan tenaga elektrik kepada tenaga mekanikal. Sebelum melakukan kerja amali, pastikan bekalan diasingkan dan prosedur keselamatan dipatuhi.",

    "Pendawaian domestik":
      "Pendawaian domestik melibatkan pemasangan seperti lampu, suis dan soket. Kerja pendawaian sebenar hendaklah dilakukan mengikut prosedur dan oleh orang yang kompeten.",

    "Keselamatan bengkel":
      "Gunakan PPE yang sesuai, pastikan kawasan kerja kemas, asingkan bekalan elektrik sebelum kerja penyelenggaraan dan jangan menggunakan peralatan yang rosak."
  };

  title.innerText = topic;
  text.innerText = notes[topic] || "Nota belum tersedia.";

  modal.style.display = "grid";
}


function hideModal() {
  document.getElementById("modal").style.display = "none";
}


function closeModal(event) {

  if (event.target.id === "modal") {
    hideModal();
  }

}


// ================================
// TROUBLESHOOTING
// ================================

function diagnose() {

  const problem =
    document.getElementById("problem").value.toLowerCase().trim();

  const diagnosis =
    document.getElementById("diagnosis");

  if (problem === "") {

    diagnosis.style.display = "block";

    diagnosis.innerHTML =
      "⚠️ Sila taip masalah terlebih dahulu.";

    return;
  }


  let answer = "";


  if (
    problem.includes("motor") &&
    (
      problem.includes("tak berpusing") ||
      problem.includes("tidak berpusing") ||
      problem.includes("tak jalan") ||
      problem.includes("tidak jalan")
    )
  ) {

    answer = `
      🤖 <strong>Panduan ELECTROBOT AI:</strong><br><br>

      1. Pastikan bekalan kuasa tersedia.<br>
      2. Periksa MCB dan perlindungan litar.<br>
      3. Periksa sambungan motor.<br>
      4. Periksa contactor.<br>
      5. Periksa overload relay.<br>
      6. Periksa litar kawalan.<br><br>

      ⚠️ Pastikan bekalan diasingkan sebelum pemeriksaan fizikal.
    `;

  }


  else if (
    problem.includes("lampu") &&
    (
      problem.includes("tak menyala") ||
      problem.includes("tidak menyala")
    )
  ) {

    answer = `
      🤖 <strong>Panduan ELECTROBOT AI:</strong><br><br>

      1. Periksa bekalan kuasa.<br>
      2. Periksa suis.<br>
      3. Periksa sambungan wayar.<br>
      4. Periksa mentol/lampu.<br>
      5. Periksa MCB.<br><br>

      ⚠️ Jangan menyentuh konduktor hidup.
    `;

  }


  else if (
    problem.includes("rccb") &&
    (
      problem.includes("trip") ||
      problem.includes("jatuh")
    )
  ) {

    answer = `
      🤖 <strong>Panduan ELECTROBOT AI:</strong><br><br>

      RCCB yang kerap trip mungkin menunjukkan kebocoran arus
      ke bumi.<br><br>

      Periksa:<br>
      • Peralatan elektrik<br>
      • Kabel<br>
      • Sambungan<br>
      • Kemungkinan kebocoran ke bumi<br><br>

      ⚠️ Jangan bypass RCCB. Dapatkan pemeriksaan guru atau orang kompeten.
    `;

  }


  else {

    answer = `
      🤖 ELECTROBOT AI mencadangkan semakan berikut:<br><br>

      1. Periksa bekalan kuasa.<br>
      2. Periksa MCB/RCCB.<br>
      3. Periksa sambungan litar.<br>
      4. Periksa komponen yang berkaitan.<br>
      5. Rujuk guru sebelum melakukan kerja sebenar.<br><br>

      💡 Cuba masukkan masalah dengan lebih spesifik.
    `;

  }


  diagnosis.style.display = "block";
  diagnosis.innerHTML = answer;
}


// ================================
// KUIZ
// ================================

const quizQuestions = [

  {
    question: "Apakah fungsi utama MCB?",
    options: [
      "Mengukur voltan",
      "Melindungi litar daripada arus berlebihan",
      "Menghasilkan tenaga elektrik",
      "Mengawal kelajuan motor"
    ],
    answer: 1
  },

  {
    question: "Apakah unit bagi arus elektrik?",
    options: [
      "Volt",
      "Ohm",
      "Ampere",
      "Watt"
    ],
    answer: 2
  },

  {
    question: "Apakah fungsi RCCB?",
    options: [
      "Mengesan kebocoran arus",
      "Mengukur rintangan",
      "Menghidupkan motor",
      "Menghasilkan voltan"
    ],
    answer: 0
  },

  {
    question: "Apakah unit bagi rintangan?",
    options: [
      "Ampere",
      "Volt",
      "Watt",
      "Ohm"
    ],
    answer: 3
  },

  {
    question: "Apakah alat yang digunakan untuk mengukur voltan?",
    options: [
      "Voltmeter",
      "Ammeter",
      "Ohmmeter",
      "Wattmeter"
    ],
    answer: 0
  },

  {
    question: "Apakah fungsi contactor?",
    options: [
      "Mengawal beban elektrik",
      "Mengukur arus",
      "Mengukur voltan",
      "Menghasilkan cahaya"
    ],
    answer: 0
  },

  {
    question: "Apakah PPE yang sesuai digunakan semasa kerja elektrik?",
    options: [
      "Selipar",
      "Sarung tangan keselamatan yang sesuai",
      "Barang kemas",
      "Pakaian longgar"
    ],
    answer: 1
  },

  {
    question: "Apakah fungsi overload relay?",
    options: [
      "Melindungi motor daripada beban berlebihan",
      "Mengukur voltan",
      "Menghasilkan tenaga",
      "Menghidupkan lampu"
    ],
    answer: 0
  },

  {
    question: "Formula Hukum Ohm ialah:",
    options: [
      "V = I × R",
      "P = V + I",
      "I = V + R",
      "R = V + I"
    ],
    answer: 0
  },

  {
    question: "Apakah tindakan pertama sebelum melakukan kerja penyelenggaraan elektrik?",
    options: [
      "Sentuh wayar",
      "Hidupkan bekalan",
      "Asingkan bekalan elektrik mengikut prosedur",
      "Buka semua komponen"
    ],
    answer: 2
  }

];


let currentQuestion = 0;
let score = 0;
let selected = false;


// Paparkan soalan pertama

function loadQuestion() {

  const question =
    quizQuestions[currentQuestion];

  document.getElementById("qnum").innerText =
    `Soalan ${currentQuestion + 1} / ${quizQuestions.length}`;

  document.getElementById("question").innerText =
    question.question;

  const options =
    document.getElementById("options");

  options.innerHTML = "";

  selected = false;

  document.getElementById("nextBtn").disabled = true;


  question.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.className = "option";

    button.innerText =
      option;

    button.onclick = function() {

      selectAnswer(index, button);

    };

    options.appendChild(button);

  });

}


function selectAnswer(index, button) {

  if (selected) return;

  selected = true;

  const correct =
    quizQuestions[currentQuestion].answer;

  const allOptions =
    document.querySelectorAll(".option");


  allOptions.forEach((option, i) => {

    if (i === correct) {
      option.classList.add("correct");
    }

  });


  if (index === correct) {

    score++;

    document.getElementById("score").innerText =
      score;

  }

  else {

    button.classList.add("wrong");

  }


  document.getElementById("nextBtn").disabled =
    false;

}


function nextQuestion() {

  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {

    loadQuestion();

  }

  else {

    showQuizResult();

  }

}


function showQuizResult() {

  document.getElementById("question").innerText =
    "🎉 Kuiz Tamat!";

  document.getElementById("options").innerHTML = "";

  document.getElementById("nextBtn").style.display =
    "none";


  let message = "";

  if (score >= 8) {
    message = "🏆 Cemerlang! Penguasaan anda sangat baik.";
  }

  else if (score >= 5) {
    message = "👍 Bagus! Teruskan ulang kaji.";
  }

  else {
    message = "📚 Jangan risau. Cuba ulang kaji dan cuba lagi.";
  }


  document.getElementById("quizResult").innerHTML = `
    <h3>${message}</h3>
    <p>Markah anda: <strong>${score} / ${quizQuestions.length}</strong></p>
    <br>
    <button class="btn primary" onclick="restartQuiz()">
      🔄 Cuba Lagi
    </button>
  `;
}


function restartQuiz() {

  currentQuestion = 0;
  score = 0;

  document.getElementById("score").innerText = "0";

  document.getElementById("nextBtn").style.display =
    "inline-flex";

  document.getElementById("quizResult").innerHTML = "";

  loadQuestion();

}


// ================================
// CHATBOT ELECTROBOT
// ================================

function ask(question) {

  document.getElementById("chatInput").value =
    question;

  sendMessage();

}


function sendMessage() {

  const input =
    document.getElementById("chatInput");

  const message =
    input.value.trim();

  if (message === "") return;


  const messages =
    document.getElementById("chatMessages");


  // Soalan pengguna

  const userMsg =
    document.createElement("div");

  userMsg.className =
    "msg user";

  userMsg.innerHTML =
    `<b>Anda 👨‍🎓</b><br>${message}`;

  messages.appendChild(userMsg);


  // Jawapan ELECTROBOT

  const answer =
    getBotAnswer(message);


  setTimeout(() => {

    const botMsg =
      document.createElement("div");

    botMsg.className =
      "msg bot";

    botMsg.innerHTML =
      `<b>ELECTROBOT AI 🤖</b><br>${answer}`;

    messages.appendChild(botMsg);

    messages.scrollTop =
      messages.scrollHeight;

  }, 400);


  input.value = "";

}


function getBotAnswer(message) {

  const q =
    message.toLowerCase();


  if (q.includes("rccb")) {

    return `
      RCCB ialah <strong>Residual Current Circuit Breaker</strong>.
      Ia mengesan kebocoran arus ke bumi dan membantu melindungi
      pengguna daripada risiko renjatan elektrik.
    `;

  }


  if (q.includes("mcb")) {

    return `
      MCB atau <strong>Miniature Circuit Breaker</strong>
      melindungi litar daripada arus berlebihan dan litar pintas.
    `;

  }


  if (
    q.includes("motor") &&
    (
      q.includes("tak") ||
      q.includes("tidak") ||
      q.includes("berpusing")
    )
  ) {

    return `
      Jika motor tidak berpusing, semak bekalan kuasa,
      MCB, contactor, overload relay, sambungan motor
      dan litar kawalan. ⚠️ Pastikan bekalan diasingkan
      sebelum pemeriksaan.
    `;

  }


  if (q.includes("voltan")) {

    return `
      Voltan ialah beza keupayaan elektrik yang menyebabkan
      arus dapat mengalir dalam litar. Unitnya ialah
      <strong>Volt (V)</strong>.
    `;

  }


  if (q.includes("arus")) {

    return `
      Arus elektrik ialah kadar aliran cas elektrik dalam
      litar. Unit arus ialah <strong>Ampere (A)</strong>.
    `;

  }


  if (
    q.includes("rintangan") ||
    q.includes("resistance")
  ) {

    return `
      Rintangan ialah sifat sesuatu bahan yang menghalang
      aliran arus elektrik. Unitnya ialah <strong>Ohm (Ω)</strong>.
    `;

  }


  if (
    q.includes("ohm") &&
    (
      q.includes("hukum") ||
      q.includes("formula")
    )
  ) {

    return `
      Hukum Ohm ialah:<br><br>
      <strong>V = I × R</strong><br><br>
      V = Voltan<br>
      I = Arus<br>
      R = Rintangan
    `;

  }


  if (
    q.includes("keselamatan") ||
    q.includes("ppe")
  ) {

    return `
      Keselamatan elektrik sangat penting. Gunakan PPE yang
      sesuai, asingkan bekalan sebelum kerja, pastikan kawasan
      kerja selamat dan dapatkan bimbingan guru atau orang kompeten.
    `;

  }


  if (q.includes("contactor")) {

    return `
      Contactor ialah peranti elektromekanikal yang digunakan
      untuk mengawal beban elektrik seperti motor.
    `;

  }


  if (
    q.includes("overload") ||
    q.includes("ol relay")
  ) {

    return `
      Overload relay melindungi motor daripada keadaan beban
      berlebihan yang berpanjangan.
    `;

  }


  if (
    q.includes("hai") ||
    q.includes("hello") ||
    q.includes("assalamualaikum")
  ) {

    return `
      Hai! 👋 Saya ELECTROBOT AI 🤖.
      Apa yang anda ingin belajar hari ini?
    `;

  }


  return `
    🤖 Saya masih belajar tentang soalan tersebut.
    <br><br>
    Cuba tanya saya tentang:
    <br>
    ⚡ MCB
    <br>
    🛡️ RCCB
    <br>
    🔧 Motor
    <br>
    ⚙️ Contactor
    <br>
    🦺 Keselamatan elektrik
    <br>
    📐 Hukum Ohm
  `;

}


// ================================
// MULAKAN KUIZ
// ================================

document.addEventListener("DOMContentLoaded", function() {

  loadQuestion();

});
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero button interaction
const heroBtn = document.querySelector('.hero-btn');
heroBtn.addEventListener('click', () => {
  alert("Welcome to EduLinkNaija! Let's learn something new today 🚀");
});
// ==========================
// DYNAMIC BOOKS SECTION
// ==========================
const books = [
  {
    title: "Mathematics for Senior Secondary 1",
    desc: "A complete math textbook for students in SS1, covering algebra, geometry, and statistics.",
    file: "pdfs/Mathematics_SS1.pdf"
  },
  {
    title: "Basic Physics Handbook",
    desc: "An easy-to-understand guide to physics principles with real-life examples.",
    file: "pdfs/Basic_Physics.pdf"
  },
  {
    title: "English Grammar Essentials",
    desc: "A detailed book for mastering English grammar and writing.",
    file: "pdfs/English_Grammar.pdf"
  }
];

// Check if we're on freebooks.html
if (document.getElementById("book-container")) {
  const bookContainer = document.getElementById("book-container");
  
  books.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book-card");
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.desc}</p>
      <a href="${_OceanofPDF.com_All_Tied_Up_-_Kati_Rae - Copy.file}" target="_blank">View PDF</a>
    `;
    bookContainer.appendChild(div);
  });
}

// freebooks
// ==========================
// UPLOAD & DISPLAY BOOKS
// ==========================
const bookContainer = document.getElementById("book-container");
const uploadForm = document.getElementById("uploadForm");

// Load previously uploaded books from localStorage
let uploadedBooks = JSON.parse(localStorage.getItem("uploadedBooks")) || [];

// Function to display a single book card
function displayBook(book) {
  const div = document.createElement("div");
  div.classList.add("book-card");
  div.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.desc}</p>
    <a href="${book.file}" target="_blank">View PDF</a>
    <a href="${book.file}" download>Download</a>
  `;
  bookContainer.appendChild(div);
}

// Load existing books on page load
if (bookContainer) {
  uploadedBooks.forEach(displayBook);
}

// Handle uploads
if (uploadForm) {
  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("bookTitle").value;
    const desc = document.getElementById("bookDesc").value;
    const fileInput = document.getElementById("bookFile");

    const file = fileInput.files[0];
    if (!file) return alert("Please select a PDF file.");

    // Create a temporary local URL for the PDF
    const fileURL = URL.createObjectURL(file);

    const newBook = {
      title: title,
      desc: desc,
      file: fileURL
    };

    // Add to display and save to localStorage
    displayBook(newBook);
    uploadedBooks.push(newBook);
    localStorage.setItem("uploadedBooks", JSON.stringify(uploadedBooks));

    // Clear form
    uploadForm.reset();

    alert("Book uploaded successfully!");
  });
}


// Handle Upload Functionality
document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('bookTitle').value;
  const file = document.getElementById('bookFile').files[0];
  const container = document.getElementById('book-container');
  const message = document.getElementById('uploadMessage');

  if (!file || file.type !== "application/pdf") {
    message.textContent = "Please upload a valid PDF file.";
    message.style.color = "red";
    return;
  }

  const fileURL = URL.createObjectURL(file);

  const newBook = document.createElement('div');
  newBook.classList.add('book-card');
  newBook.innerHTML = `
    <iframe src="${fileURL}" frameborder="0"></iframe>
    <h3>${title}</h3>
    <a href="${fileURL}" download>Download</a>
  `;

  container.appendChild(newBook);
  message.textContent = "Book uploaded successfully!";
  message.style.color = "lime";

  document.getElementById('uploadForm').reset();
const subjects = {
  math: [
    { q: "Simplify: 2x + 3x", options: ["4x", "5x", "6x", "2x"], answer: "5x" },
    { q: "Solve: 5 × 6", options: ["11", "30", "20", "36"], answer: "30" }
  ],
  english: [
    { q: "Choose the correct spelling:", options: ["Recieve", "Receive", "Receeve", "Recive"], answer: "Receive" },
    { q: "What is the opposite of 'Ancient'?", options: ["Modern", "Old", "Historic", "Past"], answer: "Modern" }
  ],
  physics: [
    { q: "Unit of Power?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Watt" },
    { q: "Speed of light?", options: ["3×10⁸ m/s", "2×10⁸ m/s", "3×10⁶ m/s", "1×10⁸ m/s"], answer: "3×10⁸ m/s" }
  ],
  chemistry: [
    { q: "Symbol for Sodium?", options: ["S", "Na", "Sn", "So"], answer: "Na" },
    { q: "Water formula?", options: ["H₂O", "HO₂", "H₃O", "OH₂"], answer: "H₂O" }
  ]
};

const subjectBtns = document.querySelectorAll('.subject-btn');
const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');
const uploadInput = document.getElementById('quiz-upload');

let currentSubject = null;
let currentIndex = 0;
let score = 0;

//// Sample quizzes for each subject
const quizzes = {
  maths: [
    { q: "What is 12 × 8?", options: ["96", "88", "108", "86"], answer: "96" },
    { q: "Solve: 5² + 7² =", options: ["74", "49", "50", "25"], answer: "74" },
  ],
  english: [
    { q: "Choose the correct spelling:", options: ["Recieve", "Receive", "Receeve", "Receave"], answer: "Receive" },
    { q: "‘She sings beautifully’ — identify the adverb:", options: ["She", "sings", "beautifully", "None"], answer: "beautifully" },
  ],
  physics: [
    { q: "What is the unit of Force?", options: ["Joule", "Pascal", "Newton", "Watt"], answer: "Newton" },
    { q: "Acceleration is rate of change of?", options: ["Displacement", "Velocity", "Time", "Energy"], answer: "Velocity" },
  ],
  chemistry: [
    { q: "H₂O is the chemical formula for?", options: ["Salt", "Water", "Hydrogen", "Oxygen"], answer: "Water" },
    { q: "Atomic number represents?", options: ["Neutrons", "Electrons", "Protons", "Isotopes"], answer: "Protons" },
  ],
};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreSection = document.getElementById("score-section");
const scoreEl = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");

document.querySelectorAll(".subject-btn").forEach(btn => {
  btn.addEventListener("click", () => startQuiz(btn.dataset.subject));
});

function startQuiz(subject) {
  currentQuiz = quizzes[subject];
  currentIndex = 0;
  score = 0;
  scoreSection.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = currentQuiz[currentIndex];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => checkAnswer(opt, q.answer));
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong! Correct answer: " + correct);
  }
  nextQuestion();
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizContainer.style.display = "none";
  scoreSection.style.display = "block";
  scoreEl.textContent = `${score} / ${currentQuiz.length}`;
}

document.getElementById("restartBtn").addEventListener("click", () => {
  quizContainer.style.display = "none";
  scoreSection.style.display = "none";
});

// Upload feature
document.getElementById("uploadBtn").addEventListener("click", () => {
  const fileInput = document.getElementById("quizUpload");
  const file = fileInput.files[0];
  if (!file) return alert("Please select a JSON file first!");
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const newQuiz = JSON.parse(e.target.result);
      if (newQuiz.subject && newQuiz.questions) {
        quizzes[newQuiz.subject.toLowerCase()] = newQuiz.questions;
        alert("✅ Quiz uploaded successfully!");
      } else {
        alert("Invalid file structure. Please use {subject:'maths', questions:[...] }");
      }
    } catch {
      alert("Error reading file.");
    }
  };
  reader.readAsText(file);
});
  const leaderboarddocument.addEventListener("DOMContentLoaded", () => {
Data = [
    { name: "Samuel Onazi", subject: "Mathematics", score: 98 },
    { name: "Rafa Mendes", subject: "Physics", score: 95 },
    { name: "Aidan Vale", subject: "Chemistry", score: 90 },
    { name: "Amara Ibeh", subject: "English", score: 87 },
    { name: "Luka Vranić", subject: "Mathematics", score: 85 }
  ];

  // Sort by score descending
  leaderboardData.sort((a, b) => b.score - a.score);

  const tbody = document.getElementById("leaderboard-body");

  leaderboardData.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>#${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.subject}</td>
      <td>${student.score}</td>
    `;
    row.style.opacity = 0;
    tbody.appendChild(row);

    // Animate rows as they appear
    setTimeout(() => {
      row.style.transition = "opacity 0.8s ease-in";
      row.style.opacity = 1;
    }, 200 * index);
  });
});

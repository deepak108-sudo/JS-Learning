# 🧮 JavaScript Mini Calculator

A simple and clean calculator built using **HTML**, **CSS**, and **JavaScript**.  
This mini-project performs basic addition by taking two input numbers and displaying the result instantly when the user clicks the **Calculate** button.

---

## 📸 Preview

![Calculator Screenshot](.images/image.png)

---

## 🚀 Features

- ➕ Add two numbers
- 🎨 Simple and elegant UI design
- ⚡ Real-time input handling with JavaScript
- 📱 Fully responsive layout
- 🧩 Beginner-friendly code structure

---

## 📂 Project Structure

```
/calculator-project
│── index.html      # Structure of the UI
│── style.css       # Styling for layout & design
│── script.js       # JavaScript logic (addition)
│── screenshot.png  # UI preview (optional)
└── README.md       # Documentation
```

---

## 🛠 Technologies Used

- **HTML5** – Layout and structure  
- **CSS3** – Styling and UI effects  
- **JavaScript (Vanilla JS)** – Calculator logic  

---

## 🔧 How It Works

1. User enters **First Number**
2. User enters **Second Number**
3. Clicking **Calculate** triggers the JavaScript function
4. The script reads both values using `document.getElementById()`
5. Converts them into numbers using `Number()`
6. Outputs the sum into the *Result* input field

---

## 📜 Code Snippet (JavaScript)

```js
const first = document.getElementById("first");
const second = document.getElementById("second");
const result = document.getElementById("result");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let a = Number(first.value);
  let b = Number(second.value);

  result.value = a + b;
});
```

---

## ▶️ How to Run the Project

1. Download or clone the repository  
2. Open `index.html` in any browser  
3. Enter numbers → Click **Calculate**  
4. Done! 🎉

---

## 📘 Future Enhancements (Optional)

- Add subtraction, multiplication & division  
- Add keyboard support  
- Add dark mode  
- Add animations  

---

## 🙌 Author

Made with ❤️ using HTML, CSS & JavaScript.

---

## 📝 License

This project is free to use and modify.

---

If you want, I can also generate **GitHub-optimized badges**, **preview GIF**, or **explainer documentation**.

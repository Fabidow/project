
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBK0Oeoe_IokDe0ZMwvzGx4thWCF6Htb7E",
    authDomain: "fabi-5777d.firebaseapp.com",
    projectId: "fabi-5777d",
    storageBucket: "fabi-5777d.firebasestorage.app",
    messagingSenderId: "91043662124",
    appId: "1:91043662124:web:1f0ddf69f0185a98d00489"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const fullname = document.getElementById("fullname").value;
      const message = document.getElementById("message").value;

      try {
        await addDoc(collection(db, "users"), {
          email: email,
          name: fullname,
          message: message
        });

        alert("Thank you for Reaching out!");
      } catch (error) {
        console.error("Error adding document:", error);
        alert("Failed to save data");
      }
    });
  });

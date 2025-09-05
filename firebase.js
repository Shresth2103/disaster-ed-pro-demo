import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Correct Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBK9TZzazFtV26JcjQUngrEdsyw87f1uXc",
  authDomain: "disastered-pro-demo.firebaseapp.com",
  projectId: "disastered-pro-demo",
  storageBucket: "disastered-pro-demo.appspot.com",  // fixed
  messagingSenderId: "750943106849",
  appId: "1:750943106849:web:09ae61b28c4c964c887060",
  measurementId: "G-C8C2DCF7T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- Modal helpers ---
window.openModal = (id) => {
  document.getElementById(id).style.display = "block";
};
window.closeModal = (id) => {
  document.getElementById(id).style.display = "none";
};

// --- Sign up ---
window.handleSignup = async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Signed up as " + email);
    closeModal("loginModal");
  } catch (err) {
    alert("❌ " + err.message);
  }
};

// --- Login ---
window.handleLogin = async (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("🎓 Welcome " + email);
    closeModal("loginModal");
  } catch (err) {
    alert("❌ " + err.message);
  }
};

// --- Save demo/module progress ---
window.saveModuleProgress = async (moduleName, score) => {
  const user = auth.currentUser;
  if (!user) {
    alert("⚠️ Please login first!");
    return;
  }
  try {
    await setDoc(
      doc(db, "progress", user.uid),
      { [moduleName]: score, updatedAt: new Date() },
      { merge: true }
    );
    alert("✅ Progress saved for " + moduleName);
  } catch (err) {
    console.error(err);
    alert("❌ Failed to save progress");
  }
};

// --- Logout ---
window.handleLogout = async () => {
  await signOut(auth);
  alert("👋 Logged out");
};
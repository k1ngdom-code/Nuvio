//Contains FB configurations

        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
        import { getDatabase } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js"

        const firebaseConfig = {
            apiKey: "AIzaSyDT0wY3ZkDFz6PuQ9WJCA6qEazIj5cgzyQ",
            authDomain: "nuvio-980f0.firebaseapp.com",
            databaseURL: "https://nuvio-980f0-default-rtdb.firebaseio.com",
            projectId: "nuvio-980f0",
            storageBucket: "nuvio-980f0.firebasestorage.app",
            messagingSenderId: "541962014793",
            appId: "1:541962014793:web:7d236be5ec464433bcaf98",
            measurementId: "G-TZYNRQKC0K"
        };

        // Initialize Firebase and export
      export const app = initializeApp(firebaseConfig);
       export const analytics = getAnalytics(app);
       export const db = getDatabase(app)
export const auth = getAuth(app)
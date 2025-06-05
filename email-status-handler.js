document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        de: {
            success: "✅ Nachricht erfolgreich gesendet.",
            error: "❌ Fehler beim Senden der Nachricht.",
            invalid: "⚠️ Bitte fülle alle Felder korrekt aus.",
            spam: "🚫 Spam erkannt.",
            default: "ℹ️ Anfrage konnte nicht verarbeitet werden."
        },
        en: {
            success: "✅ Message sent successfully.",
            error: "❌ Error sending message.",
            invalid: "⚠️ Please fill in all fields correctly.",
            spam: "🚫 Spam detected.",
            default: "ℹ️ Request could not be processed."
        },
        hr: {
            success: "✅ Poruka uspješno poslana.",
            error: "❌ Greška prilikom slanja poruke.",
            invalid: "⚠️ Molimo ispunite sva polja ispravno.",
            spam: "🚫 Otkriven spam.",
            default: "ℹ️ Zahtjev nije moguće obraditi."
        }
    };

    const status = new URLSearchParams(window.location.search).get("status");
    const lang = localStorage.getItem("preferredLang") || "en";
    const t = translations[lang] || translations["en"];

    if (status) {
        const message = t[status] || t.default;
        const messageBox = document.createElement("div");
        messageBox.textContent = message;
        Object.assign(messageBox.style, {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "1rem",
            backgroundColor: "#14b8a6",
            color: "white",
            borderRadius: "0.375rem",
            zIndex: 1000
        });
        document.body.appendChild(messageBox);
        setTimeout(() => messageBox.remove(), 5000);
    }
});

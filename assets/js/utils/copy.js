export function copyEmail() {
    // Remplace par ton email si besoin
    const email = "quentin.mester@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copié dans le presse-papier !");
    });
}

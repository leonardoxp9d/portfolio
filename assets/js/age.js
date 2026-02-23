function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (
        monthDifference < 0 || 
        (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
        age--;
    }

    return age;
}

document.addEventListener("DOMContentLoaded", function () {
    const ageElement = document.getElementById("age");
    
    if (ageElement) {
        const birthDate = "1994-03-07"; 
        ageElement.textContent = calculateAge(birthDate);
    }
});
function calculateMarks() {
    let internal1 = parseFloat(document.getElementById("internal1").value) * 2.5 * 0.15;
    let internal2 = parseFloat(document.getElementById("internal2").value) * 2.5 * 0.15;
    let internal3 = parseFloat(document.getElementById("internal3").value) * 2.5 * 0.15;
    let attendance = parseFloat(document.getElementById("attendance").value) * 0.05;
    let assignment = parseFloat(document.getElementById("assignment").value) * 0.10;
    let mainExam = parseFloat(document.getElementById("mainExam").value) * 0.40;

    let finalScore = (internal1 + internal2 + internal3 + attendance + assignment + mainExam).toFixed(2);
    document.getElementById("finalScore").textContent = finalScore;
}

function resetFields() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    document.getElementById("finalScore").textContent = "—";
}
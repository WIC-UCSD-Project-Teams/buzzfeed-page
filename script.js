// This function calculates the quiz result based on the user's answers
function calculateResult() {
    // Get the selected values for each question
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');

    // Initialize variables to keep track of personality types
    let introvertCount = 0;
    let extrovertCount = 0;

    // Check the answers for each question
    if (q1 && q1.value === 'introvert') introvertCount++;
    if (q1 && q1.value === 'extrovert') extrovertCount++;

    if (q2 && q2.value === 'introvert') introvertCount++;
    if (q2 && q2.value === 'extrovert') extrovertCount++;

    if (q3 && q3.value === 'introvert') introvertCount++;
    if (q3 && q3.value === 'extrovert') extrovertCount++;

    if (q4 && q4.value === 'introvert') introvertCount++;
    if (q4 && q4.value === 'extrovert') extrovertCount++;

    if (q5 && q5.value === 'introvert') introvertCount++;
    if (q5 && q5.value === 'extrovert') extrovertCount++;

    // Determine the result based on the counts
    let resultText = '';
    if (introvertCount > extrovertCount) {
        resultText = 'You are more of an Introvert!';
    } else if (extrovertCount > introvertCount) {
        resultText = 'You are more of an Extrovert!';
    } else {
        resultText = 'You have a balanced personality!';
    }

    // Display the result on the page
    document.getElementById('result').innerText = resultText;
}

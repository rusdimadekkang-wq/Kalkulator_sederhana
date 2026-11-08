function hitung() {
    const val1 = parseFloat(document.getElementById('num1').value) || 0;
    const val2 = parseFloat(document.getElementById('num2').value) || 0;
    const total = val1 + val2;
    
    document.getElementById('hasil').innerText = total;
}
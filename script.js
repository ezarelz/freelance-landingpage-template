// Hal ringan untuk UX & simulasi submit tanpa backend
function simulateSubmit(e){
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const paket = document.getElementById('paket').value;
  if(!nama || !email || !paket){
    alert('Lengkapi semua data ya.');
    return false;
  }
  alert('Data terkirim (simulasi). Untuk produksi, hubungkan ke backend/form service.');
  return false;
}
document.getElementById('year').textContent = new Date().getFullYear();

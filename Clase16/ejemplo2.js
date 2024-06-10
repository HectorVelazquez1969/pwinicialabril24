const link = document.getElementById('link');

link.addEventListener('clik', function(e){
    e.preventDefault();
    alert('quisiste ir a: ' + e.currentTarget.href)
})
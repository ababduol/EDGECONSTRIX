(function(){
  var b=document.querySelector('.burger'),n=document.querySelector('.nav nav');
  if(b)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  if(n)n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');if(b)b.setAttribute('aria-expanded',false)})});
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  var f=document.getElementById('cf');
  if(f)f.addEventListener('submit',function(e){
    e.preventDefault();var d=new FormData(f);
    var t=encodeURIComponent('Enquiry: '+d.get('service')+'\nName: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('msg'));
    document.getElementById('ok').hidden=false;
    window.open('https://wa.me/2349033668123?text='+t,'_blank');
  });
})();

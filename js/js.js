
var onav_ip = document.getElementById('nav_ip')
var onav_i = document.getElementById('nav_i')
	onav_ip.onclick = function(){
		onav_i.style.display = 'none';}	


      
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:true,
   effect : 'cube',
cube: {
  slideShadows: true,
  shadow: true,
  shadowOffset: 100,
  shadowScale: 0.6
},
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
   
  })        

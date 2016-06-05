window.addEventListener('load', function () {
   'use strict'; 

    var toggler = document.getElementById('toggler'),
    
        gallery = document.querySelector('.gallery'),
        galleryItem = gallery.querySelectorAll('.gallery__item'),
        galleryItemMain = gallery.querySelector('.gallery__item--main');
        
    toggler.onclick = function (e) {
        e.preventDefault();
        toggler.classList.toggle('toggler--close');
        document.getElementById('nav').classList.toggle('nav--visible');
    };
            
    for (var i = 0; i < galleryItem.length; i++) {
        galleryItem[i].onclick = galleryFunc;
    }
       
    function galleryFunc(event) {
       
        var srcMain = galleryItemMain.getAttribute('src'),
            src = event.target.getAttribute('src');
        
        galleryItemMain.setAttribute('src', src);
        event.target.setAttribute('src', srcMain);
    };
    
   
});

 //========ЯКОРЬ==================================================


function anchorScroller(el, duration) {
      
    
        if (this.criticalSection) {
            return false;
        }
 
        if ((typeof el != 'object') || (typeof el.href != 'string'))
            return true;
 
        var address = el.href.split('#');
        if (address.length < 2)
            return true;
 
        address = address[address.length-1];
        el = 0;
 
        for (var i=0; i<document.anchors.length; i++) {
            if (document.anchors[i].name == address) {
                el = document.anchors[i];
                break;
            }
        }
        if (el === 0)
            return true;
 
        this.stopX = 0;
        this.stopY = 0;
        do {
            this.stopX += el.offsetLeft;
            this.stopY += el.offsetTop;
        } while (el = el.offsetParent);
 
        this.startX = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
        this.startY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
 
        this.stopX = this.stopX - this.startX;
        this.stopY = this.stopY - this.startY;
 
        if ( (this.stopX == 0) && (this.stopY == 0) )
            return false;
 
        this.criticalSection = true;
    
        if (typeof duration == 'undefined')
            this.duration = 1000;
        else
            this.duration = duration;
 
        var date = new Date();
        this.start = date.getTime();
        this.timer = setInterval(function () {
            var date = new Date();
            var X = (date.getTime() - this.start) / this.duration;
            if (X > 1)
                X = 1;
            var Y = ((-Math.cos(X*Math.PI)/2) + 0.5);
 
            cX = Math.round(this.startX + this.stopX*Y);
            cY = Math.round(this.startY + this.stopY*Y);
             
            document.documentElement.scrollLeft = cX;
            document.documentElement.scrollTop = cY;
            document.body.scrollLeft = cX;
            document.body.scrollTop = cY;
 
            if (X == 1) {
                clearInterval( this.timer);
                this.criticalSection = false;
            }
        }, 10);
        return false;
    };


$(document).ready(function(){
  $('.testimonials').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
    }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  });
    
  $('.slick-dots > li > button').html('');
});
	
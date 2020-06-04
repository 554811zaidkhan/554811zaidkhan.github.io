
//gallery item

const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;
// console.log(items)

// console.log(fillterButtons);
    for(let i=0;i<filterButtons.length;i++){
        filterButtons[i].addEventListener("click",function(){
            // console.log(this);
            for(let j=0;j<filterButtons.length;j++){
                filterButtons[j].classList.remove("active") 
            }
            this.classList.add("active");
            const target=this.getAttribute("data-target")

            for(let k=0;k<items.length;k++){
                items[k].style.display="none";
                if(target==items[k].getAttribute("data-id")){
                    items[k].style.display="block";
                }
                if(target=="all"){
                    items[k].style.display="block";
                }
            }

        })
    }


    //lightbox 
    // Lightbox closing script
    const closeLightbox=document.querySelector(".close-lightbox");
    const lightbox= document.querySelector(".lightbox");
    const lightboxImage=lightbox.querySelector("img");

        lightbox.addEventListener("click",function(){
            // console.log("click");
            // console.log(event.target);
            if(event.target!=lightboxImage){
                lightbox.classList.remove("show");
                lightbox.classList.add("hide");
            }
        
        })

    closeLightbox.addEventListener("click",function(){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    })

    //now whwn click to plus icon show lightbox

    const gallery=document.querySelector(".portfolio-gallery");
    const galleryItem=gallery.querySelectorAll(".item");
    console.log(galleryItem);

    galleryItem.forEach(function(element){
        element.querySelector(".fa-plus").addEventListener("click",function(){
            lightbox.classList.remove("hide");
            lightbox.classList.add("show");

            // now change img source of light box
            lightboxImage.src=element.querySelector("img").getAttribute("src")
        })
    });

    // if you want to close lightbox clicking outside of image area then



     
 //work  testmonials slider ****************************************


const sliderContainer=document.querySelector(".testi-slider");
const slides=sliderContainer.children;
const containerWidth=sliderContainer.offsetWidth;
const margin=30;
let itemPerSlide=0;
let slideDots;


    // responsive
    const responsive=[
        {breakpoint:{width:0,item:1}},// if window width>0 then 1 item show in slide
        {breakpoint:{width:991,item:2}} //if window width>1 then 1 item show in slide
    ]

    function load(){
        // console.log("call");
        for(let i=0;i<responsive.length;i++){
            if(window.innerWidth>responsive[i].breakpoint.width){
                itemPerSlide=responsive[i].breakpoint.item;
            }
        }
        start();
    }

    function start(){
        // set width of containerWidth and slides
        totalWidth=0;
        for(let i=0;i<slides.length;i++){
            slides[i].style.width=(containerWidth/itemPerSlide)-margin + "px";
            slides[i].style.margin=margin/2 + "px";
            totalWidth+=containerWidth/itemPerSlide;
        }
        // now set containerwidth
        sliderContainer.style.width=totalWidth + "px";
        // now set slide controls
         slideDots=Math.ceil(slides.length/itemPerSlide);
        // console.log(slideDots);

        for(let i=0;i<slideDots;i++){
            const div=document.createElement("div");
            div.id=i;
            div.setAttribute("onclick","controlSlide(this)")
            if(i==0){
                div.classList.add("active");
            }
            document.querySelector(".slide-controls").appendChild(div);
        }
    }

    let currentSlide=0;
    let    autoSlide=0;
            // and update the aut value when click to control button 
    function controlSlide(element){
        // console.log(element.id);
        clearInterval(timer);
        // then set again timer after click to button
        autoSlide=element.id;
        timer=setInterval(autoPlay,5000);
        currentSlide=element.id;
        changeSlide(currentSlide);
    }

    function changeSlide(){
        // first of all when clicked to control button and  active class to clicked button
        controlButtons=document.querySelector(".slide-controls").children;
                    // console.log(currentSlide);
        // console.log(controlButtons)
        for(let i=0;i<controlButtons.length;i++){
            
            controlButtons[i].classList.remove("active");

        }
        // you can do also like this 
        controlButtons[currentSlide].classList.add("active");
        sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
    }

    //  suppose we have more slides let copy past some slides
    // now animate slide
    // now auto play slide if you want to auto play slide ans also control then 

    function autoPlay(){
        // console.log("call");
        if(autoSlide==slideDots-1){
            autoSlide=0;
        }
        else{
            autoSlide++;
        }
        changeSlide(autoSlide)
    }

    let timer=setInterval(autoPlay,5000);

    // now when click to controlButtons clear timer

    window.onload=load();


    // Header fixed

    window.onscroll=function(){
        const docScrollTop=document.documentElement.scrollTop;
        // if window width greater than 991px then header fixed else not fixed
        if(window.innerWidth>991){
            // if docScrollTop position greater than 100 then header will be fixed
            if(docScrollTop>100){
                document.querySelector("header").classList.add("fixed")
            }
            else{
                document.querySelector("header").classList.remove("fixed")
            }
        }
    } //lets reduse the window width less than 991 and see heading fixing or not
        // now inceasing width 991


        // add class active to navbar links when click

        const navbar=document.querySelector(".navbar");
              a=navbar.querySelectorAll("a");
               console.log(a);

            a.forEach(function(element){
                element.addEventListener("click",function(){
                    for(let i=0;i<a.length;i++){
                        a[i].classList.remove("active");
                    }
                    this.classList.add("active");
                    document.querySelector(".navbar").classList.toggle("show");

                })
            })


    // ham-burger 

    const hamBurger=document.querySelector(".ham-burger");

    hamBurger.addEventListener("click",function(){
        document.querySelector(".navbar").classList.toggle("show");
    })    

    // if you want to close navbar when click to link 
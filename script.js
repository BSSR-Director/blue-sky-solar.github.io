$('body').click(function(e){const hamburger=document.querySelector(".header-hamburger"); const hamburgerDropdown=document.querySelector(".header-hamburger-dropdown"); if(e.target.classList=="header-hamburger"){if(hamburger.classList.contains("active")){hamburger.classList.remove("active"); hamburgerDropdown.classList.remove("active");}else{hamburger.classList.add("active"); hamburgerDropdown.classList.add("active");}return;}if($(e.target).closest('.header-hamburger').length){if(hamburger.classList.contains("active")){hamburger.classList.remove("active"); hamburgerDropdown.classList.remove("active");}else{hamburger.classList.add("active"); hamburgerDropdown.classList.add("active");}return;}if(hamburger.classList.contains("active")){hamburger.classList.remove("active"); hamburgerDropdown.classList.remove("active"); return;}});
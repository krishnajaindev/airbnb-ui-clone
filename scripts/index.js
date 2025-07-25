window.addEventListener("load", () => {
    const header = document.querySelector("header");
    const middleDiv = document.getElementById('middle-div');
    const search = document.getElementById('search');
    const searchLater = document.getElementById('search-later');

    if (!middleDiv || !search || !searchLater || !header) return;
    
    let isShrunk = false;

    function handleScroll() {
        const scrollTop = window.scrollY;
        if (scrollTop > 5 && isShrunk) return;
        if (scrollTop > 5 && !isShrunk) {
            header.classList.add('header-shrink');
            middleDiv.classList.add('midcss');
            search.classList.add('searchcss');
            searchLater.classList.add('latercss');
            searchLater.classList.remove('anicss');
            isShrunk = true;
        }

        if (scrollTop === 0 && isShrunk) {
            searchLater.classList.add('anicss');
            header.classList.remove('header-shrink');
            middleDiv.classList.remove('midcss');
            search.classList.remove('searchcss');
            searchLater.classList.remove('latercss');
            
            isShrunk = false;
        }
    }

    handleScroll(); 

    window.addEventListener("scroll", handleScroll);
});

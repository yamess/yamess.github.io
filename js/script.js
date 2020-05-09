// Portfolio Item filter
const filterContainer=document.querySelector(".portfolio-filter"),
    filterBtns=filterContainer.children,
    totalFilterBtn=filterBtns.length,
    portfolioItems=document.querySelector(".portfolio-items").children;
    totalPortfolioItem=portfolioItems.length
console.log(totalPortfolioItem)

    for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click", function () {
            filterContainer.querySelector(".active").classList.remove("active")
            this.classList.add("active");
        })
    }